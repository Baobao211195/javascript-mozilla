console.log("pham vanoanh");

var name = ['oanh', 'phuong', 'luan', 'quynh'];
console.log(name);

var tt = [name, 'ha nam', 12323];
console.log(tt);

// accessing and modify array items
tt[1] = 'ha noi';
console.log(tt);
console.log(tt[0][2]);

for (const x of name) {
    console.log(x);
}
for(var x = 0; x< name.length; x++ ) {
    console.log(name[x]);
}

var sequence = [1, 1, 2, 3, 5, 8, 13];
for (var i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}
// convert string to arrry
var str = 'oanh,van,phuong,nam,hang';
var arr = str.split(',');
console.log(arr);

// join() == toString()
// var newStr = arr.join(',');
// console.log(newStr);

// Add use push().// add into the last element of array
// return new length
var newArray = arr.push('quynh coll');
console.log("old array :" + arr);
console.log("new array :" + newArray); // 6

// remove the last item use pop().
// return the last item is removed.
var newArrayPop = arr.pop();
console.log("old array :" + arr);
console.log("new array pop :" + newArrayPop); 

// add the first item.
// return new length
var newArrayUnshift = arr.unshift('haha');
console.log("old array :" + arr);
console.log("new array unshift :" + newArrayUnshift); 

// remove the first item of array
//return the item is removed
var itemShift = arr.shift();
console.log("old array :" + arr);
console.log("new array shift :" + itemShift); 
arr[0]
Number.parseFloat();




