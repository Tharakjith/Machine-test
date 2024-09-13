document.addEventListener('DOMContentLoaded', () => {
    const formSection = document.getElementById('form-section');
    const viewSection = document.getElementById('view-section');
    const priorityFilter = document.getElementById('priority-filter');
    const requestsTableBody = document.querySelector('#requests-table tbody');

    const formBtn = document.getElementById('form-btn');
    const viewBtn = document.getElementById('view-btn');
    const logoutBtn = document.getElementById('logout-btn');

    const requests = [
        { name: 'John Doe', destination: 'Paris', priority: 'critical' },
        { name: 'Jane Smith', destination: 'London', priority: 'normal' },
        { name: 'Alice Johnson', destination: 'New York', priority: 'rejected' }
    ];


    const renderRequests = (filter) => {
        requestsTableBody.innerHTML = '';
        const filteredRequests = filter === 'all' ? requests : requests.filter(req => req.priority === filter);
        filteredRequests.forEach(req => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${req.name}</td>
                <td>${req.destination}</td>
                <td>${req.priority}</td>
                <td><button class="btn btn-info btn-sm">View</button></td>
            `;
            requestsTableBody.appendChild(row);
        });
    };

    // Handle tab switching
    formBtn.addEventListener('click', () => {
        formSection.classList.remove('d-none');
        viewSection.classList.add('d-none');
    });

    viewBtn.addEventListener('click', () => {
        formSection.classList.add('d-none');
        viewSection.classList.remove('d-none');
        renderRequests(priorityFilter.value);
    });

    // Filter requests by priority
    priorityFilter.addEventListener('change', () => {
        renderRequests(priorityFilter.value);
    });

    // Logout button
    logoutBtn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
});
