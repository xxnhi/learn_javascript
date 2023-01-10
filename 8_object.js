var me = 'hihihi'

var myInfo = {
    name: 'xxnhi',
    age: 18,
    address: 'tani',
    [me]: 'tui cuoi dok',
    getName: function () {
        return this.name;
    }
}
//function --> phuong thuc/method
//others --> thuoc tinh /property
myInfo.email = 'hihi@gm.com'
myInfo['my-email'] = 'hihi@gm.com'
delete myInfo.age;
console.log(myInfo)
console.log(myInfo.getName())

//object constructor : xay dung doi tuong

function User(firstName,lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function () {
        return `${this.firstName}${this.lastName}`;
    }
}

var author = new User('Nhi', 'Xuan', 'avatar');
var user = new User('Nhi', 'nhj', 'avatar');

author.title = 'bun qua ik';

console.log(author);
console.log(author.constructor);
console.log(user);

//object prototype : nguyen mau de tao nen 1 doi tuong
//la nguyen lieu de tao nen ngoi nha
// dung de them thuoc tinh O NGOAI ham tao

User.prototype.className = 'F8';
User.prototype.getLastName = function () {
    return this.lastName;
}
console.log(user.className)
console.log(user.getLastName())

//Doi tuong Date
//javascript date object mozilla   

var date = new Date();
console.log(date)
console.log(date.getFullYear()) 
//getFullYear/ getMonth // getDate

//Hàm getNextYear trả về năm kế tiếp
var date = new Date();
function getNextYear () {
    return date.getFullYear() + 1;
}

//Math object :
/* 
Math.PI
Math.round() : Lam tron ( 1.3 = 1; 1.5 = 2; 1.8 = 2)
Math.abs() : gtri tuyet doi 
Math.ceil() : chỉ làm tròn trên
Math.floor() : chỉ làm tròn dưới
Math.random() : trả về 1 số thập phân nhỏ hơn 1
Math.min()
Math.max()
*/

console.log(Math.PI)
console.log(Math.min(4, 5, 6))
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));

var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];

//console.log(bonus[random]);

console.log(Math.max(-100, 1, 90, 9585));

/*Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng. */
function getRandomItem (hihi) {
    return hihi = Math.random;
}