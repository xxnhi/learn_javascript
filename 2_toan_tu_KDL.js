/**
 * Các toán tử trong js
 * 1. Toán tử số học - Arithmetic
 * 2. Toán tử gán - assignment
 * 3. Toán tử ss - comparison
 * 4. Toán tử logic - logical 
 */

//3
// var a = 1;
// var b = 2;
// if (a < b)
// {
//     alert('Dung');
// }

//1
// var a = 1 + 2;
// console.log(a);

//2 : dau = la toan tu gan
// var fullName = 'BXN';


// //4
var a = 4;
var b = 2;
if ( a > 0 && b>0) {
  alert('Dung');
    
}
 
//Toan tu so hoc : + - * **(luy thua) / % ++ --
// var a = 1;
// var b = 2;
// var c = a ** b;
// console.log(c)

//Toan tu gan : =, +=, -=, *=,/=,**=

//+=
// var a = 1;
// var b = ++a * a--;
// alert(b);

// Toan tu chuoi - string operator
var firstName = 'Nhi';
var lastName = 'Bui';
lastName +=' Bui2'
alert(firstName + ' ' + lastName);

//Toan tu ss : ==, !=, > , < , >= , <=
// var a = 1;
// var b = 2;
// if (a == b)
// {
//     console.log('Dieu kien sai');
// } else {
//     console.log('Dieu kien dung');
// }


// Toan tu so sanh : ===, !==
// var a = 1;
// var b = '1';
// console.log(a === b);  //false
// console.log(a != b); 
// console.log(a !== b); //true

//Toan tu logic : && AND, || OR, ! NOT
// var a = 1;
// var b = 2;
// var c = 3;
// if (a > 0 && b > 0) {
//     console.log('DIEU KIEN DUNG');
// }

// KIỂU DỮ LIỆU TRONG JAVASCRIPT :
//Dữ liệu nguyên thủy - Primitive Data :( tạo ra vùng nhớ khác để lưu giá trị mới, ko thể sửa giá trị nguyên thủy)
/**
 * Number
 * string
 * boolean
 * undefined
 * null
 * symbol
 */
//Du lieu phuc tap - Complex data
/*
 *Function
 *Object
 */

 //Number type
// var a = 1;
// var c = 1.5;
// console.log(typeof a)
//String type
// var fullName = 'BXN';

//undefined type
//var age;

//null type
//var isNull = null;

//console.log(typeof isNull)  //object


//symbol type
// var id = Symbol('id'); //unique
// var id2 = Symbol('id'); //unique
// console.log(id);


//Function
// var myFunction = function () {
//     alert('Xin chao cac ban');
// }


//object type
var myObject = {
    name: 'Xuan Nhi',
    age: 19,
    address: 'Tay Ninh',
    myFunction : function(){}
};
console.log('myObject', myObject);
   

var myArray = [
    'Javascript',
    'PHP',
    'Ruby'
];
console.log(myArray)



//Thêm !! phía trước các giá trị truthy sẽ luôn trả về true

// console.log(!!1) // true
// console.log(!!'f8') // true
// console.log(!!['Mercedes']) // true
/*
Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy.

Trong Javascript có 6 giá trị sau được coi là Falsy:

false
0 (số không)
'' or "" (chuỗi rỗng)
null
undefined
NaN
*/

//Toan tu &&
// var result = 'A' && 'B' && 'C';
// console.log(result); //C
// neu khac 6 ki tu tren thi && lay gtri ben phai
//con neu la 1 trong 6 ki tu thi gan && = ki tu do

var result = 'A' || 'B' || 'C';
//nguoc lai voi &&
console.log(result);
var result = null  || 'N' || 'B' || 'C';
console.log(result);

