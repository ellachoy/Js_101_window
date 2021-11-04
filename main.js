console.log("test")

function printHello() {
    console.log('Hello')
}
printHello();

function changeName(obj){
    obj.name='coder'
}
const ellie ={ name:'ellie'};
changeName(ellie);
console.log(ellie)

//default parameter
function showMessage(message, from='unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi');

// rest parameters
function printAll(...args) {
    // for (let i=0; i < args.length; i++){
    //     console.log(args[i]);
    // }
    for (const arg of args) {
        console.log(arg);
    }
}
printAll('javascript', 'function','ella')
