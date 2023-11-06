let classObj=require('../classObj')

//function to calculate and print the percentage of students who scored above the average marks of a specific student in the majority of subjects.

function aboveAverage(specific_student){
    let average=studentAverage(specific_student)
    let majority=classObj.students[0].marks.length/2
    let students=0
    classObj.students.forEach((student)=>{
         let student_no=0
        student.marks.forEach((subject)=>{
          if(subject.mark>average){
            student_no++
          }
        })
        if(student_no>majority){
          students++
        }
    })
    let percentage=students/(classObj.students.length)*100
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

console.log(aboveAverage("Aju"))

module.exports=aboveAverage