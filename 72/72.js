let classObj=require('../classObj')

//function to find and print the subject(s) in which the majority of students scored below the class average marks

function majoritySubjects(){
    let subjects={}
    let majority=classObj.students[0].marks.length/2
    let finalArray=[]
    let classAverageMark=findAverage(classObj)
    for(let subject of classObj.students){
        for(let element of subject.marks){
            let subject=element.subject
            let mark=element.mark

            if(!subjects[subject]){
                 subjects[subject]={
                    belowAverageCount:0,
                    totalCount:0
                 }
            }
            if(mark<classAverageMark){
                subjects[subject].belowAverageCount++
            }
            subjects[subject].totalCount++
        }
    }

     for(let subject in subjects){
        if(subjects[subject].belowAverageCount>majority){
            finalArray.push({subject:subject,belowAverageCount:subjects[subject].belowAverageCount})
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

console.log(majoritySubjects())

module.exports=majoritySubjects