
let classObj=require('../classObj')
//function to print the teacher's name
console.log("2 function to print the teacher's name")
function teachersName(){
    return classObj.teacherName
}
console.log(teachersName())

module.exports=teachersName
