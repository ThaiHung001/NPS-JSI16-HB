//tìm hiểu về lậ trình hướng đối tượng OOP 


/* 
- khái niệm:
 +) Tái sử dụng
 +) Bảo trì
 +) Cấu trúc hệ thống ở mức độ cao
*/


////////// 1. Dối tượng (Obj); let Obj = {}
// trong OOP, mọi thứ đều dược coi là một đối tượng, gồm thuộc tính và phương thức
let student = {
    name: "Tèo",
    age: 990,
    study: function(){
        console.log("Soạn Văn");
    }
}

////////// 2. Lớp (Class)
/*
Là một bản thiết kế cho việc tạo dối tượng. Lớp định nghĩa thuộc tính và phương thưc
*/

/////Cú pháp tạo kiểu dữ liệu với class
class Student {
 // hàm khởi tạo thuộc tính
  constructor(_name, _age, _hobbies) {
    this.name = _name;
    this.age = _age;
    this.hobbies = _hobbies;
  }
}

let John = new Student("Jogn",12,["cầu lông"])
console.log("John: ", John.name);

class  PhanSo { 
    constructor(_Tu,_Mau) {
        this.tu = _tu;
        this.mau = _mau;
    }

    cong(PhanSoKhac) {
        const tuMoi = this.tu *  PhanSoKhac.mau + this.mau*PhanSoKhac.tu 
        const Maumoi = this.mau*PhanSoKhac.mau

        return new PhanSo(tuMoi,Maumoi)
    }
    rutgon() {
        const ucln = this.timUCLN(this.tu, this.mau)

        return new PhanSo(this.tu/ucln, this.mau/ucln)
        }
    // phương thức tìm ước chung lớn nhất (UCLN)
    timUCLN(a,b) {
        if (b == 0) return a;
        return this.UCLN(b, a%b)
    }
    hienthi(){
        console.log(`${this.tu}/${this.mau}`);
    }
} 

let PhanSo1 = new PhanSo(1, 2)
let PhanSo2 = new PhanSo(4,3)

console.log(PhanSo1, cong(PhanSo2));




