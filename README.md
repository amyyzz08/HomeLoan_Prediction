# **Home Loan Prediction using Machine Learning**

![](images/home_loan.png)

<h3><b>Purpose and Motivation</b></h3>
<hr>
<p>A lot of factors are considered when making the decision wheather or not a home loan is approved by Banks or other financial institutions. 
</p>

<p>With the help of machine learning and the details of an applicants details of their current living and financial situations, we can predict if the applicant is eligible for a particular home loan or not.</p>

<p>Following this notion, I was curious to investigate any trends in terms of the loan status of all the home loan applications and whether a few independent variables together alone from a financial perspective would affect the loan status.</p>


<h3><b>Solution Architecture</b></h3>
<hr>

![](images/solution.png)



<h3><b>About the Data</b></h3>
<hr>
<p>The dataset used in this project is found on <a href="https://www.kaggle.com/">Kaggle.com</a></p>
<p>Below shows the variables and its definitions</p>

Variable|Definition|
|:----------|:----------|
|Gender|Male or Female|
|Married|Applicant Married (Y/N)|
|Dependants|Number of dependents the applicant has|
|Self_Employed|Is the applicant self-employed? (Y/N)|
|Total_Income|Applicant's and Co-applicant's (if applicable) income combined| 
|LoanAmount|The loan amount the apllicant wishes to apply for (in thousands)|
|Credit_History|0.0: Applicant has not repaid their previous debt<br> 1.0: Applicant has repaid their previous debt|
|Property_Area|What area type is the property located at? (Urban/SemiUrban/Rural)|

<h3><b>Selecting the Model</b></h3>
<hr>
<p>For this project, the type of Machine Learning algorithm that was focussed on was Supervised Learning. The ML algorithm was given a sample of data to train on where the dependent variable being the approval loan status was present.</p>
<p>The remiaing data set was used as the test sample and the dependent variable is removed to see how accurate the model is.</p>
<p>The chosen model for this project is a Logistic Regression model where the prediction will be classified as either the home loan will be approved (Y) or the home loan will not be approved (N)

<b><u>Model Metrics</u></b>
<br>
 ![](images/test.png)

<h3><b>Usage</b></h3>
<hr>

<h3><b>1. How to install Python requirements/ dependencies</b></h3>
  <p>Pip install requirement.txt in terminal to install.
<h3><b>2. How to run the code locally</b></h3>
  <p>In terminal, run python app.py in the PythonData environment and copy the url into your web browser

  ![](images/local.png)

<hr>
<h3><b>Homepage </b></h3>

  ![](images/homepage.png)

  <h3><b>Visualisations </b></h3>

  ![](images/visualisations.png)

   <h3><b>Prediction</b></h3>

  ![](images/predict.png)








