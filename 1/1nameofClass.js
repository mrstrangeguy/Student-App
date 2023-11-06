
let classObj=require('../classObj')
//function to print the name of the class
console.log("1 function to print the name of the class")
function className(){
    return classObj.name
}
console.log(className())

module.exports=className

