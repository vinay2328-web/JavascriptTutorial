console.log('#Tuts-43: Async and Await in JavaScript');

// Async return Promise
async function kuhoo() {
    console.log("Inside kuhoo function");

    const response = await fetch('https://api.github.com/users');

    console.log('before Response');

    const users = await response.json();

    console.log('users resoloved');

    return users;
}

// console.log('before calling kuhoo');
// let a = kuhoo();
// console.log('after calling kuhoo');
// console.log(a);
// a.then(data => console.log(data));
// console.log('Last line of this js file');

// Practice:

async function getData(){
    // console.log('Inside getData function');
    const response = await fetch('https://reqres.in/api/users?page=1');
    // console.log('before response');

    const users = await response.json();
    // console.log('users resolved');

    return users;
}

// console.log('Before calling getData()');
let getUsers = getData();
// console.log('After calling getData()');
// console.log(getUsers);
let myContent = document.getElementById('myContent');
getUsers.then(userDetails => console.log("userDetails: ", userDetails, "\n", " New DATA ", userDetails.data));
// console.log('Last line of this js file');


async function showUsers () {
    let userData = await getUsers;
    // let userData = await setTimeout(() => getUsers, 1000);
    let allUsers = userData['data'];
    console.log(allUsers);

    let html = "";
    for(let ind = 0; ind < allUsers.length; ind++){
        let str = `<div style="float:left; display:inline-block; width: 25%; border:1px solid #d0d0d0; margin:8px; padding: 10px">
                        <div>${allUsers[ind].first_name} ${allUsers[ind].last_name}</div>
                        <div>Email:  ${allUsers[ind].email}</div>
                    </div>`;
        html += str;
    }
   myContent.innerHTML = html;
};
// showUsers();

// FetchData button
let fetchData = document.getElementById('fetchData');
fetchData.addEventListener('click', showUsers);

// ES6 Javascript
// const personalInfo = {
//     firstName: 'Vinay',
//     lastName: 'Pathrikar',
//     city: 'Aurangabad',
//     zipCode: 431005
// }

// const {firstName: myFn, lastName: myLn} = personalInfo;

// console.log(`${myFn} ${myLn}`);