function countVowels(str) {
    // Convert the string to lowercase to make the counting case-insensitive
    str = str.toLowerCase();

    // Initialize a variable to hold the count of vowels
    let count = 0;

    // Iterate over each character in the string
    for (let char of str) {
        // Check if the character is a vowel (a, e, i, o, u)
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }

    return count;
}

// Example usage
console.log(countVowels("hello")); // Output: 2
console.log(countVowels("world")); // Output: 1
console.log(countVowels("JavaScript")); // Output: 3
