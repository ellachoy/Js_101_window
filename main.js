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

const print=function(){
    console.log('print')   
};
//eg. getränkemascine
function getCola(add) {
    // console.log(add)
    const result= add(12,13);
    console.log(result);
}
function add(a, b){
  const sum= a+b;
  return sum;
}
// const result= add(3,4)
// console.log(result)
getCola(add);


function numbering(){
    document.write(1);
    i=0;
    while(i<10){
        document.write(i);
        i +=1;
    }
}
// for (let i=0; i<=30; i++){
//     document.write(i);
// }

numbering();