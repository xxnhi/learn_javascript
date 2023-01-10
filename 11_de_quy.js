//giai quyet ptu bi trung :
/* 
input : a = ['a', 'b', 'c','a', 'b', 'c']
output : a = ['a', 'b', 'c']
*/

var array = ['a', 'b', 'c', 'a', 'b', 'c']
console.log(new Set(array))

//DE QUY
/*
vd : function deQuy() {
    if ( num <0) {
    //dungwf   
    }
    deQuy();
}
1. Xac dinh dc diem dung
2. Logic handle 

*/

function countDown(num) {
    if (num > 0)
    {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}

countDown(3);

// function loop(start, end, callback) {
//     if (start < end)
//     {
//         if (start < end)
//         callback(start);
//         return loop(start+1,end,callback);
//     }
// }

// var array =['js','php','ruby']
// loop(0, array.length , function (index) \
// {
//     console.log('index:', index);
// })


const giaiThua = (number) => {
    if (number > 0)
    {
        return number * giaiThua(number - 1);
    }
    return 1;

}

console.log(giaiThua(4))