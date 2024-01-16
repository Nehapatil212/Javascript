
console.log("*****************Remove duplicate******************************************");
function removeDuplicates(arr) {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

// Example usage
const originalArray = [11,3,4,11,4,7,3];
const newArray = removeDuplicates(originalArray);
console.log(newArray);

function capitalizeFirstAndLastInWords(inputString) {
    if (inputString.length > 0) {
        const words = inputString.split(/\s+/);
        const result = words.map(function (word) {
            if (word.length > 1) {
                return word.charAt(0).toUpperCase() + word.slice(1, -1) + word.slice(-1).toUpperCase();
            } else {
                return word.toUpperCase();
            }
        });
        return result.join(' ');
    } else {
        return "";
    }
}
const inputString = "how are you mate";
const modifiedString = capitalizeFirstAndLastInWords(inputString);

console.log("*****************First and Last letter converted capital******************");
console.log(modifiedString);
