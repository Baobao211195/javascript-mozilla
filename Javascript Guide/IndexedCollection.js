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

// 3. Typed arrays.
/**
 * Typed array chia thành buffers và view.
 * + Buffer (dược implement bởi ArrayBuffer) là một object
 *  biểu diễn các mảnh dữ liệu (chunk of data). và nó ko đưa ra một 
 * kỹ thuận nào để truy nhập và nội dung của buffer.
 * + Sử dụng view để truy cập vào bộ nhớ trong buffer., view cung cấp 1
 * context bao gồm data type, starting offset và số lượng các thành phần,
 * trả về dữ liệu thực tế trong typed array.
 * 
 */

 // 3.1 ArrayBuffer
 /**   
  * là môt dạng data type sử dụng để mô tả một loại bộ nhớ đệm dữ liệu nhị phân
  * . Không thể thao tác trực tiếp vào nội dung
  * . Thay vào đó bạn tạo ra một typed array view để thể hiện buffer
  * dưới một định dạng cụ thể và sử dụng nó để đọc và ghi nội dung
  * vào buffer.
  */

  // 3.2 Typed array views
  /**   
   * Typed array views have self descriptive names 
   * and provide views for all the usual numeric types like Int8, 
   * Uint32, Float64 and so forth
   * . This is useful for Canvas data processing,
   */