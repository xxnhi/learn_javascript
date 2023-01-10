//dom co 3 thanh phan : element ( tag) , attribute(class, id. title...), text
//The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

//javascript : browser | server (nodejs)
//api : application programming interface
// browser : html -> dom -> web api

document.write('HELLO GUYS!');
document.write('HELLO GUYS!');
document.write('HELLO GUYS!');

//HTML DOM
/*
    1.Element : ID, class,tag
    css selector, html collection
    2. Attribute
    3.Text
*/
//HTML collection
var headingNode = document.getElementById('heading')
var headingNode2 = document.getElementsByClassName('head')
var headingNode3 = document.getElementsByTagName('h1')


console.log(headingNode)
console.log(headingNode2)
console.log(headingNode3)

//    CSS selector
 
var hihi = document.querySelector('.head')
var hihi1 = document.querySelector('#heading')

console.log(hihi)
console.log(hihi1)

//1. truy vấn đến thẻ div có class là products-list:
//#Cách-1
var productsListElement = document.getElementsByClassName('products-list')[0];
//#Cách 2
var productsListElement = document.querySelector('.products-list');

//2. truy vấn đến thẻ div đầu tiên có class là product
//#Cách-1
var firstProductElement = document.getElementsByClassName('product')[0];
//#Cách-2
var firstProductElement = document.querySelector('.product');

//3. Truy vấn đến tất cả các thẻ button
//#Cách-1
var buttonElements = document.getElementsByTagName('button');
//#Cách-2
var buttonElements = document.querySelectorAll('button');

//DOM attributes
 
//THEm attributes vao
var headingElement = document.querySelectorAll('h2')
headingElement.title = 'heading';
headingElement.className = 'sjhdladj';

// headingElement.setAttribute('class', 'hihihi')

//InnerText(GIONG J MINH THAY) vs textContent (text thataj trong DOM, K BI ANH HUONG BOI NHUNG THUOC TINH KHAC) Property

var headingE = document.querySelector('h2')
console.log(headingE.innerText);

headingE.innerText = 'new heading';
console.log(headingE.innerText);

//geter : laays ra
//setter: thay doi noi dung thuoc tinh cua doi tuong


//InnerHTML vs OuterHTML

var boxElement = document.querySelector('.box')

boxElement.innerHTML = '<h1>InnerHTML nek</h1>'


// document.querySelector(".box").innerHTML ='<div class="on">Khong bi loi</div>'

var render = (html) => document.querySelector('ul').innerHTML = html  

/* 
Ví dụ: Với mảng var courses = ['ReactJS', 'AngularJS', 'VueJS'] sẽ thu được kết quả:

ReactJS
AngularJS
VueJS
*/


//CACH 1:
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var change = document.querySelector('ul')
    for (var  course of courses) 
    {
        change.innerHTML += `<li>${course}</li>`
    }

}

// render(courses)

//CACH 2:
function render(courses) {
    var change = document.querySelector('ul')
    change.innerHTML+= courses.map((course)=> `<li>${course}</li>`)

}


//Node properties

var boxStyleE = document.querySelector('.box1')
console.log([boxStyleE])


//DOM  CSS/ DOM STYLE

var boxElement2 = document.querySelector('.box2')
console.log(boxElement2.style)
//background-position
//camelCase
//css inline   
// boxElement2.style.width = '100px'
// boxElement2.style.height = '200px'
// boxElement2.style.backgroundColor = 'red'

// Object.assign(boxElement2.style, {
//     width: '200px',
//     height: '100px',
//     backgroundColor: 'green'
// })

// console.log(boxElement2.style.width)

//classList property : tra ve DOMTokenList

//add : them class vao element
//contains : ktra 1 class co nam trong element hay k
//remove : xoa bo 1 class co element cua minh
//toggle : vd : dong mo menu
//  + neu co class o element, khi goi toi thi se xoa class
//  + neu k co, thi no se them vao   

console.log(boxElement2.classList)
console.log(boxElement2.classList.length)
console.log(boxElement2.classList.value)
boxElement2.classList.add('red')

console.log(boxElement2.classList.contains('red'))

setTimeout(() => {
    boxElement2.classList.remove('red')
},3000)

/*Cho trước file HTML có các thẻ div, các bạn hãy thêm class box vào các thẻ div này nhé. */

var hihi = document.querySelectorAll('div')
hihi.forEach((item)=> { 
    item.classList.add('box');
})

//DOM events
// 1. attribute events
//2. assign event using the element node

//onclick, onmouseover

var pElement = document.querySelector('p');
pElement.onclick = function () {
    console.log(Math.random());
}
 

//DOM events example
//1. Input/select
//2. key up/down
var inputValue;
var inputElement = document.querySelector('input[type="text"]');

inputElement.onchange = function (e) {
    inputValue = e.target.value;
}

inputElement.onkeydown = function (e) { 
    console.log(e);
}
 
var inputCheck = document.querySelector('input[type="checkbox"]');
inputCheck.onchange = function (e) { 
    console.log(e.target.checked)
}


var selectElement = document.querySelector('select');
selectElement.onchange = function (e) {
    console.log(e.target.value)
 }


//PREVENTDAUFAULT  : loai bo hanh vi mac dinh cua trinh duyet tren the html
//StopPropagation : loai bo su kien noi bot

var aElements = document.links;

for (var i = 0; i < aElements.length; i++){
    aElements[i].onclick = function (e) { 
        console.log(e.target.href)
        if (!e.target.href.startsWith('https://f8.edu.vn'))
            e.preventDefault();
    }
}


//Event listener

var btnElement = document.getElementById('btn')


// btnElement.onclick = function () {
//     //viec 1
//     console.log('viet 1');

//     //viec 2
//     console.log('viet 2');

//     //viec 3
//     console.log('viet 3');
// }

// setTimeout(function () {
//     btnElement.onclick = function () { }
// }, 3000);

btnElement.addEventListener('click', function (e) {
    console.log(Math.random());
})

function viec1() {
    console.log('viec 1')
}

btnElement.addEventListener('click', viec1)

setTimeout(function () {
    btnElement.removeEventListener('click', viec1);
},3000)