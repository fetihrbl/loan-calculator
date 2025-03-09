function calculateLoan() {
    let loanAmountValue = Number(document.getElementById("loan-amount").value);
    let interestRateValue = Number(document.getElementById("interest-rate").value);
    let monthsToPayValue = Number(document.getElementById("months-to-pay").value);

    // check invalid value
    if(loanAmountValue <= 0 || interestRateValue < 0 || monthsToPayValue <= 0) {
        document.getElementById("payment").innerHTML = "Please enter a valid value!";
        return;
    }

    //Calculate
    let interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;
    let monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);

    //Write the screen
    document.getElementById("payment").innerHTML = `Montly Payment: ${monthlyPayment}`;
}