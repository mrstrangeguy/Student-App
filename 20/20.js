
let classObj=require('../classObj')

function findTotalMark(){
    let finalArray=[]
    let subjects={}
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
        finalArray.push({
            subject:subject,
            totalMark:totalMark
        })
    }
    return finalArray
}

console.log(findTotalMark())

module.exports=findTotalMark