// object literal
var person = {
    name : ['oanh', 'van'],
    age : 32,
    gender : 'male',
    interest: ['music', 'skiing'],
    bio: function() {
        alert(`${this.name[0]} ${this.name[1]} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}`);
    },

    greeting: function() {
        alert('Hi! I\'m ' + this.name[0] + '.');
    },

    greeting1: function () {
        alert(`i am ${this.name[0]}`);
    }
};
console.log(person);
console.log(person.name);
// console.log(person.greeting());
console.log(person.greeting1());


// từ khóa this.
// refer tới object hiện tại được viết bên trong => this là person
