d3.select("#predict").on("click", () =>{
   
    var gender = d3.select('input[name="gender"]:checked').property("value");
    var married = d3.select('input[name="marital"]:checked').property("value");
    var dependents = d3.select('input[name="dep"]:checked').property("value");
    var self_employed = d3.select('input[name="emp"]:checked').property("value");
    var loan_amount = d3.select("#loan_amount").property("value");
    var credit_history = d3.select("#history").property("value");
    var property_area = d3.select("#area").property("value");
    var total_income = d3.select("#total_income").property("value");

    console.log(gender);
    console.log(married);
    console.log(dependents);
    console.log(self_employed);
    console.log(loan_amount);
    console.log(credit_history);
    console.log(property_area);
    console.log(total_income);
    
    d3.json(
        `/predict/${gender}/${married}/${dependents}/${self_employed}/${loan_amount}/${credit_history}/${property_area}/${total_income}`
    ).then((predicted) => { 
        var loan_status = Math.floor(predicted.prediction)
        var loan_status_text = ""

        if(loan_status == 1){
            loan_status_text = `Congratulations! You are eligible for this loan.`
        } else if (loan_status == 0){
            loan_status_text = `Your application for this loan is likely to decline`
        } else { 
            loan_status_text = `Not enough information to determine your loan status`
        }

        d3.select("#predicted-status").html(`
            <p>${loan_status_text}</p>
        `)   
    });
});