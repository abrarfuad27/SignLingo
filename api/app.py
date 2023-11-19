from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
import numpy as np
import tensorflow as tf
from keras.optimizers import Adam
from PIL import Image
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.mutable import Mutable


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'  # SQLite database for simplicity
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    activities = db.Column(MutableList.as_mutable(db.JSON), default=list)




@app.route('/', methods=['OPTIONS'])
def handle_options():
    response = app.response_class(response="", status=200)
    response.headers['Access-Control-Allow-Origin'] = '*'  # Replace '*' with your frontend URL
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'OPTIONS, POST'
    return response

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    new_user = User(username=data['username'], email=data['email'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'Registration successful'})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()
    if user and password == user.password:
        return jsonify({'message': 'Login successful', 'user': {'username': user.username, 'email': user.email}}), 200
    else:
        # Invalid credentials
        return jsonify({'message': 'Invalid username or password'}), 401
    

@app.route('/api/update', methods=['POST'])
def update():
    data = request.get_json()
    username = data.get('username')
    percentage = data.get('percentage')
    user = User.query.filter_by(username=username).first()
    if user:
        user.activities.append(percentage)
        print(user.activities,percentage)
        db.session.commit() 
        print("After commit:", user.activities) # Add this line to commit changes to the database
        return jsonify({'message': 'Record of user was updated successfully','arr':user.activities}), 200
    else:
        return jsonify({'error': 'User not found'}), 404
    

@app.route('/api/getrecord', methods=['POST'])
def get_record():
    data = request.get_json()
    username = data.get('username')
    user = User.query.filter_by(username=username).first()
    if user:
        
        return jsonify({'activity': user.activities}), 200
    else:
        return jsonify({'error': 'User not found'}), 404


@app.route('/api/photo', methods=['POST'])
def receive_photo():
    try:
        if 'file' not in request.files:
            return jsonify({'message': 'No file part'}), 400

        file = request.files['file']

        if file.filename == '':
            return jsonify({'message': 'No selected file'}), 400
        
        json_data = get_data(file)

        return json_data
    except Exception as e:
        return jsonify({'message': f'Error: {str(e)}'}), 500


#@app.route('/api/data', methods=[''])
def get_data(img):
    
    # load model
    model = tf.keras.models.load_model("try_model.h5")
    model.compile(loss='categorical_crossentropy',
                optimizer=Adam(learning_rate=1e-4),
                metrics=['accuracy'])

    img_path = img
    img = Image.open(img_path)

    # Call the preprocess_image function
    letter = Model.preprocess_image(img, model)

    data = {"result": letter}  # Replace with your actual data
    return jsonify(data)


class Model():

    def preprocess_image(img, best_model):
        labels = ['1','10','2','3','4','5','6','7','8','9','A','B','Blank','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','del','space']

        # Resize the image to (28, 28)
        img = img.resize((28, 28))

        # Convert the image to grayscale
        img_array = np.array(img.convert('L'))

        # Expand dimensions to match model input shape
        img_batch = np.expand_dims(img_array, axis=0)

        # Preprocess the image for the model
        processed_image = tf.keras.applications.resnet50.preprocess_input(img_batch)

        # Make predictions using the model
        predictions = best_model.predict(processed_image)

        # Get the predicted label
        max_index = np.argmax(predictions)
        predicted_label = labels[max_index]

        return predicted_label

if __name__ == '__main__':
    app.run(debug=True)