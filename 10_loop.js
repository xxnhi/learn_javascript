/* 
LOOP
1. for - lặp với đk đúng
2. for/in - lặp qua key cua doi tượng
3. for/of - lặp qua value của đói tượng
4. while - lặp khi điều kiện đúng
5. do/while - lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
*/

//-------------------------------for

// for (var i = 1; i <= 1000; ++i)
// {
//     console.log(i)
// }
/* 
Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length.
 Hàm này sẽ trả về một mảng gồm length phần tử, 
 các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.
*/

// var array = [];
// function getRandNumbers (min,max,length)
// {
//     for ( var i = 1; i < length; ++i)
//     {
//        array[i]= (Math.random() * (max - min) + min)
//     }
//     return array;
// }

//console.log(getRandNumbers(5, 8, 3));

// for (var i = 1; i <= 1000; ++i)
// {
//     console.log(i);
// }

/* Cho trước mảng numbers,
 hãy viết hàm getTotal trả về tổng giá trị các phần tử 
 của mảng.*/

//  function getTotal(arr) {
//     var sum =0;
//     for(var i =0; i < arr.length;++i)
//     {
//         sum +=arr[i];
//     }
//     return sum;
    
// }

// Expected results
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17

// var myArray = [
//     'h1','h2','h3','h4'
// ];
// console.log(myArray[2]);
/* 
Bạn hãy hoàn thành hàm getTotal để 
tính được tổng giá trị của đơn hàng.
*/

// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]

// function getTotal(arr){
//     var sum =0;
//     for ( var i =0; i < arr.length; ++i)
//     {
//         sum += arr[i].price;
//     }
//     return sum;
// }

// // Expected results:
// getTotal(orders) // Output: 8700000

// //----------------------------For/in loop
// var myInfo = {
//     name: 'xxnhi',
//     age: 19,
//     address :'tani'
// }
// //object co bnhiu key thi chay bao nhiu lan
// for (var key in myInfo)
// {
//     console.log(key)
//     console.log(myInfo[key])
// }

// var languages = [
//     'javascript',
//     'php',
//     'ruby'
// ]
// for (var key in languages)
// {
//     console.log(key)
//     console.log(languages[key])
// }

// var myString = 'javascript';
// console.log(myString[0]);

// for (var key in myString)
// {
//     console.log(myString[key])
// }

// function run(object) {
//     var arr = [];
//     for(var key in object){
//          arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
//     }
//     return arr;
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// // Output:
// // [
// //     "Thuộc tính name có giá trị Nguyen Van A",
// //     "Thuộc tính age có giá trị 16"
// //


// //---------------------------------For/of loop : dung de lay ra nhung ptu cua mang
//  //or tung chu cai cua mot chuoi
// var languages = [
//     'javascript',
//     'php',
//     'ruby'
// ]
// for (var value of languages) {
//     console.log(value);
// }
// var myString = 'javascript';

// for (var value of myString) {
//     console.log(value);
// }

// var Info = {
//     name: 'xxnhi',
//     age : 19
// }
// chuyen object thanh array
// console.log(Object.values(Info))

// for (var value of Object.keys(Info))
// {
//     console.log(Info[value]);
// }

//--------------------------while loop

// var i = 0;
// while (i < 1000)
// {
//     i++;
//     console.log(i);
// }

// var myArray = [
//     'javascript',
//     'php'
// ];

// var i = 0;
// while (i < myArray.length)
// {
//     console.log(myArray[i])
// }

//-------------------------do/while loop
// var i = 0;
// var isSuccess = false;
// do {
//     i++;
//     console.log('Nap the lan ' + i);
//     if (true) { 
//         isSuccess = true;
//     }
// } while (!isSuccess && i < 3 );

//-------------------break & continue in loop
// for (var i = 0; i < 10; i++){
//     console.log(i);
//     if (i >= 5)
//         break;
// }

// for (var i = 0; i < 10; i++){
//     if (i %2 !== 0)
//         continue;
    
//     console.log(i);
// }

//---------------vong lap longof nhau : NESTED LOOP
var myArray = [
    [1, 2],
    [3, 4],
    [5,6]
]

for (var i = 0; i < myArray.length; ++i) {
    console.log(myArray[i])
}

for (var i = 0; i < myArray.length; ++i) {
    for (var j = 0; j < myArray[i].length; ++j){
        console.log(myArray[i][j])
    }
}
