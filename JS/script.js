const workers = [];

function addWorker() {
    const code = document.getElementById('code').value;
    const lastname = document.getElementById('lastname').value;
    const specialty = document.getElementById('specialty').value;
    const salary = parseFloat(document.getElementById('salary').value);
    const bonuses = parseFloat(document.getElementById('bonuses').value);
    const deductions = parseFloat(document.getElementById('deductions').value);

    const finalPayment = salary + bonuses - deductions;

    const worker = {
        code,
        lastname,
        specialty,
        salary,
        bonuses,
        deductions,
        finalPayment
    };

    workers.push(worker);

    document.getElementById('workerForm').reset();
    alert('Worker added successfully');
}

function showResults() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    let plastererCount = 0;
    let supervisorCount = 0;
    let painterPayroll = 0;
    let totalPayroll = 0;

    workers.forEach(worker => {
        if (worker.specialty === 'plasterer') {
            plastererCount++;
        } else if (worker.specialty === 'supervisor') {
            supervisorCount++;
        } else if (worker.specialty === 'painter') {
            painterPayroll += worker.finalPayment;
        }

        totalPayroll += worker.finalPayment;
    });

    resultsDiv.innerHTML += `<p>Number of Plasterers: ${plastererCount}</p>`;
    resultsDiv.innerHTML += `<p>Number of Supervisors: ${supervisorCount}</p>`;
    resultsDiv.innerHTML += `<p>Payroll for Painters: ${painterPayroll.toFixed(2)}</p>`;
    resultsDiv.innerHTML += `<p>Number of Workers Processed: ${workers.length}</p>`;
    resultsDiv.innerHTML += `<p>Total Payroll: ${totalPayroll.toFixed(2)}</p>`;
}
