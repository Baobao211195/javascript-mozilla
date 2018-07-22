/**
 * value trong set là một và duy nhất
 * so sánh vs Array :
 * + Tìm kiếm trong mảng sử dụng index  (indexOf)thì sẽ chậm
 * + Trong set bạn xóa thành phần theo giá trị, trong mảng phải dựa theo index.
 * + Giá trị NaN không thể tìm bằng indexOf trong mảng
 */
const setDemo = new Set([1,1,2,3]);
setDemo.forEach( v => console.log(`Value is ${v}`));

// tạo một set
var mySet = new Set();

mySet.add(2);
mySet.add(() => 'pham vanoanh');
mySet.add('vankem');
mySet.add(new Object());
mySet.add(new Object()); // là hai object khác nhau
mySet.forEach( v => console.log(`Value of mySet is ${v}`));

//Check sub set
function isSuperset(set, subset) {
    for (var elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}
// union of set
function union(setA, setB) {
    var _union = new Set(setA); // tạo ra một thằng mới tránh bị thay đổi giá trị của setA
    for (var elem of setB) {
        _union.add(elem);
    }
    return _union;
}

var setA = new Set([1, 2, 3, 4]),
        setB = new Set([2, 3, 5]);
console.log(isSuperset(setA, setB));

console.log(setA.forEach( k => console.log(`Value before is ${k}`)));
console.log(union(setA, setB));
console.log(setA.forEach( k => console.log(`Value after is ${k}`)));

// Mối quan hệ với array ví dụ trên đầu

// Mối quan hệ vs String
var text = 'Inadifan';
var mySet = new Set(text);  // Set ['I', 'n', 'd', 'i', 'a']
mySet.size;  // 5
for (const value of mySet) {
    console.log(`Giá trị : ${value}`); // chỉ return vs những thằng nào là duy nhất
}

// Ngoài ra còn có weakSet.
/**
 * WeakSet là một tập collections object
 * không thể enumerate qua các objects in weakset
 */

