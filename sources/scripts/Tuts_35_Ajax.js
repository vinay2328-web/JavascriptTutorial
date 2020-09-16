console.log("Ajax tutorial in one video");


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');


    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }


    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState);
        
    // }

    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("We are done!");

}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            const list = document.getElementById('employeeList');

            


            str = "";
            
            for(i = 0; i < obj.data.length; i++){
                str += `<img src= "${obj.data[i].avatar}" />`;
                str += `<div>${obj.data[i].first_name} , ${obj.data[i].last_name}</div>`;
                str += `<div>${obj.data[i].email}</div>`;
            }

            list.innerHTML = str;

        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}

// Practice
let listButton = document.getElementById("listButton");
listButton.addEventListener("click", listBtnHandler);

function listBtnHandler(){
    //https://reqres.in/api/unknown
    console.log("You are clicked on Another List button...");

    let xhrList = new XMLHttpRequest();

    xhrList.open("GET", "https://reqres.in/api/unknown", true);

    xhrList.onprogress = function(){
        console.log("Please wait... you are almost done");
    }

    xhrList.onload = function(){
        if(this.status === 200){
            let list = JSON.parse(this.responseText);
            // anotherEmployee
            const employeeData = document.getElementById("anotherEmployee");
            let emplList = "";

            for(x = 0; x < list.data.length; x++){
                // console.log("name: ", list.data[x].name);
                emplList += `<div style="display: inline-block; padding: 10px; border: 1px solid #c0c0c0; margin: 5px;">`;
                emplList += `<div>Name:  ${list.data[x].name}</div>`;
                emplList += `<div>Year:  ${list.data[x].year}</div>`;
                emplList += `<div>Color:  ${list.data[x].color}</div>`;
                emplList += `<div>Pantone Code:  ${list.data[x].pantone_value}</div>`;
                emplList += `</div>`
            }

            employeeData.innerHTML = emplList;
        }
        else {
            console.log("Ohh! Something went wrong. Error.");
        }
    }

    xhrList.send();
}

