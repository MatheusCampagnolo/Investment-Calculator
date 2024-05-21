function calculateSimpleInterest() {
    const initialValue = parseFloat(document.getElementById('simple-initial-value').value);
    let rate = parseFloat(document.getElementById('simple-rate').value) / 100;
    let time = parseFloat(document.getElementById('simple-time').value);
    const ratePeriod = document.getElementById('simple-rate-period').value;
    const timePeriod = document.getElementById('simple-time-period').value;

    if (isNaN(initialValue) || isNaN(rate) || isNaN(time)) {
        alert('Please, fill all the fields with valid numbers');
        return;
    }

    if (ratePeriod === 'monthly') {
        rate *= 12;
    }

    if (timePeriod === 'months') {
        time /= 12;
    }

    const simpleInterest = initialValue * rate * time;
    const simpleTotal = initialValue + simpleInterest;

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

    if (isNaN(initialValue) || isNaN(monthly) || isNaN(rate) || isNaN(time)) {
        alert('Please, fill all the fields with valid numbers');
        return;
    }

    if (ratePeriod === 'monthly') {
        rate *= 12;
    }

    if (timePeriod === 'months') {
        time /= 12;
    }

    const frequency = 12;

    const totalInvested = initialValue + (monthly * time * frequency);

    let compoundTotal = initialValue;
    for (let i = 0; i < time * frequency; i++) {
        compoundTotal = (compoundTotal + monthly) * (1 + rate / frequency);
    }

    document.getElementById('compound-invested-result').textContent = `Total Invested: $${totalInvested.toFixed(2)}`;
    document.getElementById('compound-interest-result').textContent = `Total with Compound Interest: $${compoundTotal.toFixed(2)}`;
}