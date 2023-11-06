let classObj=require('../classObj')


function averageSubjectMark(){
    let subjects={}
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
        let totalMark=subjects[subject].total
        let totalCount=subjects[subject].count
        let averageMark=totalMark/totalCount
        finalArray.push({
            subject:subject,
            averageMark:averageMark
        })
    }

    return finalArray
}

console.log(averageSubjectMark())

module.exports=averageSubjectMark