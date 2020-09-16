console.log('Element Selectors in Javascript');
/* 
element selector:
    1. Single element selector = (#id)
    2. Multi element selector = (.class)
*/
//1. Single element selector = (#id)
let element = document.getElementById('myFirst');
// element = element.childNodes;
// element = element.parentNode;
// element.style.color = 'red';
// element.style.background = 'rgba(0,0,0,0.5)';
// element.innerText = 'Vinay is good boy!'
// element.innerHTML = '<b>Vinay is good boy</b>!'
// console.log(element.innerText);

/* let sel = document.querySelector('#myFirst');
sel = document.querySelector('.child');
sel = document.querySelector('div'); */
// console.log(sel);

// 2. Multi element selector
let elems = document.getElementsByClassName('child');
// elems[0].style.color = 'blue';
elems = document.getElementsByClassName('container');
// elems = document.getElementsByTagName('div');
/* Array.from(elems).forEach(element =>{
    let items = element;
    let hasHeading = items.querySelector('h1');
    if(hasHeading){
        hasHeading.style.color = 'blue';
    }
    items.style.color = 'red';
    console.log(items, hasHeading);
}); */
// console.log(elems);

let cont = document.querySelector('.container');
//  console.log(cont.childNodes);
// console.log(cont.children);

let nodeName = cont.childNodes[0].nodeName;
let nodeType = cont.childNodes[0].nodeType;
// console.log(nodeName);
// console.log(nodeType);
/* 
Node Types:
    1. element
    2. Attribute
    3. TextNode
    8. Comment
    9. document
    10. docType
*/

let container = document.querySelector('.container');
// console.log(container.children[1].children[0].children);

/* console.log(container.firstChild);
console.log(container.firstElementChild);
console.log(container.lastChild);
console.log(container.lastElementChild); */

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.childElementCount);
