console.log('Understanding DOM - document object model');
let doc = document;
/* doc = document.links[0];
doc = document.forms[0]; */
doc = document.links;
// print all the anchor tags
Array.from(doc).forEach(function (element) {
    let urls = element;
   // console.log(urls);
});

// print all the images
let img = document.images;
Array.from(img).forEach(function (path) {
    let imgUrl = path;
  //  console.log(imgUrl);
});

let myObj = [
    {
        name: 'Vinay',
        age: 32,
        sex: 'Male'
    },
    {
        name: 'Pallavi',
        age: 30,
        sex: 'Female'
    }

];
let i;
Array.from(myObj).forEach(function(index, element){
    let ind = index;
    let ele = element;
    // console.log(ele);
    for(key in ind){
        let msg = `Hello my name is ${ind.name}, I'm ${ind.age} years old. And I'm ${ind.sex}`;
        console.log('msg: ', msg);
    }
});
// console.log(myObj);