function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Initialize pointers for the start and end of the string
    let left = 0;
    let right = cleanedStr.length - 1;

    // Compare characters from the start and end moving towards the center
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false; // Characters do not match
        }
        left++;
        right--;
    }

    return true; // All characters matched
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar"));                        // Output: true
console.log(isPalindrome("hello"));                          // Output: false
