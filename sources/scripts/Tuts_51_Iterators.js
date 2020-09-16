console.log('#Tuts-51: Iterators in Javascript');

const myArray = ['Vinay', 'Pallavi', 'Hari', 'Kuhoo', 'Pari'];

function nameIterators(values) {
    let nameInx = 0;
    // will return an object
    return {
        next: () => {
            if (nameInx < values.length) {
                // will return this object
                return {
                    value: values[nameInx++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}


let nameList = (val)=> {
    let index = 0;
    return {
        next: ()=>{
            if(index < val.length){
                return{
                    values: val[index++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}

console.log("My array is: ", myArray);

let names = nameIterators(myArray);
let listName = nameList(myArray);

console.log(listName.next());