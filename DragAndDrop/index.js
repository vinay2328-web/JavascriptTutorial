console.log('#Tuts-63: Drag and Drop feature in Javascript');

// imgBox and whiteBox
const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', (e)=>{
    // console.log('Drag start event is trigger');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});

imgBox.addEventListener('dragend', (e)=>{
    // console.log('Drag end event is trigger');
    e.target.className = 'imgBox';
    
});

// whiteBoxes
for(whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover', (e)=> {
        e.preventDefault();
        // console.log('Over is trigger');

    });

    whiteBox.addEventListener('dragenter', (e)=> {
        // console.log('Enter is trigger');
        e.target.className += ' dashed';
        
    });

    whiteBox.addEventListener('dragleave', (e)=> {
        // console.log('Leave is trigger');
        e.target.className = 'whiteBox';
        
    });

    whiteBox.addEventListener('drop', (e)=> {
        // console.log('Drop is trigger');
        e.target.append(imgBox);
        e.target.className = 'whiteBox';
        
    });
}