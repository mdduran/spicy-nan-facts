const markov = require('fast-ish-markov');

const facts = require('./facts.json');

const chain = markov(facts, 2);

const preambles = [];

for( const fact of facts ) {
    const [first, second] = fact.split(' ');
    preambles.push(first + ' ' + second);
}

function pickPreamble() {
    return preambles[Math.floor(Math.random() * preambles.length)];
}

function generateSpicyNanFact() {
    return chain.fill(pickPreamble(), 128);
}

module.exports = (req, res) => generateSpicyNanFact();