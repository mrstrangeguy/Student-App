
let classObj=require('../classObj')
//function to print the names of all the students in the class
console.log("3 function to print the names of all the students in the class")
function printNames(){
    let names=[]
    classObj.students.forEach((student)=>{
        names.push(student.name)
       
    })
    return names
}
console.log(printNames())

module.exports=printNames