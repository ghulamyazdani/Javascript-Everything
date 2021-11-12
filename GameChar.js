var game = {
    "Ludo": {
        players: ['kobe', 'jordan', 'james', 'curry'],
        colors: ['red', 'blue', 'green', 'yellow']
},
    "uno": { 
        players: ['kobe', 'jordan', 'james', 'curry'],
        cards: ['red', 'blue', 'green', 'yellow']   
}
};

// Destructuring
const {player, color} = {player: 'kobe', color: 'red'};

var [a, ...b] = [1, 2, 3, 4, 5]; 

const game2 = {
    'suspects': [
        {
            name: 'ruby', 
            color: 'red'
        },
        {
            name: 'rousy', 
            color: 'blue'
        },
    ]
};
 function loop(game2) {
    for (const {name, color} of game.suspects) {
        console.log(name, color);
    }
}