let classObj=require('../classObj')
//function to find and print the student with the highest total marks.

function highestTotal(){
    let final_total=0;
    let current_student;
      classObj.students.forEach((student)=>{
          let current_total=0;
          student.marks.forEach((subject)=>{
            current_total+=parseInt(subject.mark)
          })
          if(current_total>=final_total){
            final_total=current_total
            current_student=student.name
          }
      })

      return current_student;
}

console.log(highestTotal())

module.exports=highestTotal