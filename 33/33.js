let classObj=require('../classObj')

//function to calculate and print the percentage of students who scored above a certain mark in all subjects

function scoredAboveAllPercentage(certain_mark){
    
     let students=[]
     
    classObj.students.forEach((student)=>{
        let flag=true
        student.marks.forEach((subject)=>{
              if(subject.mark<certain_mark){
                 flag=false
              }    
        })
        if(flag){
            students.push({
                name:student.name             
            })
          }
        })
    return students.length/classObj.students.length*100+"%"
}

console.log(scoredAboveAllPercentage(20))
module.exports=scoredAboveAllPercentage