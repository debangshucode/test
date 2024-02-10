var a = document.getElementById("login");
var b = document.getElementById("register");
var c = document.getElementById("btn");
var loginBtn = document.getElementById("loginBtn");
var registerBtn = document.getElementById("registerBtn");

function moveRegisterForm() {
    a.style.left = "-400px";
    b.style.left = "50px";
    c.style.left = "110px";
    loginBtn.style.color = "black";
    registerBtn.style.color = "white";
}

function moveLoginForm() {
    a.style.left = "50px";
    b.style.left = "450px";
    c.style.left = "0";
    loginBtn.style.color = "white";
    registerBtn.style.color = "black";
}


function login() {

    const userId = document.getElementById('email_Id').value;
    const password = document.getElementById('pass').value;

    // Replace 'login_api' with the actual URL of  login API
    const loginEndpoint = 'login_api';


    fetch(loginEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, password })
    })
    .then(response => {
        if (response.ok) {

            console.log('Login successful');
            return response.json();
        } else {
            console.error('Login failed');
            alert('Invalid credentials. Please try again.');
            throw new Error('Login failed');
        }
    })
    .then(data => {
        localStorage.setItem('token', data.token);

        window.location.href = 'home.html';
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


function register() {

    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPass').value;

    // Replace 'register_api' with the actual URL of register api
    const registerEndpoint = 'register_api';

    fetch(registerEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, email, password })
    })
    .then(response => {
        if (response.ok) {

            console.log('Registration successful');
            alert('Registration successful. Please log in.');

        } else {

            console.error('Registration failed');
            alert('Registration failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
