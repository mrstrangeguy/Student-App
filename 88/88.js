let classObj=require('../classObj')

//function to calculate and print the percentage of students who scored above the average marks of the class in at least one subject.

function atLeastOneSubject(){
    let student_no=0
    let classAverageMark=findAverage(classObj)
    classObj.students.forEach((student)=>{
        let flag=true
        student.marks.forEach((subject)=>{
           if(subject.mark<classAverageMark){
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

console.log(atLeastOneSubject())

module.exports=atLeastOneSubject