// var languages = [
//     'javascript',
//     'ruby',
//     'php', 
//     'dart',
//     null,
//     undefined,
//     function () { },
//     123 
// ];
// console.log(languages)

// // var languages = new Array(
// //     'ruby'
// // );

// console.log(languages.length);
// console.log(languages[2])

/*
Lam viec voi array :
1. to string
2.join
3. pop
4. push
5. shift
6. unshift
7. splicing
8. concat
9. slicing
*/

var languages = [
    'javascript',
    'php',
    'ruby'
]
// console.log(languages.toString())

// console.log(languages.pop()) //xoa element cuoi mang va tra ve phan tu da xoa
// console.log(languages.pop())
// console.log(languages.pop())
// console.log(languages.pop())

// console.log(languages.push('dart')) // them 1 or nhiu ptu o cuoi mang
// //tra ve so ptu o mang
// console.log(languages.push('hihi', 'java'))
// console.log(languages.push('dart')) // them 1 or nhiu ptu o cuoi mang
// console.log(languages)

// //shift : nguoc lai voi pop
// //xoa 1 ptu dau mang va tra ve ptu da xoa
// console.log(languages.shift())
// console.log(languages)

//unshif : them 1 or nhiu ptu vao dau mang va
//tra ve do dai moi cua mang

//splicing : xoa/cat/chen ptu moi vao mang
// languages.splice(1,1)
// languages.splice(1, 0, 'dart')
// languages.splice(1,2,'dart','java')

// console.log(languages)

//concat : noi array
// var l2 = ['dart', 'ruby'];

// console.log(languages.concat(l2))

//slice
// console.log(languages.slice(0)) //copy mang


// function joinWithCharacter(array, charactor) {
//     return array.join(charactor)
// }


// Ví dụ khi sử dụng
// var cars = ['Honda', 'Mazda', 'Mercedes'];

// var result = joinWithCharacter(cars, ' - ');

// console.log(result); // Expected: "Honda - Mazda - Mercedes"

// Viết hàm tại đây
// function getLastElement(thamso)
// {
//     return thamso.slice(-1);
// }



// Ví dụ sử dụng
// var animals = ['Monkey', 'Tiger', 'Elephant'];
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

// Viết hàm tại đây
// function getFirstElement(THAMSO)
// {
//     return THAMSO.slice(0,1);
// }



// Ví dụ sử dụng
// var animals = ['Monkey', 'Tiger', 'Elephant'];
// var result = getFirstElement(animals);

// console.log(result); // Expected: "Monkey"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
