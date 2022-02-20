# Dependencies
from flask import Flask, render_template, redirect 

# Creating app
app= Flask(__name__)


# Creating route for homepage
@app.route("/")
def homepage():
    

# Creating route when button is clicked
@app.route("/stats")
def stats():

@app.route("/predict")
def stats():


if __name__ == "__main__":
    app.run(debug=True)