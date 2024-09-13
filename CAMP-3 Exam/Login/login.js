document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = usernameField.value;
        const password = passwordField.value;

        if (username === 'admin' && password === 'adminpass') {
            window.location.href = 'admin.html'; 
        } else if (username && password) {
            window.location.href = 'travel-requestor.html'; 
        } else {
            alert('Invalid credentials');
        }
    });
});
