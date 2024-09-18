function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const currentdate = document.getElementById('currentdate').value;

    if (!birthdate || !currentdate) {
        document.getElementById('result').textContent = 'Please enter both dates.';
        return;
    }

    const birthDate = new Date(birthdate);
    const currentDate = new Date(currentdate);

    if (currentDate < birthDate) {
        document.getElementById('result').textContent = 'Current date must be after birthdate.';
        return;
    }

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    // Adjust if the current date is before the birth date in the current month
    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    // Adjust if the current month is before the birth month in the current year
    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result').textContent = `Age: ${years} years, ${months} months, and ${days} days`;
}

