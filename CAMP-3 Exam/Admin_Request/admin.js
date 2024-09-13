document.addEventListener('DOMContentLoaded', () => {
    const adminRequestsTableBody = document.querySelector('#admin-requests-table tbody');
    const logoutBtn = document.getElementById('logout-btn');

    const requests = [
        { name: 'hi', destination: 'Paris', priority: 'critical' },
        { name: 'bye', destination: 'London', priority: 'normal' },
        { name: 'hello', destination: 'New York', priority: 'rejected' }
    ];

    const renderAdminView = () => {
        adminRequestsTableBody.innerHTML = '';
        requests.forEach(req => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${req.name}</td>
                <td>${req.destination}</td>
                <td>${req.priority}</td>
                <td>
                    <select class="form-select form-select-sm">
                        <option value="approve">Approve</option>
                        <option value="reject">Reject</option>
                        <option value="onhold">On Hold</option>
                    </select>
                </td>
            `;
            adminRequestsTableBody.appendChild(row);
        });
    };

    renderAdminView();

    logoutBtn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
});
