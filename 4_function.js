// khong thuc thi khi dinh nghia
// se thuc thi khi duoc goi

//dat ten ham tuan theo qui tac : a-z,A-Z, 0-9, _, $
// khong duoc dat so 0-9 o dau tien

// function showDialog() {
//     alert('Hi xin chao cac ban !');
// }
  // showDialog();

// function showMessage(message) {
//     alert(message);
// }

// showMessage("Hi anh em F8!");
//message la tham so

// function writeLog(message) {
//     console.log(typeof message)
// }
// writeLog('test'); // test la doi so

//agruments

//console.log(1, 2, 3, 4, 5);
/* 
[tham_số] là giá trị đầu vào khi [định_nghĩa] hàm
  - [đối_số] là giá trị truyền vào khi [gọi] hàm
*/

// function writeaLog(agruments) {
//     var myString = ' ';
//     for (var param of agruments) {
//        myString += `${param} - `
//     }
//     console.log(myString);
// }
// writeaLog('log 1', 'log 2', 'log 3');


//Tu khoa return trong ham - js co ban
// var isConfirm = confirm('Message !');
// console.log(isConfirm); //cancel = false, ok = true

// function cong(a, b)
// {
//     return a + b; //neu k return thi la undefined
// }
// var result = cong(2, 8);
// console.log(result);

// khi co nhieu ten function trung ten thi : function sau se dedf len cac function truoc

//co the khai bao bien trog ham
// function showMessage() {
//     var fullName = 'bxn';
//     console.log(fullName);
// }
// showMessage();

//co the define ham trong ham

// function showMessage() {
//     function showMessage2() {
//         console.log('mess2');
//     }
//     showMessage2();
// }

// showMessage();

/**
 * Cac loai function 
 * 1.declaration function
 * 2. expression function
 * 3. arrow function
 */

//1.
// showMessage(); //hoisting   
// function showMessage() {
//     console.log('declaration function');
//  }
//2.
// var showMessage2 = function () {
//     console.log('expression function');
//  }
// showMessage2();
// setTimeout(function () { });

// var myObject = {
//     myFunction: function () { }
// }
//hoisting : goi truoc khi duoc define
//3. arrow function
// let myFunction = (a, b) => a * b;

// hello = function() {
//   return "Hello World!";
// }