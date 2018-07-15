/**
 * Math and date object
 * 
 */
console.log(`The current date is  ${new Date()}`);


// return thời gian hiển thị như trên đồng hồ số 
function JSClock() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var temp = '' + ((hour > 12) ? hour - 12 : hour);
    if (hour == 0) {
        temp = '12';
    }
    temp += ((minute < 10) ? ':0' : ':') + minute;
    temp += ((second < 10) ? ':0' : ':') + second;
    temp += (hour >= 12) ? ' P.M.' : ' A.M.';
    return temp;
}

console.log(JSClock());
