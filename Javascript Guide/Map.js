/**
Giói thiệu về collection được sắp
* xếp theo key. bao gồm Map và Set.
* 
*/

// 1. Map
/**
 * Các đặc tính của map.
 * 1. sử dụng for--of để loop qua các cặp key và value.
 * 2. Các properties của ma bao gồm 
 * 2.1. length
 * 2.2. get
 * 2.3. Map.prototype.// Represents the prototype for the Map constructor. 
 * Allows the addition of properties to all Map objects.
 * 3. Map instances thừa kế từ Map.prototype.
 * 4. Các cặp key và value có thể trùng nhau, nếu trùng nhau nó sẽ lấy key cuối cùng ở trong map.
 * vì các key này được sắp xếp theo thứ tự
 * 5.NaN can also be used as a key
 * 
 * 
 * 
 */
// Tạo một map.
var mapDemo = new Map();
console.log(mapDemo);

// Create key for map.
var keyStr = 'Key String';
var keyObjet = {};
var keyFunction = () => 'This my key function';

// create value for map
mapDemo.set(keyStr, 'Oanhpv');
mapDemo.set(keyStr, 'Oanhpv1');
mapDemo.set(keyObjet, new Object());
mapDemo.set(keyFunction, 'This is value of function');
console.log(`Size of map is ${mapDemo.size}`);

// get value
console.log(`Get a value with corresponding key is ${mapDemo.get(keyFunction)}`);
console.log(`Get a value with corresponding key is ${mapDemo.get(keyStr)}`);

// Với NaN
mapDemo.set(NaN, "not a number");
console.log(`Value of NaN before is ${mapDemo.get(NaN)}`);

var otherNaN  = Number('otherNaN');
console.log(`The other NaN is ${mapDemo.get(otherNaN)}`);

// Compare two NaN
console.log(`Compared NaN value is : ${mapDemo.get(NaN) === mapDemo.get(otherNaN)}`);
console.log(`Compared NaN key is : ${NaN === otherNaN}`);

// iterate map
for (const [k, v] of mapDemo) {
console.log(`Key is ${k} and value is ${v}`);
}

// iterate list values of map
for (const value of mapDemo.values()) {
console.log(`List of values is ${value}`);
}

// iterate list keys of map
for (const key of mapDemo.keys()) {
    console.log(`List of keys is ${key}`);
}

// c2 with entries
for (var [key, value] of mapDemo.entries()) {
console.log(key + ' = ' + value);
}

// sử dụng forEach.
mapDemo.forEach((k, v) => console.log(k + ' is ' + v));

// 3. Convert 1 mảng 2D thành 1 map
var array2D = [['key1', 'value1'],['key2', 'value2']];

// convert
var mapConverted = new Map(array2D);
mapConverted.forEach((k, v) => console.log('Array is converted : ' + k + ' is ' + v));
// show only keys
for (const key of mapConverted.keys()) {
console.log(`Key is ${key}`);
}
// show only values
for (const value of mapConverted.values()) {
console.log(`value is ${value}`);
}

console.log(`Array from map : ${Array.from(mapConverted)}`);

// 6. bản thân data trong map không bị cloned
var original = new Map([
[1, 'one']
]);

var clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false. Useful for shallow comparison

// 7. Map có thể được merged. nếu trùng key, giữ lại key của map sau cùng
var mapFirst = new Map([
[1, 'one'],
[2, 'two'],
[3, 'three'],
]);

var mapSecond = new Map([
[1, 'uno'],
[2, 'dos']
]);

// merge 2 map
var mapMerged = new Map([...mapSecond, ...mapFirst]);
mapMerged.forEach((key, value) => console.log(`Merged : ${key} is ${value}`));

for (const [k, v] of mapMerged) {
    console.log(`Merged : ${k} is ${v}`)
}

// map có thể merge cùng vs mảng
var mapMergedArray = new Map([...mapSecond, ...mapFirst], [1, 'oanhpv']);
for (const [k, v] of mapMergedArray) {
    console.log(`mergedArray : ${k} is ${v}`)
}
mapMergedArray.forEach((key, value) => console.log(`mergedArray : ${key} is ${value}`));