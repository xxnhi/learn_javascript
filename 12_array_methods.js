

var courses = [
    {
        id: 1,
        name: 'javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'ruby',
        coin: 0
    },
    {
        id: 6,
        name: 'ruby',
        coin: 100
    },
    {
        id: 4,
        name: 'php',
        coin: 400
    },
    {
        id: 5,
        name: 'reactjs',
        coin: 500
    }

];
//forEach : duyet qua tung phan tu cua mang
courses.forEach(function (course, index) {
    console.log(index, course);
})

//every : ktra all ptu cua mang phai thoa man 1 dieu kien gi do
// return kdl boolean  
var isFree = courses.every(function (course, index) {
    return course.coin === 0;
});
console.log(isFree)

//some : nguoc lai voi every
// chi can 1 ptu thoa man thi tra ve dung (boolean)
//Dungwf lai ngay khi tim dc ptu dung

//hieu don gian every la toan tu && con some la toan tu ||
//find : tim ( 1 doi tuong)
var course = courses.find(function (course, index) {
    return course.name === 'ruby';
})
console.log(course);

//filter :loc, giong voi find cung la tim kiem nhung se tim kiem nhiu hon 1 ptu , se tra ve het tat ca cac phan tu tim kien duoc, kieu tra ve cua no la mot mang
var course = courses.filter(function (course, index) {
    return course.name === 'ruby';
})
console.log(course);
/*
Để vượt qua thử thách này, hãy tạo hàm getMostFavoriteSport 
có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array)
. Hàm getMostFavoriteSport sẽ trả về các môn thể thao 
có điểm số yêu thích lớn hơn 5.
*/
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(arr) {
    var result = arr.filter(function () {
        return arr.like > 5;
    })
    return result
}

//map : thay doi element cua array
//dung de them hoac sua lai cac phan tu trong object cua mot mang theo cach mong muon
// trong function thay doi cai j thi tra ve cai do

//đối số của map là function 
function courseHandle(course) {
    //console.log(course);
    return {
        id: course.id,
        name: `Khoa hoc ${course.name}`,
        coin: course.coin,
        coinText: `Gia :${course.coin}`,
        
    }
 }
var newCourses = courses.map(courseHandle);
console.log(newCourses);


//reduce :  muốn nhận về 1 gtri duy nhất
// dùng để lưu trữ biến tích trữ, thay vì dùng loop để tính gtri cộng dồn từ các phần tử trong mảng thì reduce sẽ giúp cta việc đó

// var totalCoin = 0;
// for (var course of courses) {
//     totalCoin += course.coin;
// }
// console.log(totalCoin);

// var i = 0;
// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//     i++;

//     console.table({
//         'luot chay': i,
//         'bien tich tru': accumulator,
//         'gia khoa hoc': currentValue.coin
//     })
//     console.log(currentValue)
//     return accumulator + currentValue.coin;
// }
// var totalCoin = courses.reduce(coinHandler, 0);
// console.log(totalCoin);

//accumulator : la bien luu tru
//currentValue : ptu cua mang


var totalCoin = courses.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.coin;
}, 0);
console.log(totalCoin);

var hihi = courses.reduce((a, b) => a + b.coin, 0);
console.log(hihi);
/* 
Tại SEA GAMES 31 vừa qua, đoàn thể thao Việt Nam đã đứng đầu bảng tổng sắp huy chương. Hãy tạo hàm getTotalGold có 1 tham số là mảng. Tính tổng số huy chương vàng mà đoàn thể thao Việt Nam đạt được trong kỳ SEA Game lần này.

Trong thực tế đoàn thể thao Việt Nam có được 205 huy chương vàng nhưng list ra thì dài quá nên mình chỉ list ra một vài cái tượng trưng thôi nhé.
*/


var sportss = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

function getTotalGold(sportss) {
    return sportss.reduce( (accumulator, currentValue)=> accumulator + currentValue.gold ,0)
}

// Expected results:
console.log(getTotalGold(sportss)) // Output: 23

const numbers = [1, -1, 2, 3];

const sumne = numbers.reduce((accumulator, currentValue) => {
    
    return accumulator + currentValue
}, 0);

 //a=0, c=1 => a = 1
 //a=1, c =-1 => a=0
 //a=0 , c =2 => a =2
 //a=2, c=3 => a =5

 //Flat : - "làm phẳng" mảng từ depth array - "mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

var flatArray = depthArray.reduce((flatOutput, depthItem) => {
    return flatOutput.concat(depthItem);
}, []);

console.log(flatArray)

//lấy ra các khóa học và đưa vào mảng mới



  /*
  Cho trước danh sách một số bộ phim, hãy viết hàm calculateRating để tính điểm trung bình IMDB
của những bộ phim mà Christopher Nolan làm đạo diễn.
  */

var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
  }
];

function calculateRating(watchList){
  var hi = watchList.filter ( function ( watch) {
    return watch.Director ==='Christopher Nolan';
  })
  var diemtong = hi.reduce( (watch, film) => {
   return watch + Number(film.imdbRating)  }
  ,0)

  return diemtong/hi.length;
}

// Expected results
console.log(calculateRating(watchList)); // Output: 8.675

//includes method
// có trong array vs string

var title = 'responsive web design'
console.log(title.includes('web'));
console.log(title.includes('web',45)); //5 : vij tri bat dau tim cua chuoi











