// const arrA = [3,4,5,6]
// const arrB = [7,8,9,10]

// const arrD = ["J","Q","K"]
// console.log([...arrA , ...arrB]);

// const arrC = [...arrA,...arrB]

//ghép mảng a, b, c thành 1 array có phần tử xếp từ nhỏ đến lớn
const a = [2,6,8,4]
const b = [3,9,11,1]
const c = [0]

const bt1 = [...a,...b,...c]
// console.log(bt1);

// let dem = 0;
// for (let i = 0; i < bt1.length - 1; i++ ) {
//     for (let j = i + 1; j < bt1.length; j++) {
//         if (bt1[j] < bt1[i]) {
//             dem = bt1[i];
//             bt1[i] = bt1[j]
//             bt1[j] = dem 
//         }
//     }
// }
// console.log(bt1);


//sort 
const sortsort = (a,b) => a - b;
console.log(bt1.sort(sortsort));
