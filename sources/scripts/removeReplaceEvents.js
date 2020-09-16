console.log('Removing & Replacing Elements in Javascript');
// create li element
let element = document.createElement('li');
let textNode = document.createTextNode('I am the text node');
element.appendChild(textNode);
// Add class to the li element
element.className = 'myUlist';
element.id = 'createdLi';
element.setAttribute('title', 'myTitle');
// element.innerText = 'Hello this is created by Vinay';
// element.innerHTML = '<b>Hello I\'m the bold text</b>';

let ul = document.querySelector('ul.mylist');
ul.appendChild(element);
// console.log(element, ul);

// Replacing element using replaceWith()
let elem2 = document.createElement('h2');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tNode = document.createTextNode('I am text node 2');
elem2.appendChild(tNode);
console.log(elem2);

// Replacing 'element' with 'elem2'
element.replaceWith(elem2);

// using replaceChild
let myList = document.getElementById('mylist');
console.log(myList);
myList.replaceChild(elem2, document.getElementById('mList'));

// removing Child
myList.removeChild(document.getElementById('fList'));

// getAttribute & hasAttribute
let getClassName = elem2.getAttribute('class');
let hasClassName = elem2.hasAttribute('id');
console.log(elem2, getClassName, hasClassName);

// quick Quize
/* 
    1. Create heading with text 'Go to code with vinay'
    2. Create an a tag outside it with href 'www.codewithvinay.com'
*/

// 1. Create heading with text 'Go to code with harry'
let myHeading = document.createElement('h2');
myHeading.id = 'myHeading';
myHeading.className = 'myHeading';
myHeading.innerHTML = '<b>Go to Code with Harry</b>';
console.log(myHeading);

// 2. Create an a tag outside it with href 'www.codewithharry.com'
let aTag = document.createElement('a');
aTag.id = 'aTag';
aTag.className = 'aTag';
aTag.setAttribute('href', 'https://www.codewithharry.com');
aTag.setAttribute('target', '_blank');
console.log(aTag);
aTag.appendChild(myHeading);

elem2.replaceWith(aTag);