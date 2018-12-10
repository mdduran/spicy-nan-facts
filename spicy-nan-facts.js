const SimpleMarkov = require('simple-markov');

const spicyNanFacts = require('./facts.json');

function generateSpicyNanFact(spicyNanFacts) {
    let generatedSpicyNanFact = '';
    if(spicyNanFacts.length > 0) {
        const randomFact = getRandomArbitrary(0, spicyNanFacts.length + 1);
        const markov = new SimpleMarkov(3, spicyNanFacts[randomFact]);
        for(let i = 1; i < spicyNanFacts.length; i++) {
            markov.learn(spicyNanFacts[i]);
        }
        generatedSpicyNanFact = capitalizeFirstLetter(markov.generateText(40));
    }
    return generatedSpicyNanFact;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = (req, res) => {
    res.end(generateSpicyNanFact(spicyNanFacts));
}