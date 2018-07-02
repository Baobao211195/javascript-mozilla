// NOTE: Control flow and error handling;

// false value
if(false) {
    console.log("true");
} else {
    console.log("false");
}

// falsy value
if(undefined) {
    console.log("undefined true");
} else {
    console.log("undefined false");
}

if(null) {
    console.log("null true");
} else {
    console.log("null false");
}

if(0) {
    console.log("0 true");
} else {
    console.log("0 false");
}

if(NaN) {
    console.log("NaN true");
} else {
    console.log("NaN false");
}

if("") {
    console.log("Empty String true");
} else {
    console.log("Empty String false");
}
console.log("====================================>");

var b = new Boolean(false);
if (b) {
    console.log(`This condition is ${b}`);
} else {
    console.log(`This condition is ${b}`);
}
console.log("====================================>");
if (b == true) {
    console.log(`This condition is ${b}`);
} else {
    console.log(`This condition is ${b}`);
}
// NOTE: switch
console.log("Switch statement");
let fruittype = '';
switch (fruittype) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
   console.log('Sorry, we are out of ' + fruittype + '.');
}
console.log("Is there anything else you'd like?");
