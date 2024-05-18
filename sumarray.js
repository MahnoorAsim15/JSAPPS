function sumArray(numbers) {
    // Initialize a variable to hold the sum
    let sum = 0;

    // Iterate over each element in the array and add it to the sum
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    // Return the calculated sum
    return sum;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15
