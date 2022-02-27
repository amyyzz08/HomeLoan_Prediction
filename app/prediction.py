import pandas as pd
import joblib

# Function to predict result based on user input

def predict(user_inputs):
    classifier = joblib.load("classifier.sav")
    encoder=joblib.load("encoder.sav")

    gender = user_inputs["gender"]
    married = user_inputs["married"]
    dependents = user_inputs["dependents"]
    self_employed = user_inputs["self_employed"]
    loan_amount = user_inputs["loan_amount"]
    credit_history = user_inputs["credit history"]
    property_area = user_inputs["property_area"]
    total_income = user_inputs["total_income"]

    decoded_data = pd.DataFrame({
        "Gender": [gender], 
        "Married": [married],
        "Dependents": [dependents], 
        "Self_Employed": [self_employed], 
        "Property_Area": [property_area]
    })

    encoded_data = encoder.transform(decoded_data)
    encoded_df = pd.DataFrame(columns=encoder.get_feature_names(["Gender",
        "Married",
        "Dependents",
        "Self_Employed",
        "Property_Area"]),data=encoded_data.toarray())

    df = pd.DataFrame({
        "LoanAmount": [loan_amount],
        "Credit_History": [credit_history], 
        "Total_Income": [total_income]
    })

    merge_df = pd.concat([encoded_df, df], axis=1)
    predict_df = merge_df[["Gender_Male",
              "Married_Yes",
              "Dependents_0",
              "Dependents_1",
              "Dependents_2",
              "Dependents_3+",
              "Self_Employed_Yes",
              "Property_Area_Rural",
              "Property_Area_Semiurban",
              "Property_Area_Urban",
              "LoanAmount",
              "Credit_History",
              "Total_Income"]]

    
    loan_status = classifier.predict(predict_df)
    return loan_status