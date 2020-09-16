console.log('#Tuts-21: Editable Divs in Javascript');

/*
You have to create a div and inject into a page which already has a heading and
whenever someone clicks on the div , it should be converted into editable item .whenever user clicks away(blur) . save the
note into the local storage
*/
// create div element
let clickableDiv = document.createElement("div");
clickableDiv.id = "clickMeDivId";
clickableDiv.className = "clickMeDivId";
clickableDiv.innerText = "You can write me..!";
clickableDiv.style = "width:450px; height:80px; font-size: 14px; background:rgba(0,0,0,0.1); border: 1px solid #d0d0d0; padding:5px; font-weight:normal";

// div placement inside heading
let divPlacement = document.getElementById("heading");
divPlacement.appendChild(clickableDiv);

// create text area
let textArea = document.createElement("textarea");
textArea.id = "textArea";
textArea.className = "textArea";
textArea.style = "width:450px; height:80px; font-size: 14px; background:rgba(0,255,0,0.1); border: 1px solid #003300; padding:5px; font-weight:normal; outline:none; resize: none;";

// create click function
clickableDiv.addEventListener('click', function(element){
    clickableDiv.replaceWith(textArea);
});

// Add textArea value inside localStorage
textArea.addEventListener('blur', function(element){
    let innerTextAreaValue = textArea.value;
    localStorage.setItem('textAreaValue', innerTextAreaValue);

    // set textArea value to clickableDiv
    textArea.replaceWith(clickableDiv);
    clickableDiv.innerText = textArea.value;
});




































