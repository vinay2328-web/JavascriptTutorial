console.log('#Tuts-42: Fetch API in JavaScript');

// Button with id myBtn
let myBtn = document.getElementById('myBtn');

// div with id content
let myContent = document.getElementById('myContent');

// let getData = () => {
//     console.log("Started getData");

//     // fetch in javascript
//     let url = "kuhoo.txt";
//     fetch(url).then((response) => {
//         console.log("Inside first then");
//         return response.text();
//     }).then((data) => {
//         console.log("Inside second then");
//         console.log(data);
//     })
// }

// Creating for get request/response
let getData = () => {
    console.log("Started getData");

    // fetch in javascript
    let url = "https://api.github.com/users";
    fetch(url).then((response) => {
        console.log("Inside first then");
        // .json convert to parse and strigify operation
        // if and only if it is in purely json(Javascript object notation) format
        return response.json();
    }).then((data) => {
        console.log("Inside second then");
        console.log(data);
    })
}

// console.log("Before running getData");
// getData();
// console.log("After running getData");

// Creating for post request
// let postData = () => {
//     console.log("Started postData..")
//     debugger;
//     url = "https://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"7987987","salary":"123","age":"23"}'
//     params = {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         // If data is an object then need to convert in string
//         // body: JSON.stringify(data);

//         // If data is in string then no need to convert in string
//         body : data
//     };

//     // fetch API
//     // fetch(url, params).then(response => response.json())
//     // .then(data => console.log(data)
//     // )

//     fetch(url, params).then((response) => {
//         console.log("Inside first then", response);
//         return response.json();
//     }).then((data) => {
//         console.log("Inside second then", data);
//         console.log(data);
//     })
// }

// function postData() {
//     url = "https://reqres.in/api/users";
//     data = '{"name": "vinay","job": "leader"}';
//     params = {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     }
//     // fetch(url, params).then(response=> response.json())
//     // .then(data => console.log(data)
//     // )

//     fetch(url, params).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }

let postUserData = () => {
    console.log('Inside postUserData');
    url = "https://reqres.in/api/users";
    data = '{"name": "sayli23","job": "leader"}';
    params = {
        method: "POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body: data
    }

    fetch(url, params).then((response) => {
        console.log("Inside First then", "\n", "response.json: ", response);
        return response.json();
    }).then((data) => {
        console.log("Inside Second then", "\n", "data: ", data);
        console.log(data);
    })

}

// Calling postData function
console.log("Before starting postData");
// postData();
postUserData();
console.log("After postData");