const word = prompt("Inserisci una parola");
console.log(word)

function reverseText(text) {
    let reverseWord = '';

    for (let i = text.length - 1; i >= 0; i--) {
        reverseWord += text[i];
    }

    return reverseWord;
}

const result = reverseText(word);
console.log(result);


function isPalindrome() {

}