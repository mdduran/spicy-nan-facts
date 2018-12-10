const SimpleMarkov = require('simple-markov');

const spicyNanFacts = require('./facts.json');

function generateSpicyNanFact(spicyNanFacts) {
    let generatedSpicyNanFact = '';
    if(spicyNanFacts.length > 0) {
        const markov = new SimpleMarkov(3);
        for(const fact of spicyNanFacts) {
            markov.learn(fact);
        }
        generatedSpicyNanFact = capitalizeFirstLetter(markov.generateText(40));
    }
    return generatedSpicyNanFact;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = (req, res) => {
    res.end(generateSpicyNanFact(spicyNanFacts));
}