var letters = require("./letters.js");

class Word {
    constructor(word) {
        this.lettersArr = [];
        for (var i =0; i < word.length; i++) {
            var letter = new Letter(word[i]);
            this.lettersArr.push(letter);
        }
    }

        log = () => {
            var wordLog = "";
            for (var i = 0; i < this.lettersArr.length; i++) {
                wordLog = wordLog + this.lettersArr[i] + " ";
            };
            console.log(wordLog + "\n----------\n");
        };

        userGuess = (userInput) => {
            for (var i = 0; i < this.lettersArr.length; i++) {
                this.lettersArr[i].checkGuess(userInput);
            }
        }
    }

module.exports = Word;