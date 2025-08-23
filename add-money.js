const validPin = 1234

document.getElementById('add-money-btn').addEventListener('click', function(event) {
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