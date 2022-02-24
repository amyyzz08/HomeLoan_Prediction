from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    





if __name__ == "__main__":
    app.run(debug=True)