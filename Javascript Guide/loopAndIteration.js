// NOTE: Đối với mảng
// nên sử dụng for truyển thống thay vì for in :
// Sử dụng for in khi lặp qua các properties của một object.

// 2. For .. of.
// có thể sử dụng cả cho array , map, set, and arguments.

//3. Sự khác nhau giữa for in và for of.


var arr = [3, 5, 7];
arr.foo = 'hello';

for (var i in arr) {
   console.log(`Sử dụng for in ${i}`); // logs "0", "1", "2", "foo"
}

for (var i of arr) {
   console.log(`Sử dụng for of ${i}`); // logs 3, 5, 7
}
