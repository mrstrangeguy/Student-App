
let classObj=require('../classObj')
//function to calculate and print the number of students who scored below a certain mark in all subjects.

   

function scoredBelowAll(certain_mark){
    let students=[]
classObj.students.forEach((student)=>{
    let flag=true
    student.marks.forEach((subject)=>{
          if(subject.mark>=certain_mark){
             flag=false
          }    
    })
    if(flag){
        students.push({
            name:student.name             
        })
      }
    })
   
   return students.length
}

console.log(scoredBelowAll(40))

 module.exports=scoredBelowAll