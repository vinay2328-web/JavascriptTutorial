console.log("#Tuts-37: Callbacks in Javascript");

// Pretend this is coming from Server
const studentsList = [
    { name: "Vinay", subject: "Computer Science" },
    { name: "Pallavi", subject: "Artificial Intelliegence" },
    { name: "Hari", subject: "Machine Learning" },
];

// Enroll the Student 
function enrolledStudent(student, callback) {
    setTimeout(function () {
        studentsList.push(student);
        callback();

    }, 3000);
}

// Get Students List
function getAllStudents() {
    setTimeout(function () {
        let stdList = document.getElementById('stdList');
        let str = "";
        studentsList.forEach(function (student) {
            str += `<li>${student.name}</li>`;
        });

        stdList.innerHTML = str;

    }, 1000);
}

// Run the Functions
let newStudent = { name: "Kuhoo", subject: "Dance" };
enrolledStudent(newStudent, getAllStudents);
// getAllStudents();