function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function checkPrime() {
    const numberInput = document.getElementById('numberInput').value;
    const result = document.getElementById('result');
    
    if (numberInput === "") {
        result.textContent = "Please enter a number.";
        result.style.color = "red";
        return;
    }

    const number = parseInt(numberInput);

    if (isNaN(number)) {
        result.textContent = "Please enter a valid number.";
        result.style.color = "red";
        return;
    }

    if (isPrime(number)) {
        result.textContent = `${number} is a prime number.`;
        result.style.color = "green";
    } else {
        result.textContent = `${number} is not a prime number.`;
        result.style.color = "red";
    }
}
