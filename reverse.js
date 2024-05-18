function reverseString(str) {
    // Convert the string to an array of characters, reverse it, and then join the characters back into a string
    return str.split('').reverse().join('');
}

// Example usage
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
