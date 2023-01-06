let student = [];
let number = [];
const specialDesk = [4,6,7,8,10]

const studentName = ["古樂彤","田欣凱","何碧欣","吳卓彥","吳麗瑩","李治熹","李穎瑤","侯璟琪","孫敏靈","翁鴻飛","梁智傑","許宛瑩","許穎","陳萬傑","陳樂康","陳樂悠","湯泳妍","馮銘濤","黃澤賢","劉志聰","劉梓謙","鄭婉婷","黎曦雅","盧泳欣","霍依婷","薛贏超","鍾瑋汶","魏俊昌","蘇啟堅"]

const btnEl = document.querySelector("#btn-el")

// create a student desk array
for (let i=1; i<=12; i++) {
    student.push(document.querySelector("#seat-"+ i +""))
    console.log(i)
    console.log(student)
}


/* student.push(document.querySelector("#seat-1"))
student.push(document.querySelector("#seat-2"))
student.push(document.querySelector("#seat-3"))
student.push(document.querySelector("#seat-4"))
student.push(document.querySelector("#seat-5"))
student.push(document.querySelector("#seat-6"))
student.push(document.querySelector("#seat-7"))
student.push(document.querySelector("#seat-8"))
student.push(document.querySelector("#seat-9"))
student.push(document.querySelector("#seat-10"))
student.push(document.querySelector("#seat-11"))
student.push(document.querySelector("#seat-12")) */

// button click event
btnEl.addEventListener("click", generate)

// generate students array
function generate() {
    clear()
    for(let i=1; i<=29; i++) {
        number.push(i)
    }
    console.log(number)

    // pick a random number that wont repeat and pick students
    student.forEach(element => {
            for (let i=1; i<=2; i++) {
                let r = Math.floor(Math.random() * number.length) //random
                element.textContent += ` ${studentName[number[r] - 1]} (${number[r]})`
                element.textContent += "\n"
                const removed = number.splice(r, 1) // remove specific index in the array
                console.log(number)
            }
    });

    // pick the remain student to the special desks that contain 3 student
    for (let i=0; i<=4; i++) {
        let r = Math.floor(Math.random() * number.length) //random
                student[specialDesk[i]].textContent += ` ${studentName[number[r] - 1]} (${number[r]})`
                student[specialDesk[i]].textContent += "\n"
                const removed = number.splice(r, 1) // remove specific index in the array
    } 
}

// clear and reset the desk before generate students
function clear () {
    student.forEach(element => {
        element.textContent = " "
})}