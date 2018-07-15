//1.Array Object

var colors = ['red', 'green','blue'];

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

// sử dụng filter
colors.filter(function (color) {
    return color.startsWith('r');
}).forEach(color => console.log("Filtered color : " + color));
     
// sử dụng every giống allMatch trong java 8
var allMatch = colors.every(function (item) {return item instanceof String;});
console.log("All matched" + allMatch);

// sử dụng some giống anyMatch trong java 8


// sử dụng reduce