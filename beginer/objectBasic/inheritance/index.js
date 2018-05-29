function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.sayHello = () => {
        alert(`This is the ${this.name.first}`);
    };
}

// Định nghĩa tất cả các  method trong prototype của constructors
Person.prototype.greeting = () => {
    alert(`Hi I'm + ${this.name.first} .`);
};
// 1. Kế thừa một constructor có tham số

// Tạo một class teacher kế thừa các thuộc tính của Peson
// có thêm một thuộc tính là subjects
// modify hàm greeting.
function Teacher(first, last, age, gender, interests, subjects) {
    Person.call(this, first, last, age, gender, interests);
    this.subjects = subjects;
}


//2. Kế thừa một hàm khởi tạo không tham số
function Brick() {
    this.width = 10;
    this.height = 20;
}

function BlueGlassBrick() {
    Brick.call(this);
    this.opacity = 0.4;
    this.color = 'blue';
}

// chúng ta sẽ tạo ra một Teacher() thừa kế tất cả các method đã 
//được defined trong Person()'s prototype.
Teacher.prototype = Object.create(Person.prototype);
// lúc này constructor of Teacher.prototype là constructor của
// Person nên ta phải gán lại bằng constructor của nó
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function() {
    var prefix;
  
    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
      prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
      prefix = 'Mrs.';
    } else {
      prefix = 'Mx.';
    }
  
    alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subjects + '.');
  };

  var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');


