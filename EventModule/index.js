

const EventEmitter = require('events');

const event = new EventEmitter();

event.on('myName',()=>{
    console.log('My name is Nikhil');
})


event.on('myName',()=>{
    console.log('My name is Raj');
})


event.on('myName',()=>{
    console.log('My name is Kumar');
})


event.on('checkPage',(sc,msg)=>{
    console.log(`The status code is ${sc} amd message is ${msg}`);
})

event.emit("checkPage",200,"ok");
event.emit("myName");