
let myArray = ["Ronaldo", "Messi", "Neymer"];

function addToArray(newString) {
    if (!myArray.includes(newString)) {
        myArray.push(newString);
    }
}


addToArray("Lewandowski");
addToArray("Ronaldo"); 


myArray.sort();


console.log("Array in alphabetical order:", myArray);
console.log("Length of the array:", myArray.length);
