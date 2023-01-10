var hi = 'phep thuat winx enchantix';
var fullName = 'BXN la \"angel\"';

console.log(hi.length);
console.log(fullName);

//template string es6
var firstName = 'Nhi';
var lastName = 'Bui';
console.log('Toi la ' + firstName + ' ' + lastName);
console.log(`toi la : ${firstName} ${lastName}`); 

//Lam viec voi chuoi

var myString = 'hoc JS tai f8!';
//0h1o2c3 4J

//keyword : javascript string methods
// 1.length: do do dai 1 chuoi
console.log(myString.length);

// 2. find index : tim dc tra ve so , k tim dc tra ve -1
console.log(myString.indexOf('JS')) //4
console.log(myString.indexOf('JS',6)) //11
console.log(myString.search('JS')) //4

// 3.cut string
console.log(myString.slice(4, 6))
console.log(myString.slice(4))
console.log(myString.slice(-3,-1))

// 4.replace  
console.log(myString.replace('JS', 'Javascript')) // tim 1 tu
console.log(myString.replace(/JS/g, 'Javascript')) //tim tat ca cac tu

// 5. convert to upper case
console.log(myString.toUpperCase())

// 6. covert to lower case
console.log(myString.toLowerCase())

// 7.trim : xu ly khi bj thua ki tu khoang trang 
console.log(myString.trim())
// 8.split : cat 1 chuoi thanh array, chi can tim ra diem chung

var languages = 'Javascript, PHP, Ruby'
console.log(languages.split(', '))

//9. get a character by index   
const myString2 = 'Xuan Nhi';

console.log(myString2.charAt(0));
console.log(typeof myString2.charAt(0));
