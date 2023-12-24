///cau 9 
let m = [1,2,3,4,5,6,"hh", "9",80,100]
let new_m = m.filter((i) => i === Number(i))
 m = new_m
 console.log(m);
let mSquared = []
for (let item of m) {
    mSquared.push(item*item)
}
console.log(mSquared);

//cau 10 
let c10_a = [" High knowledge, high return"]

let new1_c10_a = c10_a.map((data) => data.toLowerCase())
c10_a = new1_c10_a


let re_c10_a = c10_a.toString().replace(/ /g, '')
c10_a = [re_c10_a]
console.log(c10_a);

// cau 11  chua xong 
class People {
    constructor(name,age,address) {
        this.setName = name;
        this.age = age; 
        this.address = address;

    }

    getName() {
        return this.name;
    }
    setName(newName) {

        this.name = newName;
    }

    getAge() {
        return this.name;
    }
    setAge(newAge) {
        newName = newName.trim();

        this.name = newName;
    }

    getAddress() {
        return this.name;
    }
    setAddress(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}
