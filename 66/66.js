
let classObj=require('../classObj')

//Write a function to calculate and print the percentage of students who scored below the class average marks in at least one subject

function atLeastOneBelowAverage(){
    let students=[]
    let classAverageMark=findAverage(classObj)
    classObj.students.forEach((student)=>{
        let flag=true
        student.marks.forEach((subject)=>{
           if(subject.mark<classAverageMark){
            flag=false
           }
        })
        if(!flag){
            students.push(student.name)
        }
    })
    let percentage=students.length/(classObj.students.length)*100
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

console.log(atLeastOneBelowAverage())

module.exports=atLeastOneBelowAverage