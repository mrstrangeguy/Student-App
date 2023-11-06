let classObj=require('../classObj')

// function to find and print the student(s) who scored above the class average marks in all subjects.

function allAboveAverage(){
    let students=[]
      let classAverageMark=findAverage(classObj)
      classObj.students.forEach((student)=>{
        let flag=true
        student.marks.forEach((subject)=>{
            if(subject.mark<classAverageMark){
                flag=false
            }
        })
        if(flag){
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

console.log(allAboveAverage())

module.exports=allAboveAverage