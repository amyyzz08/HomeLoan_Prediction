// Read the json dataset
d3.json("../data/homeloan_applications.json").then((data) => {

  
           
            // Property Area Vs Loan Status Chart 
          
            var amount = data.map(row => row.LoanAmount)
            var status = data.map(row => row.Loan_Status)

            var trace = {
                x:status,
                y:amount,
                type:"box",
                boxoints: "all"
            };

            var data = trace

            var layout = {
                title:"Loan Status Vs Loan Amount",
                yaxis: {title:"Loan Amount in thousands"}
            }
    

        Plotly.newPlot("bar",[data],layout)
})
    // Event Listener
    // d3.select("#selectOption").on("change", () => {
    //     var element = d3.select("#selectOption");
    //     var value = d3.select("#selectOption").property("value");

    //     if (value == 'dependents'){
    //         var loan_status = data.map(row => [row.Loan_Status, row.Dependents])

    //         const depOcc = loan_status.reduce(function (acc, curr) {
    //             return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    //         }, {});

    //         // Dependents Vs Loan Status Chart
    //         var trace = {
    //             x: Object.keys(depOcc),
    //             y: Object.values(depOcc),
    //             type: "bar"
    //         }

    //         var data = trace

    //         var layout = {
    //             title:"Loan Status Vs Dependents",
    //             xaxis: {title:"Number of Dependents"},
    //             yaxis: {title:"Count of Applications"}
    //         }
        
    //     } else if (value == 'amount'){
            
    //         // Loan Amount Vs Loan Status Chart
        
    //         var amount = data.map(row => row.LoanAmount)
    //         var status = data.map(row => row.Loan_Status)

    //         var trace = {
    //             x:status,
    //             y:amount,
    //             type:"box",
    //             boxoints: "all"
    //         };

    //         var data = trace

    //         var layout = {
    //             title:"Loan Status Vs Loan Amount",
    //             yaxis: {title:"Loan Amount in thousands"}
    //         }
    //     }
        
//         } else if (value == 'history'){

//             // Credit History Vs Loan Status Chart
//             var credit_history = data.map(row => [row.Loan_Status,row.Credit_History])

//             const historyStaOcc = credit_history.reduce(function (acc, curr) {
//                 return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
//             }, {});


//             var trace = {
//                 x: Object.keys(historyStaOcc),
//                 y: Object.values(historyStaOcc),
//                 type: "bar"
//             }

//             var data = trace

//             var layout = {
//                 title:"Loan Status Vs Credit History",
//                 xaxis: {title:"Credit History"},
//                 yaxis: {title:"Count of Applications"}
//             }

//         } else if (value == 'property'){

//             // Property Area Vs Loan Status Chart 
//             var property_area =data.map(row => [row.Loan_Status,row.Property_Area])
        
//             const PropertyOcc = property_area.reduce(function (acc, curr) {
//                 return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
//             }, {});

//             var trace = {
//                 x: Object.keys(PropertyOcc),
//                 y: Object.values(PropertyOcc),
//                 type: "bar"
//             }

//             var data = trace

//             var layout = {
//                 title:"Loan Status Vs Type of Property Area",
//                 xaxis: {title:"Property Area Types"},
//                 yaxis: {title:"Count of Applications"}
//             }
        
//         Plotly.newPlot("bar",[data],layout);

//     };
// })