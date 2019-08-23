class Letter {
    constructor(letter) {
        this.letter = letter;
        this.guessed = false;
    }

    displayLetter = () => {
        if (this.guessed) {
            return (this.letter + " ");
        } else {
            return ("_ ");
        };
    };
    
    checkGuess = (guess) => {
        if(guess === this.letter) {
            this.guessed = true;
        }
    };
};

module.exports = Letter;