let classObj=require('../classObj')

//the student(s) who scored below the class average marks in the majority of subjects.

function majorityStudents(){
     let classAverageMark=findAverage(classObj)
     let majority=classObj.students[0].marks.length/2
     let students=[]
     classObj.students.forEach((student)=>{
        let aboveAverageCount=0
        student.marks.forEach((subject)=>{
          if(subject.mark>classAverageMark){
            aboveAverageCount++
          }
        })
        if(aboveAverageCount<majority){
            students.push(student.name)
        }
     })
    
     return students
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

console.log(majorityStudents())

module.exports=majorityStudents