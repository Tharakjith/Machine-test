document.addEventListener('DOMContentLoaded', function() {
    const requestStatus = document.getElementById('requestStatus');
    const requestsTable = document.getElementById('requestsTable').getElementsByTagName('tbody')[0];
    const logoutButton = document.getElementById('logoutButton');


    requestStatus.addEventListener('change', function() {
        loadRequests();
    });

    function loadRequests() {
        const statusFilter = requestStatus.value;
        const requests = JSON.parse(localStorage.getItem('travelRequests')) || [];
        requestsTable.innerHTML = '';

        requests.filter(request => 
            statusFilter === 'all' || request.priority === statusFilter
        ).forEach(request => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${request.empName}</td>
                <td>${request.destination}</td>
                <td>${request.priority}</td>
                <td><button class="action-select" onclick="viewDetails(${request.id})">View Details</button></td>
                <td>
                    <select class="action-select" onchange="updateStatus(${request.id}, this.value)">
                        <option value="pending" ${request.status === 'pending' ? 'selected' : ''}>Pending</option>
                        <option value="approved" ${request.status === 'approved' ? 'selected' : ''}>Approve</option>
                        <option value="rejected" ${request.status === 'rejected' ? 'selected' : ''}>Reject</option>
                        <option value="onhold" ${request.status === 'onhold' ? 'selected' : ''}>On Hold</option>
                    </select>
                </td>
            `;
            requestsTable.appendChild(row);
        });
    }

    function viewDetails(id) {
        const requests = JSON.parse(localStorage.getItem('travelRequests')) || [];
        const request = requests.find(req => req.id === id);
        if (request) {
            alert(`
                Employee Name: ${request.empName}\n
                Destination: ${request.destination}\n
                Priority: ${request.priority}\n
                From Date: ${request.fromDate}\n
                To Date: ${request.toDate}\n
                Mode of Travel: ${request.mode}
            `);
        }
    }

    function updateStatus(id, status) {
        let requests = JSON.parse(localStorage.getItem('travelRequests')) || [];
        requests = requests.map(request => {
            if (request.id === id) {
                request.status = status;
            }
            return request;
        });
        localStorage.setItem('travelRequests', JSON.stringify(requests));
        loadRequests();
    }

    
    logoutButton.addEventListener('click', function() {
        window.location.href = 'login.html';
    });


    loadRequests();
});
