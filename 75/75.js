let classObj=require('../classObj')

//Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in at least one subject.

function aboveSpecificStudent(specific_student){
       let averageMark=studentAverage(specific_student)
       let student_no=0
       console.log(averageMark)
       classObj.students.forEach((student)=>{
         let flag=true
        student.marks.forEach((subject)=>{
             if(subject.mark>averageMark){
                flag=false
             }
        })
          if(!flag){
             student_no++
          }
       })

       let percentage=student_no/(classObj.students.length)*100

       return percentage+"%"
}


function studentAverage(specific_student){
    
    let num=0
    let total=0
     classObj.students.forEach((student)=>{
        if(student.name.toLocaleLowerCase()===specific_student.toLocaleLowerCase()){
            num=student.marks.length
            student.marks.forEach((subject)=>{
                total+=subject.mark
            })
        }
     })

     return total/num
}

console.log(aboveSpecificStudent("Aju"))

module.exports=aboveSpecificStudent