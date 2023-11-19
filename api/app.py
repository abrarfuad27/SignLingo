from flask import Flask, jsonify, render_template, Response
import numpy as np
import tensorflow as tf
from keras.optimizers import Adam
from PIL import Image


app = Flask(__name__)

@app.route('/predict', methods=['GET'])
def get_data():
    # Load the image using PIL
    img_path = './photo.jpg'
    img = Image.open(img_path)

    # Call the preprocess_image function
    letter = Model.preprocess_image(img, model)

    data = {"result": letter}  # Replace with your actual data
    return jsonify(data)



# load model
# @app.route('/getmodel', methods=['GET'])
# def get_model():
model = tf.keras.models.load_model("try_model.h5")
model.compile(loss='categorical_crossentropy',
            optimizer=Adam(learning_rate=1e-4),
            metrics=['accuracy'])

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
    get_data()