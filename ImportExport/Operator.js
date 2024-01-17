
const add = (x,y) =>{
    const z = x + y;
    return z;
}

const sub = (x,y) =>{
    return x-y;
}

const name = "Nikhil";

module.exports = {add,sub,name};

//? we can also exports like this way
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.name = name;