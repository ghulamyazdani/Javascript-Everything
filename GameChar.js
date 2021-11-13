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
};
let nam = [];
function names(game){
    for (var key of game.suspects){
        nam.push(key.name)
    }
} 

function createSuspectObject(name){
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log(`My name is ${name}`);
        }
    }
};
var suspects = ['Miss scarlet', 'Colonel Mustard', 'Mrs. White', 'Mr. Green'];
var suspectsList = [];
for (var i = 0; i < suspects.length; i++) {
    suspectsList.push(createSuspectObject(suspects[i]));
}

_.each(suspects, function(name){
    suspectsList.push(createSuspectObject(name));
})