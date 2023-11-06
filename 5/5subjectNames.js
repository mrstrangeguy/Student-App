let classObj=require('../classObj')
//function to print the subject names for a specific student.
console.log("5 function to print the subject names for a specific student.")

function subjectNames(student_name){
    console.log(student_name)
    let name=student_name.toLowerCase()
    let current_student=classObj.students.find((student)=>{
            return name===student.name.toLocaleLowerCase()
    })
     
    if(current_student){
        let subjects=[]
        current_student.marks.forEach((subject)=>{
            subjects.push(subject.subject)
        })
        return subjects
    }
    else{
        return "No such student is present in the Directory"
    }

}

console.log(subjectNames("Aju"))

module.exports=subjectNames