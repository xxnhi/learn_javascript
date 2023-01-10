var fullName = 'Bui Xuan Nhi'
var age = 19

//goi ham thong bao
// alert(fullName);
// alert(age);

//ham built-in : console
console.log('Day la 1 dong log')
console.warn(fullName);
console.error(fullName);

//ham built-in : confirm co cancel va oke
confirm('Xac nhan ban du tuoi!');
//ham built-in : prompt có hộp thoại hiện ra
prompt('Xac nhan ban du tuoi!');
//ham built-in : set timeout :(chay 1 lan) nghia la cho doan code duoc chay sau 1 khoang thoi gian mili giay
setTimeout(function () {
    alert('Thong bao')
},1000)
//ham built-in : set interval :(lap di lap lai) thuc thi lien tuc trong 1 khoang thoi gian
setInterval(function () { 
    console.log('Day la log s' + Math.random())
},1000)



