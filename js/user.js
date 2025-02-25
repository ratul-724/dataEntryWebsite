// js/user.js

document.addEventListener('DOMContentLoaded', () => {
    const users = JSON.parse(localStorage.getItem('users')) || [
        { email: 'admin@example.com', password: 'admin123', role: 'admin' },
        { email: 'user1@example.com', password: 'user123', role: 'user' },
    ];

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser && loggedInUser.role === 'admin') {
        document.getElementById('register').style.display = 'block';
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = 'data.html';
        } else {
            alert('Invalid information');
        }
    });

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!loggedInUser || loggedInUser.role !== 'admin') {
            alert('Only admin can register new users.');
            return;
        }

        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        const newUser = { email, password, role: 'user' };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert('User registered successfully.');
        registerForm.reset();
    });

    document.getElementById('logout').addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        alert('Logged out successfully.');
        window.location.href = 'user.html';
    });
});
