// build-in function is method.

// Custom function.

function gretting() {
    sayHello();
}

function sayHello() {
    console.log("Say hello!");
}

// Invoking functions.
gretting();

// Anonymous fuctions.
sayGoodBay = () => {
 console.log("pham vanoanh");
}
sayGoodBay();

sayThanks = function() {
  console.log("object");
};

// Funciton parameters

sayFuncking = (str) => {
    console.log(`Fucking  ${str}`);
}

sayFuncking('hahaa');

// Function scope and conflicts.
var name = 'index';
function greeting1() {
  alert('Hello ' + name + ': welcome to our company.');
}