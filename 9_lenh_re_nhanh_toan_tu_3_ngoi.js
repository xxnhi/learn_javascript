/*
Để vượt qua thử thách này, hãy hoàn thành hàm cho trước để đáp ứng các yêu cầu sau:

Khi a chia hết cho 3 thì return về 1
Khi a chia hết cho 5 thì return về 2
Khi a chia hết cho 15 thì return về 3
*/

function run(a) {
    if ( a % 15 == 0) 
    return 3;
    else if ( a% 5 ==0)
    return 2;
    else (a%3 ==0) 
    return 1;
}


// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3

//switch
var date = 3;
switch (date) {
    case 2:
        console.log('hnay la t2')
        break;
    case 3:
        console.log('hnay la t3')
        break;
    case 4:
        console.log('hnay la t4')
        break;
    case 5:
        console.log('hnay la t5')
        break;
    default:
        console.log('khong bit');
}
var course = {
    name: 'javascript',
    coin : 250 
}

if (course.coin > 0) {
    console.log(`${course.coin} Coins`)
} else {
    console.log('Mien phi')
}

//toan tu ba ngoi - ternary operatpr

var result = course.coin > 0 ? `${course.coin} Coins` : `Mien phi`
console.log(result)