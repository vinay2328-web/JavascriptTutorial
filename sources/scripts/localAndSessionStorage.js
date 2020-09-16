console.log('#Tuts-20: Local & Session Storage in Javascript');
// Array || JSON: Javascript object notation
let impArray = ['Bhendi', 'Kanda', 'Lasun'];
// LocalStorage: Key | Value
// Add a Key Value pair inside the localstorage
localStorage.setItem('Name', 'Vinay');
localStorage.setItem('Name2', 'Kuhoo');
localStorage.setItem('Name2', 'Kuhoo');
localStorage.setItem('Bhaji', JSON.stringify(impArray)); // to convert JSON string

// Clear a perticular key-value pair
// localStorage.removeItem('Name');

// Retrieve an item from localstorage
let name = localStorage.getItem('Bhaji');
name = JSON.parse(name); // to convert JSON string into an object
console.log(name);

// clear localstorage items
// localStorage.clear();

// sessionStorage
// sessionStorage.setItem('Name', 'sVinay');
// sessionStorage.setItem('Name2', 'sKuhoo');
// sessionStorage.setItem('Name3', 'sPallavi');
// sessionStorage.setItem('Bhaji', JSON.stringify(impArray)); 