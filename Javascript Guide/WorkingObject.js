/**
 * Làm việc với object
 */

 // four variables are created and assigned in a single go, 
// separated by commas
// Tạo ra một object sử đụng object literal
var obj = {
    name : 'oanhpv',
    age :  12,
    getName : function() {
        // var self = this;
        return this.name;
    },
    getAge : () => {return thisage;}
}
// console.log(obj);
// console.log(obj.getAge());
// console.log(obj.getName());
// obj.prototype.address = "ha nam";
// console.log(obj.prototype);


// Tạo ra một object băng cách khởi tạo new Object.
var myObj = new Object(),
str = 'myString',
rand = Math.random(),
obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj);

// dùng for--in để enumerate qua các properties của object

// Object.keys(object) => return về một mảng các properties (không thuộc  prototype chain)
// myObj.constructor.prototype.name = 'oanhpv';
console.log(Object.keys(myObj)); 

console.log(Object.getOwnPropertyNames(myObj));

// Tạo ra một object by Using a constructor function
/**
 * 1. định nghĩa một function as object.
 * 2. Tạo một instance object vs toán tử new.
 */

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getModel = () => {return this.model;};
}

var mycar = new Car('Eagle', 'Talon TSi', 1993);
console.log('Car model ' + mycar.getModel());

// Tạo ra một object bằng cách sự dụng Object.create();
// Animal properties and method encapsulation
var Animal = {
    type: 'Invertebrates', // Default value of properties
    displayType: function() {  // Method which will display type of Animal
        console.log(this.type);
    }
};
  
// Create new animal type called animal1 
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output:Fishes