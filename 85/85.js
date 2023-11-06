let classObj=require('../classObj')

//function to calculate and print the percentage of students who scored above the average marks of the class in each subject.

function aboveAverageMarks(){
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
        let percentage=subjects[subject].aboveAverageCount/(subjects[subject].totalCount)*100
        finalArray.push({subject:subject,percentage:percentage+"%"})
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

console.log(aboveAverageMarks())
module.exports=aboveAverageMarks