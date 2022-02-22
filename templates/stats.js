// Read the json dataset
d3.json("../data/json_data").then((data) => {

    var dependents = Object.values(data.Dependents)
    var loan_status = Object.values(data.Loan_Status)

    // var pro_type = Object.values(data.Property_Area)
    
    const depOcc = dependents.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});

    const loanStaOcc = dependents.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
  
    // Dependents Vs Loan Status Chart
    var trace = {
        x: Object.keys(depOcc),
        y: Object.values(depOcc),
        type: "bar"
    }

    var data = trace

    var layout = {
        title:"Loan Status Vs Dependents",
        xaxis: {title:"Number of Dependents"},
        yaxis: {title:"Count of Applications"}
    }
    
    // Loan Amount Vs Loan Status Chart
    var loan_amount = Object.values(data.LoanAmount)



    // Credit History Vs Loan Status Chart
    var credit_history = Object.values(data.Credit_History)

    const historyStaOcc = credit_history.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});


    var trace = {
        x: Object.keys(historyStaOcc),
        y: Object.values(historyStaOcc),
        type: "bar"
    }

    var data = trace

    var layout = {
        title:"Loan Status Vs Credit History",
        xaxis: {title:"Credit History"},
        yaxis: {title:"Count of Applications"}
    }

  
    // Property Area Vs Loan Status Chart 
    var property_area =Object.values(data.Property_Area)

    const PropertyOcc = property_area.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});

    var trace = {
        x: Object.keys(PropertyOcc),
        y: Object.values(PropertyOcc),
        type: "bar"
    }

    var data = trace

    var layout = {
        title:"Loan Status Vs Type of Property Area",
        xaxis: {title:"Property Area Types"},
        yaxis: {title:"Count of Applications"}
    }

    
    Plotly.newPlot("bar",[data],layout)
  
})

