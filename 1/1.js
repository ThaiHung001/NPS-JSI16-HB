const bt1_array = [
    {
        name : "Bao Chau",
        tuoi : 13,
        course : ["M5", "M3", "M10"]
    },
    {
        name : "Hung",
        tuoi : 16,
        course : ["M1", "M23", "M57"]
    },
    {
        name : "Quang",
        tuoi : 15,
        course : ["M1", "M3", "M5"]
    },
    {
        name : "Cuong",
        tuoi : 35,
        course : ["M7", "M8", "M6"]
    },
    {
        name : "Person1",
        tuoi : 14,
        course : ["M7", "M2", "M4"]
    },
    {
        name : "Person2",
        tuoi : 999,
        course : ["M1", "M3", "M4"]
    },
    {
        name : "Person3",
        tuoi : 20,
        course : ["M1", "M3", "M5"]
    },

]

const AgeSearch = () => {
    const age = document.querySelector('.age').value;
    if (age =="" || age == 0) {
        alert("vui lòng chọn độ tuổi") 
    } else {
        let render = document.querySelector('.render')
        render.innerHTML = ""
        let result = bt1_array.filter((data) =>  data.tuoi == age)
        console.log(result);
        for (let item of result) {
            render.innerHTML += `
                <li>${item.name}</li>
            `
        }
    }
}

const ClassSearch = () => {
    const Cs = document.querySelector('.class').value;
    if (Cs == "" ) {
        alert("vui lòng chọn khoá học") 
    } else {
        let RCL = document.querySelector('.render_class_learner')
        RCL.innerHTML = ""

        let result = bt1_array.filter((data) =>  {
            for( let item of data.course) {
                return  item == Cs
            }
        })

        // console.log(result);
        if (result == "") {
            RCL.innerHTML = "--Không tìm thấy--"
        } else {
            for (let item of result) {
                RCL.innerHTML += `
                    <li>${item.name}</li>
                `
            }
        }

    }
}