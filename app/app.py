from flask import Flask, render_template 
import pandas as pd
import os 
from prediction import predict


# create app 
app = Flask(__name__)

# Page Routes

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/predict")
def predict_page():
    return render_template("predict.html")    

@app.route("/predict/<gender>/<married>/<dependents>/<self_employed>/<loan_amount>/<credit_history>/<property_area>/<total_income>",methods=["GET"])
def do_predict(gender, married, dependents, self_employed, loan_amount, credit_history, property_area, total_income):
    user_inputs = {
        "gender":gender,
        "married":married,
        "dependents":dependents,
        "self_employed":self_employed,
        "loan_amount":float(loan_amount),
        "credit history":float(credit_history),
        "property_area": property_area,
        "total_income":float(total_income)
    }
    prediction = int(predict(user_inputs)[0])

    return {"prediction": prediction}


@app.route("/visualisations")
def visuals():
    return render_template("stats.html")


if __name__ == "__main__":
    app.run(debug=True)