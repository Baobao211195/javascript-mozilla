/**
 * Làm việc với object
 */

 // 1. 4 Cách tạo ra một object
 //Four variables are created and assigned in a single go, 
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


// 2. Enumerate the properties của một object.
//2.1 Sử dụng for--in

var str1 = " ";
var object = {
    a: 1,
    b: 2,
    c: 3
};
for (let pro in object) {
    str1 += object[pro];
}
console.log(`Chuỗi properties  ${str1}`);
console.log(`Object prototype  ${Object.prototype.toString()}`);
console.log(`String prototype  ${String.prototype.toString()}`);

// Không nên sử dùng for-in cho Array

var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  } 
}
// Output:
// "obj.color = red"
// 2.2. Object.keys(0); => trả về một mảng các properties 
// là các enumerable properties không bao gồm các properties trong prototype chain
// 

console.log("Sử dụng Object.keys(b) của object ColoredTriangle :" + Object.keys(ColoredTriangle.prototype));
// out put is a, b, c
console.log(`Sử dụng Object.keys(b)
 của object kết thừa từ prototype of ColoredTriangle:  ${Object.keys(obj)}`); // out put is color

// Chú ý 
// getFoo is a property which isn't enumerable
var myObj = Object.create({}, {
    getFoo: {
        value: function () { return this.foo; }
    } 
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']

//2.3 sử dụng Object.getOwnPropertyNames(o)
// trả về một mảng properties bao gồm tất cả các properties của một object
// kể cả enumberable hay ko. khác Object.keys(o).
// phương thức này hữu ích trong trường hợp lấy nhưng properties ẩn (properties trong các prototype chain
// không thể access)
 // Ví dụ 1 :
 console.log(`Sử dụng Object.getOwnPropertyNames(o)
 của object kết thừa từ prototype of ColoredTriangle:  ${Object.getOwnPropertyNames(myObj)}`); 
 // trả về getFoo, foo (getFoo không phải là một enumerable)
 // Ví dụ 2 : Các properties trong prototype sẽ không được liệt kê
 function ParentClass() { }
 ParentClass.prototype.thuaKeMethod = () => console.log("Phương thức được thừa kế :");

 function ChildClass() {
     this.pro = 5;
     this.childMethod = ()=> console.log("Phương thức của class con :");
 }
ChildClass.prototype = new ParentClass;
ChildClass.prototype.thuaKeMethod = () => console.log("overide lại phương thức thừa kế từ class cha");

var objChildClass = new ChildClass();
console.log(`Danh sách các properties của class con ${Object.getOwnPropertyNames(objChildClass)}`);
// output  ['pro','childMethod']


// 3. Thừ kế. sẽ tìm hiểu ở phần advanced
// 4. Indexing object properties
// 5. Defining properties for an object type
// sử dụng prototype để định nghĩa một property của một object đã được định nghĩa trước đó.
// và property này được shared tới tất cả các object
function Motor() {
    
}
Motor.prototype.color = null;
var car1 = new Motor();
car1.color = 'yellow';
console.log(car1.color);


var moto = new Motor();
moto.color = "Black";
console.log(moto.color);

// 6. Defining methods.
function DemoClass() {
    // Cách 1
    this.printName = function () {
        console.log("Định nghĩa một function");  
    }
    // or
    this.printNameDemo = () => console.log("Cách thứ hai");

}
// Call method
var demo = new DemoClass();
demo.printName();
demo.printNameDemo();

// 7. Sử dụng this for object references.
//=> reference tới object hiện tại.


// 8. Định nghĩa setter và getters'

var objectDemo = {
    x : 7,
    get y() {
        return this.x + 1;
    },
    set z(x) {
        this.x = x + 8;
    }
}

console.log(`Giá trị của x before ${objectDemo.y}`);
console.log(`Giá trị của x before ${objectDemo.x}`);

objectDemo.z = 10;
console.log(`Giá trị của x after ${objectDemo.x}`);

// 9. Deleting properties
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
console.log ('a' in myobj); // yields "false"sư

// có thể sử dụng  delete để xóa một biến global.s

// 10.Comparing Objects




