// NOTE: Recursion
// function có thẻ refer và gọi bản thân nó. Có ba cách để một function
// refer tới bản thân nó.
// 1. tên function
// 2. sử dụng The arguments.callee property contains the currently executing function.
// 3.tạo một  biến và refe tới function

// example :
// function bar () {
//     console.log(" Function refer");
// }
//
// var foo = bar();
//
// bar();
// foo();

// NOTE: closures
// là một inner function trong một function khác.
// có thể sử dụng arguments và các biến của function bao hàm nó.
// nghĩa là inner function bao gồm cả scope của outer functions.
// outer function thì không thể sử dụng những arguments và biến của inner functions

function addSquare(a, b) {
    function square(x) {
        return x  * x;
    }
    return square(a) + square(b);
}

console.log(`addSquare 1 ${addSquare(2, 3)}`);
console.log(`addSquare 1 ${addSquare(4, 5)}`);
console.log(`addSquare 1 ${addSquare(5, 6)}`);

// khi inner là một dạng closures, chúng ta có thể gọi outer function và các tham số
// cụ thể cho cả outer và inner function
function outerFunction(x) {
    function innerFunction(y) {
        return x + y;
    }
    return innerFunction;
}
var fn_inner = outerFunction(3);

var result = fn_inner(5);

console.log(`Cách 1 ${result}`);
console.log(`Cách 2 ${outerFunction(3)(5)}`);

// NOTE: Preservation of varibles
// NOTE: naming ccnflict.
// theo thứ tự ưu tiên scope của inner function rồi mới tới outer function
// và global function

function outside() {
  var x = 5;
  function inside(x) {
    return x ;
  }
  return inside;
}

console.log(outside()(10));  // returns 20 instead of 10

// // NOTE:  Sử dụng  argument object
// NOTE: No seperate This.

// NOTE: Arrow function

function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
    console.log(`age : ${this.age}`);

  }, 1000);
}

// var p = new Person();
// result is NaN
function People() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(() => {
   this.age++; // |this| properly refers to the person object
   console.log(`age : ${this.age}`);
    }, 1000);
}

var p = new People();

// việc sử dụng arrow function không tạo ra một context this của bản thân nó
// nên vẫn giữ được context this hiện tại


























// NOTE: Nested functions and closures
// inner function có thể truy cập
