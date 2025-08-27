const validPin = 1234
const transactionHistory = []

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


// log out button
document.getElementById('log-out-button').addEventListener('click', function () {
    window.location.href = './index.html'
})

// add money section
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault()

    const bankName = getInputValue('bank-name')
    const accountNumber = getInputValue('account-number')
    const amount = getInputValueNumber('add-amount');
    const pinNumber = getInputValueNumber('add-pin')

    const totalAmount = getInnerText('total-amount')

    if (amount <= 0) {
        alert('Invalid amount')
        return
    }

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

    const data = {
        name: "Add Money",
        time: new Date().toLocaleTimeString()
    }

    transactionHistory.push(data)
})


// cash out section
document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const agentNumber = getInputValue('agent-number')
    const cashOutAmount = getInputValueNumber('cash-out-amount')
    const pinNumber = getInputValueNumber('cash-out-pin')

    const totalAmount = getInnerText('total-amount');

    if (cashOutAmount <= 0 || cashOutAmount > totalAmount) {
        alert('Invalid amount')
        return
    }

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

    const data = {
        name: "Cash Out",
        time: new Date().toLocaleTimeString()
    }

    transactionHistory.push(data)
})


// transaction section
document.getElementById('transaction-button').addEventListener('click', function () {
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = ''

    for (const data of transactionHistory) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="bg-white rounded-xl p-4 flex justify-between items-center mb-3">
            <div class="flex items-center gap-3">
                <div class=" bg-[#0808080d] rounded-full p-3">
                    <img src="./assets/wallet1.png" alt="">
                </div>
                <div>
                    <h3 class="text-[#080808b3] font-bold">${data.name}</h3>
                    <p class="text-[#080808b3] text-xs font-[400]">${data.time}</p>
                </div>
            </div>

            <i class="fa-solid fa-ellipsis rotate-90 text-xl text-[#080808b3]"></i>
        </div>`
        transactionContainer.appendChild(div)
    }
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

document.getElementById('transfer-money-button').addEventListener('click', function () {
    handleToggle('transfer-money-parent')
    handleToggleButton('transfer-money-button')
})

document.getElementById('bonus-button').addEventListener('click', function () {
    handleToggle('bonus-parent')
    handleToggleButton('bonus-button')
})

document.getElementById('pay-bill-button').addEventListener('click', function () {
    handleToggle('pay-bill-parent')
    handleToggleButton('pay-bill-button')
})

document.getElementById('transaction-button').addEventListener('click', function () {
    handleToggle('transactions-parent')
    handleToggleButton('transaction-button')
})

