let classObj=require('../classObj')

//function to find and print the subject(s) in which the average marks are above the class average marks.

function belowClassAverage(){
    let subjects={}
    let classAverageMark=findAverage(classObj)
    let finalArray=[]
    for(let student of classObj.students){
        for(let element of student.marks){
            let subject=element.subject
            let mark=element.mark

            if(subjects[subject]){
                subjects[subject].total+=mark
                subjects[subject].count+=1
            }
            else{
                subjects[subject]={
                    total:mark,
                    count:1
                }
            }
        }
    }
    for(let subject in subjects){
        let average=subjects[subject].total/subjects[subject].count
        if(average<classAverageMark){
           finalArray.push({subject:subject,averageMark:average})
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

console.log(belowClassAverage())

module.exports=belowClassAverage