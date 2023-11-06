let classObj=require('../classObj')

//function to find and print the student(s) who scored below the class average marks.

function lessThanClassAverage(){
   
    let classAverageMark=findAverage(classObj)
    let students=[]
    classObj.students.forEach((student)=>{
        let current_total=0
        student.marks.forEach((subject)=>{
            current_total+=subject.mark
            
        })
        if(current_total<classAverageMark){
              students.push(student.name)
        }
    
    })

   return students
}

console.log(lessThanClassAverage())

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

module.exports=lessThanClassAverage