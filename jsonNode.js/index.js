
const bioData = {
    name : "User",
    age : 23,
    description : "Hello World"
}

const jsondata = JSON.stringify(bioData);
const objData = JSON.parse(jsondata);

console.log(jsondata);
console.log(objData);