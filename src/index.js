const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const SYMBOL_MAP = {
        '00': "",
        "10": ".",
        "11": "-"
    }

    let word = "";
    for (let i = 0; i < expr.length; i += 10) {
        let encodedLetter = expr.substr(i, 10);
        let morseLetter = "";

        if (encodedLetter != "**********") {
            for (let j = 0; j < 10; j += 2) {
                morseLetter += SYMBOL_MAP[encodedLetter.substr(j, 2)];
            }

            letter = MORSE_TABLE[morseLetter];
        } else {
            letter = " ";
        }
        word += letter;
    }
    return word;
}

module.exports = {
    decode
}