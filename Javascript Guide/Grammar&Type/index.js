//1. NOTE:
// var  : khai báo biến và khởi tạo giá trị
// let : khai báo trong block scope, biến local,
// Khai báo trong block scope, là giá trị const

//2. Biến
/**
phải bắt đầu bàng 1 ký tự, dâu _, dấu $
*/


//3. Khai báo biếnote
/**
 + nếu là var x = 34, có thể sử dụng cho cả khai báo local và global.
 + nếu là  x = 42. đây là khai báo global, không nên sử dụng khai báo này.
 + nếu là let x = 42, để khai bao trong một block scope.
*/
//4. Gán giá trị cho biến.

/**
khai báo biến vs var và let mà không gán giá trị, thì nó sẽ có giá trị là undefined

*/
// var a ;
// console.log('The value of a is : ' + a);
//
// console.log('The value of a is : ' + b);
// var b;
//
// let x;
// console.log('The value of a is : ' + x);
//
// console.log('The value of a is : ' + y);
// let y;

// NOTE: Giá trị của undefined sẽ là false trong biểu thức điểu kiệnote
var x  = null;
console.log(x * 21); // giá trị bằng 0.


//5. Variable scope.
/**
+ Khi khai báo một biến nằm ngoài bất kỳ một function nào gọi là biến global.
+ Nếu khai báo biến trong một function thì gọi là biến local.
+ Note trong ECMASr 2015 ko có khai niệm block
*/
if (true) {
    var x = 5;
}
console.log(x); // 5

if (true) {
    let y = 5;
}
// console.log(y); // undefined

//6. Hoisting
/**
 * Example 1
 */
console.log(k === undefined); // true
var k = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = 'my value';

(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();


// 7. Function hoisting
console.log("==========================> Function hoisting");
foo();
function foo() {
    console.log("Barrr");
    
}
//baz(); // Baz is not a function because
// bar is a variable but i use a variable does not define
var baz = () => console.log("Bar2rrrrr");


// 8. Constant
/**
 * Các thuộc tính của một object là constant thì không phải là constant
 * điều này tương tự như đối vói object.
 */
const MY_OBJECT = {'key' : 'value'};
console.log(`Before change constant : ${MY_OBJECT.key}`);
MY_OBJECT.key = 'change value'
console.log(`After change constant : ${MY_OBJECT.key}`);

const MY_ARRAY = ["OANH", "VAN"];

console.log(`Before change array constant : ${MY_ARRAY}`);
MY_ARRAY[1] = 'Oanh changed'
console.log(`After change array constant : ${MY_ARRAY}`);
