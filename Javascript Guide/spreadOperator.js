// NOTE: cho phép một expression được mở rộng tại nơi
// các phần tử hoặc các tham số được expected
// Eg.

// tạo một mảng mới có các phần tử là một phần của mảng cũ

var oldArray = [1,3,2,5];
var newArray1 = [4, 5, 6, ...oldArray]

console.log(`new array 1 ${newArray1}`);

var newArray2 = [4, 5, ...oldArray, 78];
console.log(`new array 2 ${newArray2}`);


// có thể làm việc với function như sau
function add( x, y, z) {
    return x + y + z;
}
// Call 1
console.log(`Cách gọi thứ nhất ${add(1, 2, 3)}`);

// Call 2
var arr = [2, 3, 4]
console.log(`Cách gọi thứ nhất ${add(...arr)}`);
