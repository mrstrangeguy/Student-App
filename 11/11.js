
let classObj=require('../classObj')
//function to find and print the student with the highest marks in a specific subject.

function highestMark(current_subject){
    let current_Mark=0
    let current_student;
    classObj.students.forEach((student)=>{
          student.marks.forEach((subject)=>{
              if(subject.subject===current_subject){
                if(subject.mark>current_Mark){
                    current_Mark=subject.mark
                    current_student=student.name
                }
              }
          })
    })
    return current_student
}

console.log(highestMark("Computer"))

module.exports=highestMark