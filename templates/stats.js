// Read the json dataset
d3.json("../data/applications.json").then((data) => {

    var dependents = Object.values(data.Dependents)
    var loan_status = Object.values(data.Loan_Status)
    
    const depOcc = dependents.reduce(function (acc, curr) {
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

        Plotly.newPlot("bar",[data],layout)


    // Event Listener
    d3.select("#selectOption").on("change", () => {
        var element = d3.select("#selectOption");
        var value = d3.select("#selectOption").property("value");

        if (value == 'dependents'){
            var dependents = Object.values(data.Dependents)
            var loan_status = Object.values(data.Loan_Status)
    
            const depOcc = dependents.reduce(function (acc, curr) {
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
        
        } else if (value == 'amount'){
            
            // Loan Amount Vs Loan Status Chart
            // var amount = (Object.values(data.LoanAmount))
            // var loan_no = Object.values(data.LoanAmount)

            // console.log(amount )

            // var trace = {
            //     labels: loan_amount,
            //     values: ,
            //     type:"pie"
            // }

            // var data = trace

            // var layout = {
            //     title:"Loan Status Vs Loan Amount",
            //     xaxis: {title:"Loan Amount"},
            //     yaxis: {title:"Count of Applications"}
            // }
        
        } else if (value == 'history'){

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

        } else if (value == 'property'){

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
        
        Plotly.newPlot("bar",[data],layout);

    });
})