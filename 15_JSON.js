//1, là 1 định dạng dữ liệu ( chuỗi)
//2. javascript object notation
//3. json : number, boolean, null, array,object,string

//stringify : từ javascript types => json
//parse : từ json => javascript types

var object = {
    name: 'Son Dang',
    age: 18
}
// var jsonString = JSON.stringify(object)


const jsonString = '{"name": "Son Dang", "age": 18}'
const obj = JSON.parse(jsonString)

//Promise ( sync, async)
// setTimeout(function() {
//     console.log('Dòng này sẽ in ra sau')
// }, 0)
// // setTimeout là tác vụ bất động bộ (async)

// console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)



//Promise pain
//Callback hell
//Pyramid of doom

//promise(concept) : co 3 trang thai
//1. pending
//2. fulfilled
//3. rejected3

/* 
var promise = new Promise( 
    //executor
    function (resolve, reject) {
        logic
        //thanh cong : resolve()
        //that bai : reject()
        reject('hihihi');
        // resolve();
    }
)

promise 
    .then(function (hihi) {
        console.log(hihi)
    })
    .catch(function () {
        console.log('failure')
    })
    .finally(function () {
        console.log('DONE!')
    })

*/

/* 
1. Promise.resolve()
2. Promise.reject
3. Promise.all
*/
var promise = Promise.resolve('success!');

promise
    .then(function (result) {
        console.log('result: ', result)
    })
    .catch(function (err) {
        console.log('err: ', err)
    })

var promise1 = new Promise(
    function (resolve) {
        setTimeout(function () {
            resolve([1]);

        },2000)
    }
)

var promise2 = new Promise(
    function (resolve) {
        setTimeout(function () {
            resolve([2,3]);

        },5000)
    }
)

Promise.all([promise1, promise2])
    .then(function (result) {
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2))
    })


var users = [
    {
        id: 1,
        name: 'xuan'
    },
    {
        id: 2,
        name: 'nhi'
    },
    {
        id: 3,
        name: 'ne'
    }
];

var comments = [
    {
        id: 1,
        user_id:1,
        content: '1 2 3 4 ngay '
    },
    {
        id: 2,
        user_id:2,
        content: 'noi nho se bien mat di hay con luu luyen z'
    }
];


//1. Lay comments
//2. Tu cmts lay ra user id
// Tu user_id lay ra user tuong ung

//Fake API

const getComments = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(comments)
        },2000)
    })
}

const getUser = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(users)
        },5000)
     }  )
}

Promise.all([getComments(), getUsers()])

//Fetch
//API (URL) -> Application programing interface
//Cong giao tiep giua cac PM
//BACKEND ->API-> FETCH-> JSON/XML

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(resovle){
        // Chả về luôn jon().pasres chuyển sang dạng object 
        return resovle.json();
    })
    .then(function(posts){
        //Lặp lại một mảng và thay đổi giá trị của mảng => trả về mảng
        var htmls = posts.map(function(post){
            return `<li>
            <h2>${post.title}</h2>
            <h2>${post.body}</h2>
            </li>`;
        });
        // Chuyển từ mảng sang dạng chuỗi 
        var html = htmls.join('')
       //Lấy ra thẻ ul có id = "" chuyển sang dang html xuất ra màn hình
        document.getElementById('comment-box').innerHTML = html
    })

