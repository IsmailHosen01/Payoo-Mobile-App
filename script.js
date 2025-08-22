// Login button functionality
document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const mobileNumber = '00123456789'
    const pinNumber = '1234'

    const mobileNumberValue = document.getElementById('mobile-number').value
    const pinNumberValue = document.getElementById('pin-number').value
    
    if (mobileNumberValue === mobileNumber && pinNumberValue === pinNumber) {
        window.location.href="./home.html"
    }
    else {
        alert('Invalid info')
    }
})