const markov = require('fast-ish-markov');

const chain = markov(require('./facts.json'), 3);

function generateSpicyNanFact() {
    return chain.fill(chain.pick(), 128);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = (req, res) => capitalizeFirstLetter(generateSpicyNanFact());