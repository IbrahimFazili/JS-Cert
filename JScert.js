/* CODE FOR JAVASCRIPT CURRICULUM ON FREECODECAMP*/

function isLess(a, b) {
    // Fix this code
    return a < b;
}

// Change these values to test
isLess(10, 15);
isLess(10, 15);

// Returning Boolean Values from Functions //

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

// Return Early Pattern for Functions //


var count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;

        case 10:
        case 'K':
        case 'Q':
        case 'J':
        case 'A':
            count--;
    }
    if (count > 0) {
        return count + ' Bet';
    } else {
        return count + ' Hold';
    }
    // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

// Counting Cards //

var myDog = {
    "name": 'A dog needs no name',
    "legs": 0,
    "tails": 0,
    'friends': [],
};

// Build JavaScript Objects //

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat; // Change this line
var shirtValue = testObj.shirt; // Change this line

// Accessing Object Properties with Dot Notation //

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"]; // Change this line
var drinkValue = testObj['the drink'];

// Accessing Object Properties with Bracket Notation //

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16; // Change this Line
var player = testObj[playerNumber];

// Accessing Object Properties with Variables //

var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.name = 'Happy Coder';

// Updating Object Properties //

var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.bark = 'woof';

// Add New Properties to a JavaScript Object //

var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

delete myDog.tails;

// Delete Properties from a JavaScript Object //

function phoneticLookup(val) {
    var result = "";

    var lookup = {
        'alpha': 'Adams',
        'beta': 'Boston',
        'charlie': 'Chicago',
        'delta': 'Denver',
        'echo': 'Easy',
        'foxtrot': 'Frank',
    }
    result = lookup[val];

    return result;
}

phoneticLookup("charlie");

// Using Objects for Lookups //

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp) == true) {
        return myObj.checkProp;
    }
    return 'Not Found';
}

// Testing Objects for Properties //

var myMusic = [{
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": 'Green Day',
        'title': 'Minority',
        'release_year': 2003,
        'formats': [
            'CD',
            'Cassette',
            'LP',
        ]
    }
];

// Manipulating Complex Objects //

var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    if (prop === "tracks" && value !== "") {
        if (collection[id][prop]) {
            collection[id][prop].push(value);
        } else {
            collection[id][prop] = [value];
        }
    } else if (value !== "") {
        collection[id][prop] = value;
    } else {
        delete collection[id][prop];
    }
    return collection;
}

// Record Collection //

var myArray = [];
var count = 0;
while (count < 5) {
    myArray.push(count)
    count++;
}

// Iterate with JavaScript While Loops //

var myArray = [];
for (var count = 1; count <= 5; count++) {
    myArray.push(count);
}

// Iterate with JavaScript For Loops //

var myArray = [];
for (var x = 1; x <= 9; x += 2) {
    myArray.push(x);
}

// Iterate Odd Numbers With a For Loop //

var myArray = [];
for (var x = 9; x >= 1; x -= 2) {
    myArray.push(x);
}

// Count Backwards With a For Loop //

var myArr = [2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

// Iterate Through an Array with a For Loop //

function multiplyAll(arr) {
    var product = 1;
    for (var x = 0; x < arr.length; x++) {
        for (var y = 0; y < arr[x].length; y++) {
            product *= arr[x][y];
        }
    }
    return product;
}

multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]);

// Nesting For Loops //