// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dataForm');
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser || loggedInUser.role !== 'admin') {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Only admin can submit data.');
        });
    } else {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const data = {};

            formData.forEach((value, key) => {
                if (key === 'date') {
                    const date = new Date(value);
                    data[key] = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
                } else {
                    data[key] = value;
                }
            });

            let storedData = JSON.parse(localStorage.getItem('formDataArray')) || [];
            storedData.push(data);
            localStorage.setItem('formDataArray', JSON.stringify(storedData));

            window.location.href = 'data.html';
        });
    }

    document.getElementById('logout').addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        alert('Logged out successfully.');
        window.location.href = 'user.html';
    });
});
