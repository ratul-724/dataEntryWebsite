document.addEventListener('DOMContentLoaded', () => {
    const dataDisplay = document.getElementById('dataDisplay');
    const formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];

    const renderTable = () => {
        dataDisplay.innerHTML = '';
        if (formDataArray.length > 0) {
            const table = document.createElement('table');
            table.classList.add('table', 'table-bordered', 'table-striped', 'table-resizable');

            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            const headerRow = document.createElement('tr');
            const headers = Object.keys(formDataArray[0]);

            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText.charAt(0).toUpperCase() + headerText.slice(1);
                headerRow.appendChild(th);
            });
            const th = document.createElement('th');
            th.textContent = 'Actions';
            headerRow.appendChild(th);
            thead.appendChild(headerRow);

            formDataArray.forEach((formData, index) => {
                const dataRow = document.createElement('tr');
                headers.forEach(header => {
                    const td = document.createElement('td');
                    td.textContent = formData[header];
                    dataRow.appendChild(td);
                });

                const actionTd = document.createElement('td');
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.classList.add('btn', 'btn-danger', 'btn-sm');
                removeButton.addEventListener('click', () => {
                    formDataArray.splice(index, 1);
                    localStorage.setItem('formDataArray', JSON.stringify(formDataArray));
                    renderTable();
                });
                actionTd.appendChild(removeButton);
                dataRow.appendChild(actionTd);

                tbody.appendChild(dataRow);
            });

            table.appendChild(thead);
            table.appendChild(tbody);
            dataDisplay.appendChild(table);
        } else {
            dataDisplay.innerHTML = '<p class="text-white">No data available.</p>';
        }
    };

    renderTable();

    document.getElementById('clearPage').addEventListener('click', () => {
        localStorage.removeItem('formDataArray');
        formDataArray.length = 0; // Reset the in-memory array
        renderTable();
    });
    

    document.getElementById('uploadData').addEventListener('click', () => {
        // Implement your upload logic here
        alert('Data uploaded to the database!');
    });
});
