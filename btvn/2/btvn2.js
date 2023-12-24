//bt1
console.log("Bài 1");

let arr1 = [1,2,3,5]

let arr2 = arr1 // không nên sử dụng
let arr3  = [...arr1]

console.log(arr2);
console.log(arr3);

//bt2
console.log("Bài 2");

let arrA = ["Hello", " Xin chào"];
let arrB =  ["Bonjour", "Olá"]


let waysToSayHello_1 = [...arrA,...arrB]
console.log(waysToSayHello_1); 

let waysToSayHello_2 = [arrA,arrB] ///ko nên sử dụng
console.log(waysToSayHello_2);

//bt3
console.log("Bài 3");

let arrX = [0,1,2,3,4,5,6,7,8]

let arrSquare = arrX.map(item => item*item)

// let arrSquare = arrX.filter((data) => Math.sqrt(data) - Math.floor(Math.sqrt(data)) == 0)
console.log(arrSquare);


let arrOdds = arrX.filter((data) => data%2 == 1 )
console.log(arrOdds);

//bt6

// cho 1 mang nhu sau
//composer: Teacher Nguyễn Trung Hiếu - mindX School


let student = [
    {
        name: "Duong",
        age: 11,
        hobbies: ["video game","sleep","learn"]
    },
    {
        name: "Dong",
        age: 12,
        hobbies: ["video game","sick","study"]
    },
    {
        name: "Minh",
        age: 13,
        hobbies: ["video game","sick","learn"]
    },
    {
        name: "Thanh",
        age: 9,
        hobbies: ["play game","sleep","learn"]
    },
    {
        name: "Hung",
        age: 11,
        hobbies: ["play game","sick","study"]
    }
]


// Cau 1: nhap tuoi va in ra name cua nhung ai co so tuoi da nhap
// cau 2: Nhap so thich, và in ra toàn bộ sở thích và name của những ai có chứa sở thích đó.
// Câu 3: Lọc ra những ai có sở thich là study và in ra nó.
// Cau 4: thay doi toan bo nhung ai co tuoi == 11 thành 15. (sử dụng map.


// //cau 1
// let tuoiInput = Number(prompt("Mời người dùng nhập tuổi"));
// console.log("Cho t xin cái tuổi: ",tuoiInput);

// let nameofageinut = student.filter(item => item.age == tuoiInput)

// for (let key of nameofageinut) {
//     console.log(key.name);
// }

//cau 2

// let sothichInput = prompt("Mời người dùng nhậ tuổi");


// let NameOfHobby = student.filter(item => sothichInput == item.hobbies.find(i => i == sothichInput))
// console.log(NameOfHobby);

// for (let key of NameOfHobby) {
//     console.log(key.name);
// }

//cau 4 
let studentfilterage = student.filter(item => item.age == 11)
let studentchangeage = studentfilterage.map(item => item.age = 15);
console.log("studentchangeage: ", studentchangeage);
