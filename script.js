function generateCipher() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shuffled = alphabet.split('').sort(() => Math.random() - 0.3).join('');
    return shuffled;
}

function encodeMessage(message, cipher) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encodedMessage = '';
    message = message.toUpperCase();

    for (let char of message) {
        if (alphabet.includes(char)) {
            encodedMessage += cipher[alphabet.indexOf(char)];
        } else {
            encodedMessage += char;
        }
    }
    return encodedMessage;
}

let cipher = '';
let originalMessage = '';

function generateCryptogram() {
    originalMessage = document.getElementById('inputMessage').value;
    cipher = generateCipher();
    const encodedMessage = encodeMessage(originalMessage, cipher);

    document.getElementById('cryptogramOutput').innerText = `Ciphertext: ${encodedMessage}`;
    document.getElementById('decodeSection').style.display = 'block';
    document.getElementById('ciphertextOutput').innerText = encodedMessage;
    document.getElementById('resultMessage').innerText = '';
    document.getElementById('decodedOutput').innerText = encodedMessage.trim();
}

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value.toUpperCase();
    const originalMessage = document.getElementById('inputMessage').value.toUpperCase();
    const decodedOutput = document.getElementById('decodedOutput').innerText.split(' ');

    let guessCorrect = true;
    let guessResult = '';
    for (let i = 0; i < originalMessage.length; i++) {
        if (originalMessage[i] >= 'A' && originalMessage[i] <= 'Z') {
            if (userGuess[i] === originalMessage[i]) {
                guessResult += userGuess[i];
            } else {
                guessResult += '_';
                guessCorrect = false;
            }
        } else {
            guessResult += originalMessage[i];
        }
    }

    document.getElementById('resultMessage').innerText = guessCorrect ? 'Ang Galing! Your guess is correct!' : 'Opps! Try again!';
    document.getElementById('decodedOutput').innerText = guessResult;
}
