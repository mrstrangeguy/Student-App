let classObj=require('../classObj')

//93. function to find and print the subject(s) in which the majority of students scored above the average marks of the class.

function aboveAverageSubjects(){
    let majority=classObj.students.length/2
    let classAverageMark=findAverage(classObj)
    let subjects={}
    let finalArray=[]
    for(let student of classObj.students){
        for(let element of student.marks){
            let subject=element.subject
            let mark=element.mark
            
            if(!subjects[subject]){
                subjects[subject]={
                    aboveAverageCount:0,
                    totalCount:0
                }
            }
            if(mark>classAverageMark){
                subjects[subject].aboveAverageCount++
            }
            subjects[subject].totalCount++
        }
    }

    for(let subject in subjects){
        if(subjects[subject].aboveAverageCount>majority){
           finalArray.push({subject:subject})
        }
    }
    return finalArray
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

console.log(aboveAverageSubjects())

module.exports=aboveAverageSubjects