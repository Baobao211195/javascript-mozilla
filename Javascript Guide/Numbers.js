/**
 * // NOTE:
 không có một kiểu cụ thể cho số nguyên

 */

 console.log('number 1 ' + 0888);

// binary number được mô ta dưới dạng byte 0, 1

var x = 0011;
console.log(`The value is ${x}`);

var y = 0xa;
console.log(`The value is ${y}`);

var z = 0B11111;
console.log(`The value is ${z}`);

// Octal numbers : hệ cơ số 7
var n = 0755; // 493
console.log(`The value of Octal number is ${n}`);

// octal numbers are supported if they are prefixed with 0o
var a = 0o10;
console.log(`The value of Octal number is ${a}`);

// Exponentiation
var h = 1e3; console.log(`The value of Exponentiation is ${h}`);

 /**
  * NUmber object
  */
  console.log("The max value : ", Number.MAX_VALUE);
  console.log("The min value : ", Number.MIN_VALUE);

  console.log(`The number prototype : ${Number.prototype}`);
  
