console.log("#Tuts-39 - Promises in Javascript");
// Promise: Best video on promises
// - resolve
// - reject
// - pending

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const error = true;
            if (!error) {
                console.log("Function: You have been resolved the promise");
                resolve();
            }
            else {
                console.log("Function: You have not been resolved the promise");
                reject("Sorry not fullfilled!");
            }
        }, 2000);
    });
}

// func1().then(function () { // calling the resolve function
//     console.log("Harry: Thanks for resloving! ");
// }).catch(function (error) { // calling the reject function
//     console.log("Harry: Very Bad bro. Reason: " + error);
// });

const students = [
    { name: "Kuhoo", subject: "Math" },
    { name: "Hary", subject: "English" }
];

function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("Student has been Enrolled!");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 1000);
    });

}

function getAllStudent() {
    setTimeout(function () {
        let stdList = document.getElementById('stdList');
        let str = "";

        students.forEach(function (student) {
            str += `<li>${student.name}</li>`;
        });

        console.log("You have fetched the students.");

        stdList.innerHTML = str;

    }, 5000);
}

let newStudent = { name: "Vinay", subject: "Arts" };
// enrollStudent(newStudent, getAllStudent);
// enrollStudent(newStudent).then(getAllStudent).catch(function(){
//     console.log("Some error occured!");
// });
// getAllStudent();

// function inside then ran as - resolve()
// function inside catch ran as - reject()

// Promise To Resolve if the given time is less than 2 sec or it will Reject.

function delay(time) {
    return new Promise((resolve , reject) => {
        if (time <= 2000) {
            setTimeout(() => resolve( "Resolve : " + "Time is less or equal to 2 sec"), time)
        }
        else {
            reject("Reject : " +"Time is more than 2 sec")
        }
    })
}

// delay(5000)
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

function delayTime(time){
    return new Promise(function(resolve, reject){
        if(time <= 2000){
            setTimeout(function(){
                resolve("Resolved: " + "The " + time + " sec is less than or equal to 2 sec");
            });
        }
        else {
            reject("Reject: " + "The " + time + " sec is more than 2 sec");
        }
    });
}

delayTime(5000)
.then(function(res){
    console.log(res);
})
.catch(function(err){
    console.log(err);
});