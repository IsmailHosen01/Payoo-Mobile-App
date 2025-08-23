const validPin = 1234

document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault()

    const bankName = document.getElementById('bank-name').value
    const accountNumber = document.getElementById('account-number').value
    const amount = parseInt(document.getElementById('add-amount').value)
    const pinNumber = parseInt(document.getElementById('add-pin').value)

    const totalAmount = parseInt(document.getElementById('total-amount').innerText)

    if (accountNumber.length < 11 || accountNumber.length > 11) {
        alert('Please provide a valid account number')
        return
    }

    if (pinNumber !== validPin) {
        alert('Pin is incorrect')
        return
    }
    const newTotalAmount = totalAmount + amount
    document.getElementById('total-amount').innerText = newTotalAmount
})


// cash out section
document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const agentNumber = document.getElementById('agent-number').value
    const cashOutAmount = parseInt(document.getElementById('cash-out-amount').value)
    const pinNumber = parseInt(document.getElementById('cash-out-pin').value)

    const totalAmount = parseInt(document.getElementById('total-amount').innerText)

    if (agentNumber.length < 11 || agentNumber.length > 11) {
        alert('Please provide a valid account number')
        return
    }

    if (pinNumber !== validPin) {
        alert('Pin is incorrect')
        return
    }

    const newTotalAmount = totalAmount - cashOutAmount
    document.getElementById('total-amount').innerText = newTotalAmount
})



// toggling feature

document.getElementById('add-money-button').addEventListener('click', function () {
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'block'
})


document.getElementById('cash-out-button').addEventListener('click', function () {
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'block'
})


