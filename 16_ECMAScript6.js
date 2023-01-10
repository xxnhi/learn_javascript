//========================1.let, const
// var/ let , const : scope, hosting ( var ho tro)
a = 1;
var a;
//const/var ,let : assignment( var,let ho tro)
//code thuan : var
//babel : const, let
//khi dinh nghia vien va k gan lai : const
//khi can gan lai gia tri ch bien : let
 

//=========================2.template literals
const courseName = 'Javascript';
const courseName2 = 'PHP';
const description = `Course name : ${courseName} ${courseName2}`

console.log(description);

//========================3.multiline string

const lines = `Line 1
Line 2`
console.log(lines);

//========================4.arrow function
const logger = (log) => {
    console.log(log)
}
logger('hihi')

const sum=(a, b) => a + b;

console.log(sum(2, 3));

const course = { 
    name: 'javascript course basic',
    //khong dc xai function constructor () =>
    getName:function(){
        return this;
    }
}

console.log(course.getName())

//==============================5.classes
//constructor : ham khoi tao

class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() { return this.name; }

    getPrice() { return this.price; }
}

const phpCourse = new Course('php', 1000);
const jsCourse = new Course('js', 1050);

console.log(phpCourse);
console.log(jsCourse);

/*Tạo class Person có thuộc tính name và age

Chú ý: Không dùng constructor function nhé. */

class Person {
    constructor(name,age) {
        this.name = name;
        this.age=age;
    }
}

// Expected results
const person = new Person('Long', 22);
console.log(`Tên: ${person.name}, tuổi: ${person.age}`);
// Output: 'Tên: Long, tuổi: 22'


//====================================== 7. default parameter value : đn gia trị mặc định cho tham số

function loggerr(log = 'gtri mac dinh') {
    /*if (typeof log === 'undefined') {
        log = 'gtri mac dinh';
    } */
    console.log(log);
}

loggerr();

function thongbao(log, isAlert ) {
    if (isAlert) return alert(log);
    console.log(log);
}

logger('Message...', true)

//======================================6.Enhanced object literals
//giúp :
//1. đn key : value cho object
//2. đn method cho object
//3. đn key cho object dưới dạng biến

var name1 = 'javascript ne'
var price = 1020
/*
var course1 = {
    name1,
    price,
    getName() {
        return name1
    }

}
console.log(course1.getName());

*/
//----
var fieldName = 'new-name'
var filedPrice = 'price'

const course1 = {
    //name2: 'java',
    [fieldName]: 'java'
}

console.log(course1);


//================================== Destructuring

var array = ['javascript', 'php', 'ruby']
/*
Thay vì :
var a = array[0];
var b = array[1];
var c = array[2];
console.log(a, b, c);
Thi dung:
*/
var [a, b, c] = array
//var [a, , c] = array

console.log(a, c);

//===================================== Rest : lấy ra những phần còn lại
//rest la array
//var[a,...rest]=array;
//console.log(rest);

//-khi use vs object  
var monhoc = {
    namen: 'javascript',
    price: 1000000,
    description :'description content'
}

var { namen, price } = monhoc;
console.log(namen, price);


function rest(...params) {
    console.log(arguments)
}

function viduRest({ name, price, ...rest }) {
    console.log(price);
    console.log(rest)
}

viduRest({
    name: 'javascript',
    price: 9000000,
    description :'description content'
})
console.log(rest(1, 2, 3, 4, 5, 7, 8, 9));
//====================================== Spread

//# Spread with Arrays 
/*Spread syntax hay còn gọi là three dot (...) là một bổ sung hữu ích khác cho JavaScript để làm việc với các Arrays, Objects và các function calls.  */

//Ví dụ trường hợp thức tế thì ta có thể merge array sử dụng concat.

// Create an Array
const tools = ['hammer', 'screwdriver']
const otherTools = ['wrench', 'saw']

// Concatenate tools and otherTools together
//const allTools = tools.concat(otherTools)

//console.log(allTools);

//(4) ["hammer","screwdriver","wrench","saw"]



//khi sử dụng Spread systax.

// Unpack the tools Array into the allTools Array
const allTools= [...tools, ...otherTools]

console.log(allTools)


// #Spread // Create an Object and a copied Object with Object.assign()
// const originalObject = { enabled: true, darkMode: false }
// const secondObject = Object.assign({}, originalObject)

// console.log(secondObject);//{enabled: true, darkMode: false}with Objects

//Sử dụng Spread syntax thì sao? ez game.

// Create an object and a copied object with spread
const originalObject = { enabled: true, darkMode: false }
const secondObject = { ...originalObject }

console.log(secondObject);//{enabled: true, darkMode: false}

//# Spread with Function Calls 


// Create a function to multiply three items
function multiply(a, b, c) {
  return a * b * c
}
//Nếu bình thường thì sao, thì add từng paramsx zô chứ sao:

multiply(1, 2, 3) ;// 6
//Nhưng khi sử dụng Spread trong function calls thì rất đơn giản

const numbers = [1, 2, 3]

multiply(...numbers);//6

/*
Destructure sử dụng để tạo ra một new variables từ array items, hoặc object properties
Spread syntax sử dụng để unpack terables của một arrays, objects, và function calls
Rest parameter là một cú pháp tạo ra một array từ một số lượng giá trị không xác định


Hiểu đơn giản thì spread khi sử dụng kết hợp vs detrustering dùng để sao chép array object
, có thể thay thế phần tử trong object, có thể truyền vào function call ( nhưng chỉ là array hoặc
1 danh sách object thì không) <div><br></div><div>Thằng rest parameter thì nó cũng tương tự như spread.
Nó dùng để lấy ra các phần tử khi truyền vào từ function() và trả về 1 mảng có thể sử dụng các method có sẵn.</div><div><br></div>
*/

var cacmonan = ['com', 'thit chien', 'ga chien']

function motdong(...rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}

motdong(...cacmonan) 

//=====================Modules : tachs chuc nang rieng biet
// gồm : import va export
//export dc cai j thi import dc cai do

//import logger from './logger.js'
// sua bang cach thay type ="module" trong <script></script >

//export default logger


//=============================optional chainning (?.)
/*
khi bạn xử lí data trả về từ Api, b viết ra 4, 5 dòng code chỉ để kiểm tra props của object con của object có tồn tại hay không thì toán tử optional chainning là 1 giải pháp tuyệt vời
*/






