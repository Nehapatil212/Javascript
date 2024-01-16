function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function factorialOfWordsCount(sentence) {
    sentence = sentence.trim();
    const words = sentence.split(/\s+/);
    const wordCount = words.length;
    const result = factorial(wordCount);
    return result;
}
function factorialOfWordsCount(sentence) {
    sentence = sentence.trim();
    const words = sentence.split(/\s+/);
    const wordCount = words.length;
    const result1 = factorial(wordCount);
    return result1;
}


const inputSentence = "Revision is the mother of success";
const result = factorialOfWordsCount(inputSentence);
console.log("Total no of words available in Given string: 'Revision is the mother of success'")
console.log(`Factorial of words count: ${result}`);

const inputSentence1 = "We nevar fail,We always never,Mind it..";
const result1 = factorialOfWordsCount(inputSentence1);
console.log("Total no of words available in Given string: 'We nevar fail,We always never,Mind it..'")
console.log(`Factorial of words count: ${result1}`);

const inputSentence2 = "null";
const result2 = factorialOfWordsCount(inputSentence2);
console.log("Total no of words available in Given string: 'null'")
console.log(`Factorial of words count: ${result2}`);

const inputSentence3 = "";
const result3 = factorialOfWordsCount(inputSentence3);
console.log("Total no of words available in Given string: ' '")
console.log(`Factorial of words count: ${result3}`);

const inputSentence4 = "NEHA PRAMOD PATIL";
const result4 = factorialOfWordsCount(inputSentence4);
console.log("Total no of words available in Given string: 'NEHA PRAMOD PATIL'")
console.log(`Factorial of words count: ${result4}`);
