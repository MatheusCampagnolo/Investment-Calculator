function calculateSimpleInterest() {
    const initialValue = parseFloat(document.getElementById('simple-initial-value').value);
    let rate = parseFloat(document.getElementById('simple-rate').value) / 100;
    let time = parseFloat(document.getElementById('simple-time').value);
    const ratePeriod = document.getElementById('simple-rate-period').value;
    const timePeriod = document.getElementById('simple-time-period').value;

    // alert if any field is empty
    if (isNaN(initialValue) || isNaN(rate) || isNaN(time)) {
        alert('Please, fill all the fields with valid numbers');
        return;
    }

    // If the rate is provided on a monthly basis, adjust it to an annual rate
    if (ratePeriod === 'monthly') {
        rate *= 12;
    }

    // If the time is provided in months, adjust it to years
    if (timePeriod === 'months') {
        time /= 12;
    }

    // Calculate the simple interest and the total amount
    const simpleInterest = initialValue * rate * time;
    const simpleTotal = initialValue + simpleInterest;

    // Display the results
    document.getElementById('simple-invested-result').textContent = `Total Invested: $${initialValue.toFixed(2)}`;
    document.getElementById('simple-interest-result').textContent = `Total with Simple Interest: $${simpleTotal.toFixed(2)}`;
}

function calculateCompoundInterest() {
    const initialValue = parseFloat(document.getElementById('compound-initial-value').value);
    const monthly = parseFloat(document.getElementById('compound-monthly').value);
    let rate = parseFloat(document.getElementById('compound-rate').value) / 100;
    let time = parseFloat(document.getElementById('compound-time').value);
    const ratePeriod = document.getElementById('compound-rate-period').value;
    const timePeriod = document.getElementById('compound-time-period').value;

    // alert if any field is empty
    if (isNaN(initialValue) || isNaN(monthly) || isNaN(rate) || isNaN(time)) {
        alert('Please, fill all the fields with valid numbers');
        return;
    }

    // If the rate is provided on a monthly basis, adjust it to an annual rate
    if (ratePeriod === 'monthly') {
        rate *= 12;
    }

    // If the time is provided in months, adjust it to years
    if (timePeriod === 'months') {
        time /= 12;
    }

    // Set the frequency of the compound interest
    const frequency = 12;

    // Calculate the total amount invested
    const totalInvested = initialValue + (monthly * time * frequency);

    // Calculate the total amount with compound interest
    let compoundTotal = initialValue;
    for (let i = 0; i < time * frequency; i++) {
        compoundTotal = (compoundTotal + monthly) * (1 + rate / frequency);
    }

    // Display the results
    document.getElementById('compound-invested-result').textContent = `Total Invested: $${totalInvested.toFixed(2)}`;
    document.getElementById('compound-interest-result').textContent = `Total with Compound Interest: $${compoundTotal.toFixed(2)}`;
}