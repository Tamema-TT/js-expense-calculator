function getBalance() {
    const balance = document.getElementById('balance');
    return balance;
}

function getInputValues(section) {
    const input = document.getElementById('input-' + section);
    const inputValue = parseFloat(input.value);
    if(inputValue < 0) {
        console.log('in neg')
        const alertNeg = document.getElementById('alert-neg');
        alertNeg.innerText = 'Type positive numbers in ' + section;
        alertNeg.style.display = 'block';
        return 'negative';
    }
    
    else if(isNaN(inputValue) == true) {
        console.log('in nan')
        const alertNan = document.getElementById('alert-nan');
        alertNan.innerText = 'Type valid numbers in ' + section;
        alertNan.style.display = 'block';
        return 'nan';
    }
    else {
        console.log('in num')
        return inputValue;
    }
}


document.getElementById('calculate').addEventListener('click', function() {
    const income = getInputValues('income');
    const food = getInputValues('food');
    const rent = getInputValues('rent');
    const clothes = getInputValues('clothes');
    console.log(income)

    // extra starts
    if((income != ('negative' && 'nan')) && (food != ('negative' && 'nan'))){
        console.log(income)
        console.log('error')
    }

    if((income && food) != ('negative' && 'nan')){
        console.log(income)
        console.log('error')
    }
    // extra ends

    if((income != ('negative' && 'nan')) && (food != ('negative' && 'nan')) && (rent != ('negative' && 'nan')) && (clothes != ('negative' && 'nan'))){
        console.log('if')
        const totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = food + rent + clothes;
        getBalance().innerText = income - totalExpenses.innerText;
    }
});

document.getElementById('save').addEventListener('click', function() {
    const savingPer = getInputValues('save');
    if(savingPer != ('negative' || 'nan')) {
        const savingAmount = document.getElementById('saving-amount');
        const balance = getBalance().innerText;
        const remainingBalance = document.getElementById('remaining-balance');
        const savingTotal = (savingPer * balance) / 100;
        if(savingAmount.innerText < balance) {
            savingAmount.innerText = savingTotal;
            remainingBalance.innerText = balance - savingTotal;
        }
    }
});