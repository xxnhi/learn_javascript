var million = 1e6; // tương tự: 1000000
// hoặc
var billion = 2e9; // tương tự: 2000000000

if (0.1 + 0.2  ==0.3) { alert("true") } else { alert("false") }
console.log(0.1); 
console.log(0.2); 
console.log(0.1 + 0.2); // 0.30000000000000004


/* 
Number.isFinite()
Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
Number.isInteger()	
Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
Number.parseFloat()	
Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
Number.parseInt()	
Chuyển đổi chuỗi đã cho thành một số nguyên
Number.prototype.toFixed()	
Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
Number.prototype.toString()	
Chuyển đổi và trả về số đã cho dưới dạng chuỗi
*/

Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238
Number.parseInt('237.22') // 237
Number.parseInt('34 56 78') // 34
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString();    // '11'
(18).toString();     // '18'
(17.3).toString();   // '17.3'


var age = 18;
var PI = 3.14;

console.log(age.toString())
console.log(PI.toFixed())

console.log(typeof NaN); // 'number'
function isNumber(value) {
    return typeof value === 'number';
}

function isNumber (value) {
    return typeof value === 'number' && !isNaN(value) 
    
}
