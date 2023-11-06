let classObj=require('../classObj')

//function to find and print the subject(s) in which the average marks are above the average marks of a specific student

function aboveAverageMarks(specific_student){
    
    let subjects={}
    let averageMark=studentAverage(specific_student)
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
        if(average>averageMark){
            finalArray.push({subject:subject,average:average})
        }
    }
    console.log(averageMark)
    return finalArray
}
function studentAverage(specific_student){
    
    let num=0
    let total=0
     classObj.students.forEach((student)=>{
        if(student.name.toLocaleLowerCase()===specific_student.toLocaleLowerCase()){
            num=student.marks.length
            student.marks.forEach((subject)=>{
                total+=subject.mark
            })
        }
     })

     return total/num
}


console.log(aboveAverageMarks("Aju"))

module.exports=aboveAverageMarks