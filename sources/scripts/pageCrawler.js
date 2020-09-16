console.log('#Tuts-19: Smart Page Crawler in JS');
// To find Google/Python text/links

let str = 'Google'; // 'python'
let links = document.links;
let href;
let newLinks = new Array();
// let pythonText = document.querySelector('a').innerHTML;
Array.from(links).forEach(function(element){
    href = element.href;
   let pythonText = element.innerHTML;
   // console.log(pythonText);

    // if(href.includes(str)){
    //      console.log(href);
    //    newLinks.push(href);
    //   console.log(newLinks);
    // }

    if(pythonText.includes(str)){
        alert();
        console.log(pythonText);
    }
    
});