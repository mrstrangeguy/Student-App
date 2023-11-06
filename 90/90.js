let classObj=require('../classObj')

// function to find and print the student(s) who scored above the average marks of the class in all subjects.

function allSubjectsBelow(){
      let classAverageMark=findAverage(classObj)
      let student_no=0
      classObj.students.forEach((student)=>{
        let flag=true
        student.marks.forEach((subject)=>{
            if(subject.mark>classAverageMark){
                flag=false
            }
        })
        if(flag){
            student_no++
        }
      })

      let percentage=student_no/(classObj.students.length)*100

      return percentage+"%"
}

function findAverage(classObj){
    let totalClassMark=0
    let totalSubjects=0
    
    classObj.students.forEach((student)=>{
        student.marks.forEach((subject)=>{
            totalClassMark+=subject.mark
            totalSubjects++
        })
    })

    let classAverageMark=totalClassMark/totalSubjects

    return classAverageMark
}

console.log(allSubjectsBelow())

module.exports=allSubjectsBelow
