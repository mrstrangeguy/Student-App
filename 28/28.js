let classObj=require('../classObj')

// function to calculate and print the number of students who scored above a certain mark in a specific subject.

function scoredBelowCertainMark(certain_mark,specific_subject){
            let students=[]
          classObj.students.forEach((student)=>{
              student.marks.forEach((subject)=>{
                let current_subject=subject.subject.toLocaleLowerCase()
                 if(current_subject===specific_subject.toLocaleLowerCase()){
                     if(subject.mark<certain_mark){
                        students.push(student.name)
                     }
                 }
              })
          })
          return students.length
          
}

console.log(scoredBelowCertainMark(30,"English"))

module.exports=scoredBelowCertainMark