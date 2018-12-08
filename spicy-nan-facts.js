const SimpleMarkov = require('simple-markov');

const spicyNanFacts = [
    'Nantucket’s best burgers are at the Brotherhood, but watch your head on the way in.',
    'Nantucket means “faraway land” in the language of the original natives, the Wampanoag tribe.',
    'Harvesting scallops is a family tradition each fall on Nantucket.',
    'Nantucket is an island, a county, and a town.  It’s the only U.S. place with the same name for all 3.',
    'The first ship built on Nantucket was named “Rose”.',
    'Shell Street in Siasconset is too narrow for cars and bikes.',
    'In 1857, cobblestones were laid in Nantucket to help prevent wagon wheels from sinking into the sand.',
    'The Nantucket High School sports teams are known as the Whalers.',
    'Nantucket’s Brent Point is the second oldest lighthouse in the U.S., built in 1746.',
    'There are buses, but no fixed bus route on Nantucket.',
    'On March 7th, 1970, a total solar eclipse on Nantucket lasted 2 minutes and 6 seconds.  The temperature dropped 10 degrees.',
    'Nantucket is 30 miles off the coast of Hyannis, Massachusetts.',
    'Nantucketers are famed for their “gams”, a term for their colorful social conversations.',
    'In the 1960’s Nantucket and Martha’s Vineyard considered seceding from the Commonwealth of Massachusetts.',
    'Cisco Brewery’s Triple 8 party on Nantucket is always at 8pm on 8/8.',
    'Nantucket’s annual Island Fair features pumpkin contests, vegetable judging, and an exotic animal show.',
    'Nantucket’s whaling dominance was part of the literary classic, “Moby Dick”.',
    'The town of Nantucket has two stone markers that indicate the north and south lines of town.',
    'The Nantucket flag is called a burgee, a distinctively-shaped flag normally used on ships.',
    'Commercial flights started for Nantucket in 1927.',
    'The end of Broad Street by Steamship Wharf is known as “the strip” on Nantucket.',
    'Nantucket has over 82 miles of beaches.',
    'There are no parking meters on Nantucket.',
    'Nantucket is the home to the Nantucket Film Festival, an annual event.',
    'In February 1905, Nantucket Harbor froze solid for 3 weeks and the steamship Nantucket was stuck.',
    'Nantucket has two local newspapers, but no local radio station.',
    'Nantucketers moving to the mainland in the 18th Century often disassembled their island homes and took them along off island.'    
];

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