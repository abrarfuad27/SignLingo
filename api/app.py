from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
import numpy as np
import tensorflow as tf
from keras.optimizers import Adam
from PIL import Image


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


@app.route('/', methods=['OPTIONS'])
def handle_options():
    response = app.response_class(response="", status=200)
    response.headers['Access-Control-Allow-Origin'] = '*'  # Replace '*' with your frontend URL
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'OPTIONS, POST'
    return response

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
    # Load the image using PIL
    # load model
    model = tf.keras.models.load_model("try_model.h5")
    model.compile(loss='categorical_crossentropy',
                optimizer=Adam(learning_rate=1e-4),
                metrics=['accuracy'])

    img_path = img
    img = Image.open(img_path)

    # Create an instance of the Model class

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