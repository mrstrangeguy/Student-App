let classObj=require('../classObj')

function printMarks(student_name){
    let name=student_name.toLowerCase()
    let current_student=classObj.students.find((student)=>{
            return name===student.name.toLocaleLowerCase()
     })
     if(current_student){
        return current_student.marks
     }
     else{
        return "No such student is found in the Directory"
     }
}

console.log(printMarks("Aju"))

module.exports=printMarks