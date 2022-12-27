from flask import Flask
from flask import Flask,render_template,request
import os

#pip3 install jsonlines
import jsonlines


app = Flask(__name__)

@app.route("/")
def index():
    return "I will come later after learning bootstrap"

if __name__ == '__main__':
    app.run(port=5000,debug=True)