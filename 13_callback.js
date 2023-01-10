/* 
callback 
1. Là hàm 
2. đc truyền qua đối số khi gọi hàm khác
*/

function myFunc(param) {
    param('hoc lap trinh');
}

function myCallback(value) {
    console.log('value :', value)
}

myFunc(myCallback)

//Tạo chương trình tính toán

function subCb(a,b) {
    return a-b;
}

function multiCb(a,b) {
    return a*b;
}

function divCb(a,b) {
    return a/b;
}

function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3

var courses = [
    'javascript',
    'php',
    'ruby'
]
//c1
var htmls = courses.map((course) => {
    return `<h2>${course}</h2>`
})

console.log(htmls.join('\n'));

//c2

//map: thay doi element cua array
//dung de them hoac sua lai cac phan tu trong object cua mot mang theo cach mong muon
// trong function thay doi cai j thi tra ve cai do
Array.prototype.map2 = function(callback) {
    var output = [], arrayLength = this.length;

    for (var i = 0; i < arrayLength; ++i)
    {
        var result = callback(this[i], i);
        output.push(result);
    }

    return output;
}

var htmls2 = courses.map2((course) => {
    return `<h2>${course}</h2>`
})

console.log(htmls2.join('\n'));

var courses = [
    'javascript',
    'php',
    'ruby'
]

console.log(courses);

//forEach : duyet qua tung phan tu cua mang

//filter :loc, giong voi find cung la tim kiem nhung se tim kiem nhiu hon 1 ptu , se tra ve het tat ca cac phan tu tim kien duoc, kieu tra ve cua no la mot mang

//some : nguoc lai voi every ||
// chi can 1 ptu thoa man thi tra ve dung (boolean)
//Dungwf lai ngay khi tim dc ptu dung
//hieu don gian every la toan tu && con some la toan tu ||


//find : tim ( 1 doi tuong)

//every :&&

//reduce: muốn nhận về 1 gtri duy nhất
// dùng để lưu trữ biến tích trữ, thay vì dùng loop để tính gtri cộng dồn từ các phần tử trong mảng thì reduce sẽ giúp cta việc đó

// map
Array.prototype.map2 = function(callback){
    let lengthArr = this.length;
    let result = [];
    for(let i=0; i<lengthArr; i++){
        result.push(callback(this[i]));
    }
    return result;
}

//  filter 
Array.prototype.filter2 = function (callback){
    var lengthArr = this.length;
    var output = [];
    for(let index=0; index < lengthArr; index++){
        if(callback(this[index]) ){
            output.push(this[index])
        }
    }
    return output;
}
//  forEach 
Array.prototype.forEach2 = function(callback){
    let lengthArr = this.length;
    var result = [];
    for(var i=0; i<lengthArr; i++){
        result.push(callback(this[i]));
    }
    return result;
}

//  reduce
Array.prototype.reduce2 = function (callback, result ){
    let i = 0;
    let lengthArr = this.length;
    if(arguments.length < 2){
        i = 1;
        result = this[0];
    }
    for(; i < lengthArr; i++ ){
        result = callback(result, this[i], i, this);
    }
    return result;
}

//  some
Array.prototype.some2 = function (callback){
    let lengthArr = this.length;
    let result;
    for(let i=0; i<lengthArr; i++){
        if(callback(this[i])){
            result = true;
        }else{
            result = false;
        }
    }
    return result;
}


/*
Mình sẽ giúp nhiều bạn mới hiểu 1 chút về prototype inheritance 
trong Javascript. Và tại sao 1 thằng array có thể sử dụng phương thức
hasOwnProperty. Nó ở đâu mà ra?
*/

// Tạo 1 mảng với 2 cách và so sánh
var newArray = []; // tương tự var newArray = new Array()
console.log(newArray);
/*
1. Thằng newArray này nó có 1 thuộc tính ẩn là [[Prototype]].
Chính xác hơn thì mọi object trong javascript đều có thuộc tính ẩn này.
Thằng thuộc tính ẩn này sẽ trỏ tới thằng đối tượng Array.prototype 
bởi vì sự giúp đỡ của từ khoá 'new'. 
Bạn có thể tham khảo bằng cách gõ MDN new keyword để đọc thêm xem 'new'
nó làm những việc gì (nâng cao)

2. Thằng [[Prototype]] này sẽ được truy suất bằng cách viết:
newArray.__proto__
*/
console.log(
  'newArray có bố là Array.prototype? ' +
    (newArray.__proto__ === Array.prototype ||
      Array.prototype.isPrototypeOf(newArray))
); // true, kiểm chứng điều mình nói ở trên

/*
1. Hay đơn giản thì hãy hiểu thế này, thằng newArray có thằng bố 
là Array.prototype. Nên thằng newArray sẽ được thừa kế tài sản của 
thằng bố.
2. Ví dụ thằng bố có tài sản là map (Array.prototype.map) thì 
thằng con được hưởng cái tài sản đấy.
3. Chắc hẳn bạn sẽ hỏi là nếu thằng newArray có bố thì chắc thằng 
Array.prototype cũng có bố luôn --> Array.prototype có bố là thằng 
Object.prototype (thằng này là cụ tổ luôn) 
4. Mỗi 1 thằng object chỉ có 1 và chỉ 1 [[Prototype]] có nghĩa là
chỉ có 1 bố. Có 2 bố thì hơi mệt :)))
*/

console.log(
  'Array.prototype có bố là Object.prototype? ' +
    (Array.prototype.__proto__ === Object.prototype ||
      Object.prototype.isPrototypeOf(Array.prototype))
); // true

/**
1. Thằng Object.prototype là cụ tổ nên tất cả con cháu đều được 
hưởng tài sản. Mà cụ có tài sản hasOwnProperty 
(dịch ra là có sở hữu thuộc tính này hay không). 
Nên là tất cả con cháu đều có thể dùng tài sản của cụ. 
Bạn có thể check Object.prototype để xem cụ có khá nhiều tài sản luôn.
*/

console.log(Object.prototype);
/**
Nhưng cụ không có cha nên Object.prototype.__proto__ === null 
*/
console.log(Object.prototype.__proto__); // null



// Có thể có 1 vài sai sót, xin cao nhân chỉ giáo :))
// Một nguồn cực hay để đọc hiểu về prototypal inheritance:
// https://javascript.info/prototype-inheritance