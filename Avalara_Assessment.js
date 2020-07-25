var keyValueMap = { // mapping rawstring with value
    "2":2,
    "3":3,
    "4":4,
    "5":5,
    "6":6,
    "7":7,
    "8":8,
    "9":9,
    "10":10,
    "JACK":10,
    "QUEEN":10,
    "KING":10,
    "ACE":11
};
var aceCount = 0, result = 0;

input = JSON.parse(input); // parsing input to JSON
for(var i=0; i < input.length; i++) { // traversing through input to get aceCount
    result += keyValueMap[input[i]]; // adding maximum eligible value
    if(input[i] === 'ACE') {
        aceCount++; // tracking ACE count
    }
}

while(result > 21 && aceCount !== 0) { // reducing ACE Count until it reaches below 22
    result -= 10;
    aceCount--;
}

result = result > 21 ? 0 : result; // return result if result is above 22
console.log(result);

////////////////////////////////////////
input = JSON.parse(input); // parsing input to JSON
var aceCount = 0,
  result = 0;

// getting the value of card by Raw String
var getValue = function (card) {
  var value = parseInt(card);
  if (isNaN(value)) {
    if (card[0] == 'A') return 11;
    return 10;
  }
  return value;
};

// combining for and while loop from Brute Force Approach
for (var i = 0; i < input.length; i++) {
  result += getValue(input[i]); // adding maximum eligible value
  if (input[i] === 'ACE') {
    aceCount++; // tracking ACE count
  }
  if (result > 21 && aceCount > 0) {
    // reduce aceCount only when the total crosses 21
    result -= 10;
    aceCount--;
  }
}

result = result > 21 ? 0 : result; // return result if result is above 22
console.log(result);
