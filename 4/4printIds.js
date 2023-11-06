
let classObj=require('../classObj')
//function to print the IDs of all the students in the class.
console.log("4 function to print the IDs of all the students in the class.")
function printIds(){
    let ids=[]
    classObj.students.forEach((student)=>{
        ids.push(student.id)
        console.log(student.id)
    })
    return ids
}

console.log(printIds())

module.exports=printIds