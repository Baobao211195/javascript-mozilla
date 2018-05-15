

var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

var refuse = '';

var admitted = '';

for (var i = 0; i < people.length; i++) {
    if (people[i] === 'Phil' || people[i] === 'Lola') {
        refuse += people[i] + ', ';
    } else {
        admitted += people[i] + ', ';
    }    
}
console.log(refuse.substring(0, refuse.length - 1));
console.log("Refused: " + refuse.substring(0, refuse.length - 1) +  '.');
console.log("Admitted: " + admitted.substring(0, admitted.length - 1) +  '.');