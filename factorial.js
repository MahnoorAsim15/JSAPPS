function calculateFactorial(num) {
    // Check if the input is a non-negative integer
    if (num < 0 || !Number.isInteger(num)) {
        return "Factorial is defined only for non-negative integers.";
    }

    // If the input is 0 or 1, factorial is 1
    if (num === 0 || num === 1) {
        return 1;
    }

    // Initialize the factorial variable to 1
    let factorial = 1;

    // Calculate the factorial
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }

    return factorial;
}

// Example usage
console.log(calculateFactorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(calculateFactorial(0)); // Output: 1 (0! is defined as 1)
console.log(calculateFactorial(10)); // Output: 3628800 (10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1)
