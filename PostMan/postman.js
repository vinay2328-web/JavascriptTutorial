console.log('#Tuts-62: Project 6 | PostMan: Creating GET/POST requests in Javascript');

// Utility Functions:
// 1. Utility functions to get DOM element from string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

// Hide the parametersBox initially
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

// If the user clicks on params params, hide the json box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('jsonBox').style.display = 'none';
    parametersBox.style.display = 'block';
});

// If the user clicks on json box, hide the params box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('jsonBox').style.display = 'block';
});
// Initialize the no of parameters
let addedParamCount = 0;
// If the user clicks on + button, Add more Parameters
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = `<div class="form-row my-3">
                    <label for="parameter1" class="col-form-label col-sm-2 pt-0">Parameter ${addedParamCount + 2}</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Key ${addedParamCount + 2}">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Value ${addedParamCount + 2}">
                    </div>
                    <button class="btn btn-primary deleteParam"> - </button>
                </div>`;
    // Convert the element string to DOM node
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);

    // Add an event listener to remove the parameter on clicking - button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            // TODO: Add a confirmation box to confirmed the parameter deletion
            e.target.parentElement.remove();
        });
    }
    addedParamCount++;
});

// If the user clicks on Submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    // Show please wait in the response box to request patience from the user
    // let resposnceJsonText = document.getElementById('reponsePrism');
    document.getElementById('reponsePrism').innerHTML = "Please wait... fetching response...";

    // fetch all values if user has entered
    let url = document.getElementById('urlFeild').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;



    // If user has used params instead of json, colloect all the parameters in an object
    if (contentType == 'params') {
        data = {};
        for (i = 0; i < addedParamCount + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    }
    else {
        data = document.getElementById('requestJsonText').value;
    }

    // Log all the values in the console for debugging
    console.log('URL is ', url);
    console.log('requestType is ', requestType);
    console.log('contentType is ', contentType);
    console.log('data is ', data);

    // If the reqest type is get, invoke fetch api to a get request
    if (requestType == 'GET') {
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.text())
            .then((text) => {
                // document.getElementById('responseJsonText').value = text;
                document.getElementById('reponsePrism').innerHTML = text;
                Prism.highlightAll();
            });
    }
    else {
        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.text())
            .then((text) => {
                // document.getElementById('responseJsonText').value = text;
                document.getElementById('reponsePrism').innerHTML = text;
                Prism.highlightAll();
            });
    }

});