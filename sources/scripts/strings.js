console.log('we are at tuts 6');
const name = 'Vinay';
const greetings = "Good Morning";
// console.log(greetings + ' ' + name);

let html = "<h1>This is Headting<h1>" +
            "<p>This is para</p>";
html = html.concat('Hi', ' ', 'str1');
console.log(html);
// console.log(html.indexOf('is'));
// console.log(html.lastIndexOf('is'));
// console.log(html.charAt(32));
// console.log(html.endsWith('str1'));
// console.log(html.includes('is'));
// console.log(html.substring(0,6));
// console.log(html.slice(0,3));
// console.log(html.split(' '));
// console.log(html.replace('This', 'It'));

let fruit1 = 'Orange';
let fruit2 = "Apple";
// useing `` backtik create template
let myHtml = `Hello ${name}
                <h1> This is Heading </h1>
                <p> I like ${fruit1} and ${fruit2}</p>
             `;
// document.body.innerHTML = myHtml;

let iLikes1 = "Movie";
let iLikes2 = "Swimming"
let likes = `Hello ${name}
            <p>I like ${iLikes2} and ${iLikes1}
            <p>Also I like ${fruit2}
            `;
/// document.body.innerHTML = likes;