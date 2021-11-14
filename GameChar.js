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


const weapons = ['candlestick', 'dagger', 'lead pipe', 'revolver', 'rope'];
const makeBroken = function(item){ return `broken ${item}`}
_.map(weapons, makeBroken);

var suspects = ['Miss scarlet', 'Colonel Mustard', 'Mrs. White', 'Mr. Green'];

var suspectList = _.map(suspects, function(item){
    return createSuspectObject(item);
    });


_.each(list, function(value,index,list){
    storage.push(value,index,list);
})


const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];


_.filter = function(videoData){
    var presentList = [];
    for (var i = 0; i < videoData.length; i++) {
        if(videoData[i].present){
            presentList.push(videoData[i]);
        }
    }
    return presentList;
}

_.filter = function(videoData){
    var NamesList = [];
    _.map(videoData, function(item){
        if(item.present){
            NamesList.push(item.name);
        }
    });
};

// default paramerters
var add = (a,b=5) =>console.log(a+b);
add(3);

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];


_.each(newDevelopment, function(item){
    _.each(item.rooms, function(room){
        if(room){
            


    if(item.rooms.conservatory){
        console.log(item.name);
    }
});