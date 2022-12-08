
let myFunction1=function toTrim(){
    let str=' functionUp '
    console.log("my trim function is "+str.trim())
}

let myFunction2=function toUpperCase(){
    let str="nikitha merampally";
    console.log("my uppercase function "+str.toUpperCase())
}

let myFunction3=function toLowerCase(){
    let str='Nikitha Merampally';
    console.log("my lowercase function "+str.toLowerCase())
}

module.exports.myFunction1=myFunction1;
module.exports.myFunction2=myFunction2;
module.exports.myFunction3=myFunction3;
