function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const currentdate = document.getElementById('currentdate').value;
    const resultElement = document.getElementById('result');

    resultElement.classList.remove('error', 'blink');

    if (!birthdate || !currentdate) {
        document.getElementById('result').textContent = 'Please enter both dates.';
        resultElement.classList.add('error', 'blink');
        return;
    }

    const birthDate = new Date(birthdate);
    const currentDate = new Date(currentdate);

    if (currentDate < birthDate) {
        resultElement.textContent = 'Yaaaarr, Sahi Date Toh Dallo';
        resultElement.classList.add('error', 'blink');
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

    // const resultElement = document.getElementById('result');
    resultElement.textContent = `Age: ${years} years, ${months} months, and ${days} days`;

    // Add the blink class to trigger the animation
    // resultElement.classList.add('blink');

    // Remove the blink class after the animation to allow it to be retriggered
    // setTimeout(() => {
    //     resultElement.classList.remove('blink');
    // }, 1000);


    // resultElement.classList.remove('error');
    // resultElement.classList.add('blink');
    resultElement.classList.remove('error', 'blink');
}
