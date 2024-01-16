function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage
console.log("Factorial Number of 5:",factorialIterative(5));
 // Output: 120
 console.log("Factorial Number of 3:",factorialIterative(3));
 console.log("Factorial Number of null:",factorialIterative(null));
 console.log("Factorial Number of 8:",factorialIterative(8));
 console.log("Factorial Number of undefined:",factorialIterative(undefined));
 console.log("Factorial Number of 9:",factorialIterative(9));
 console.log("Factorial Number of 0:",factorialIterative(0));