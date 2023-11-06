let classObj=require('../classObj')

//function to find and print the student with the lowest marks in a specific subject.

function lowestMark(current_subject){
    let current_Mark;
    let current_student;
    classObj.students[0].marks.find((sub)=>{
        if(sub.subject===current_subject){
            current_Mark=parseInt(sub.mark)
        }
        
    })
    
    classObj.students.forEach((student)=>{
        
          student.marks.forEach((subject)=>{
              if(subject.subject===current_subject){
                
                 if(subject.mark<=current_Mark){
                    current_student=student.name
                 }
              }
          })
    })
  
    return current_student
}

console.log(lowestMark("Computer"))

module.exports=lowestMark