//1.Array Object

var colors = ["red", "green","blue"];

// Cách 1  : liệt kê tất cả các thành phần
for (let index = 0; index < colors.length; index++) {
    const element = colors[index];
    console.log(`Element ${index} is ${element}`);
    /**
     * red
     * green
     * undefined
     * blue
     */
}

// Cách 2 : chỉ liệt kê những thành phần có giá trị 
colors.forEach(function (color) {
    console.log(`Color : ${color}`);
    /**
     * red
     * green
     * blue
     */
});

// Cách 3  chỉ liệt kê những thành phần có giá trị 
colors.forEach(color => console.log("Arrow color : ", color));
/**
     * red
     * green
     * blue
     */

// sử dụng map
colors
    .map(function(item) { return item.toUpperCase();})
    .forEach(color => console.log("Mapped color :" + color));

// sử dụng filter : fiter return về một mảng các phần từ match vs dk
colors.filter(function (color) {
    return color.startsWith('r');
}).forEach(color => console.log("Filtered color : " + color));

var isRed = colors.filter(color => {return color.startsWith('r')});
console.log(`is red is ${isRed}`);

// sử dụng every giống allMatch trong java 8
var numberArray = [4, 5,7];
var boo = numberArray.every(num => num > 3);
console.log("Lớn hơn 3 " + boo);

// sử dụng some giống anyMatch trong java 8
var someBoo = numberArray.some(num => num > 5);
console.log("Có số lớn hơn 5 : " + someBoo);

// sử dụng reduce : tính tổng một mảng 
var sum = numberArray.reduce((num1, num2) => {return num1 + num2;}, 1);
console.log("Tổng là : " + sum);

// sử dụng reduceRight () : làm việc như reduce nhưng bắt đầu từ phần tử cuối cùng.


//2. Làm việc với mảng như object.
