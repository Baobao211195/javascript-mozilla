//1. các nguyên lý cơ bảnote

//2. Constructors và object instances

/**
+ // NOTE: Sử dụng một function đặc biệt là Constructors function
để define object và các tính năng của nó
+ Khi một object mới được tạo từ Constructors function, các tính năng
core của nó được định nghĩa bởi prototype kết nối với nhau qua prototype  chain.
*/
//=============Cách 1=========================
// hơi dài
//  vì lại phải tạo ra một object empty và return về nó
function createNewPerson(name) {
    var obj = {};

    obj.name = name;
    obj.greeting = function() {
        alert(`Hi i'm ${this.name} .`);
    };

    return obj;
}

// var oanhpv = createNewPerson('oanhpv');
// oanhpv.name;
// oanhpv.greeting();

//=============Cách 2=========================
function Person(name) {
    this.name = name;
    this.greeting1 =  () => {
        alert(`i am ${this.name}`);
    };
}

var van  = new Person('vankem');
// van.greeting1();
var van2  = new Person('vankem2');
// van2.greeting1();

 // NOTE: Note that when we are calling our constructor function,
 // we are defining greeting() every time,
 // which isn't ideal. To avoid this, we can define functions on the prototype instead,
 // which we will look at later.

// Creating our finished constructor
 function Person2(first, last, age, gender, interests) {
   this.name = {
     'first': first,
     'last' : last
   };
   this.age = age;
   this.gender = gender;
   this.interests = interests;
   this.bio = function() {
     alert(this.name.first + ' '
      + this.name.last + ' is '
      + this.age + ' years old. He likes '
      + processInterest(this.interests));
   };
   this.greeting = function() {
     alert('Hi! I\'m ' + this.name.first + '.');
   };
   sayhello = (name) => {
       console.log(`xin chào ${name}`);
   }

   processInterest = (interests) => {
       if (interests.length === 1) {
           return interests;
       }

       if (interests.length > 1) {
           var str = '';
           for (var i = 0; i < interests.length; ++i) {
               if (i == interests.length - 1 ) {
                   str += ` and ${interests[i]}`;
                   return str;
               }
                 str += interests[i] + ', ';
           }
       }
   }
 }

 var person3 = new Person2('Bob', 'Smith', 32, 'male', ['music', 'skiing', 'playing', 'funcking', 'cokking']);

person2['age']
person2.interests[1]
person2.bio();

//============ Cách 3 =========================
var person1 = new Object();
person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function() {
  alert('Hi! I\'m ' + this.name + '.');
};

var person1 = new Object({
  name: 'Chris',
  age: 38,
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
});
//============ Cách 4 sử dụng create() IE 8 không support =====================
var person3 = Object.create(person1);
person3.name
person3.greeting();
