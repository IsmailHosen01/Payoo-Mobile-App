const validPin = 1234

// function to get input values
function getInputValueNumber(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseInt(inputValue);
    return inputValueNumber;
}

function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

// function to get inner text
function getInnerText(id) {
    const innerText = document.getElementById(id).innerText
    const innerTextNumber = parseInt(innerText);
    return innerTextNumber
}

// function to set inner text
function setInnerText(value) {
    const totalAmount = document.getElementById('total-amount')
    totalAmount.innerText = value
}

// function to toggle
function handleToggle(id) {
    const forms = document.getElementsByClassName('form')
    for (const form of forms) {
        form.style.display = 'none'
    }

    document.getElementById(id).style.display = 'block'
}


// function to toggle button
function handleToggleButton(id) {
    const formButtons = document.getElementsByClassName('form-btn')

    for (const button of formButtons) {
        button.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]', 'text-[#0874f2]')
        button.classList.add('border-gray-300')
    }

    document.getElementById(id).classList.remove('border-gray-300')
    document.getElementById(id).classList.add('bg-[#0874f20d]', 'text-[#0874f2]')
}


document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault()

    const bankName = getInputValue('bank-name')
    const accountNumber = getInputValue('account-number')
    const amount = getInputValueNumber('add-amount');
    const pinNumber = getInputValueNumber('add-pin')

    const totalAmount = getInnerText('total-amount')

    if (accountNumber.length < 11 || accountNumber.length > 11) {
        alert('Please provide a valid account number')
        return
    }

    if (pinNumber !== validPin) {
        alert('Pin is incorrect')
        return
    }
    const newTotalAmount = totalAmount + amount
    setInnerText(newTotalAmount)
})


// cash out section
document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const agentNumber = getInputValue('agent-number')
    const cashOutAmount = getInputValueNumber('cash-out-amount')
    const pinNumber = getInputValueNumber('cash-out-pin')

    const totalAmount = getInnerText('total-amount');

    if (agentNumber.length < 11 || agentNumber.length > 11) {
        alert('Please provide a valid account number')
        return
    }

    if (pinNumber !== validPin) {
        alert('Pin is incorrect')
        return
    }

    const newTotalAmount = totalAmount - cashOutAmount
    setInnerText(newTotalAmount)
})



// toggling feature

document.getElementById('add-money-button').addEventListener('click', function () {
    handleToggle('add-money-parent')
    handleToggleButton('add-money-button')

})


document.getElementById('cash-out-button').addEventListener('click', function () {
    handleToggle('cash-out-parent')
    handleToggleButton('cash-out-button')
})


