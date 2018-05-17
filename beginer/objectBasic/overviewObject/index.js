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
    }
};
console.log(person);

// từ khóa this.

