console.log('Events and Event Object in Javascript');

// addEventListener
document.getElementById('heading').addEventListener
    ('mouseover', function (e) {
        console.log('You have clicked on Heading');
       // console.log('e: ', e);
        let variable, offSetX, offSetY, clientX, clientY;
        variable = e.target;
        variable = e.target.classList;
       //  console.log('variable: ', variable);
        variable = Array.from(variable);
       //  console.log('variable: ', variable);
        offSetX = e.offsetX;
        // console.log('offSetX: ', offSetX);
        offSetY = e.offsetY;
        // console.log('offsetY: ', offSetY);
        clientX = e.clientX;
        // console.log('clientX: ', clientX);
        clientY = e.clientY;
       // console.log('clientY: ', clientY);
    });
// Click event
let btn = document.getElementById('btn');
btn.addEventListener('click', func1);
btn.addEventListener('dblclick', func2);
// func1 function
function func1(e){
    console.log('You have clicked button');
    e.preventDefault();
}
// func2 function
function func2(e){
    console.log('You have double clicked button', e);
    e.preventDefault();
}

// mouseEnter and mouseLeave
document.querySelector('.btnNo').addEventListener(
    'mouseenter', function(){
    console.log('This is mouseEnter');
});
document.querySelector('.btnNo').addEventListener(
    'mouseleave', function(){
    console.log('This is exit mouseEnter');
});

// background color change
document.querySelector('.container').addEventListener(
    'mousemove', function(e){
        console.log(e.offsetX, e.offsetY);
        document.body.style.backgroundColor = `rgb( 
            ${e.offsetX}, ${e.offsetY}, 154
            )`;
        console.log('You have entered mouse move event');
    }
);