let classObj=require('../classObj')

//21. function to find and print the subject with the lowest total marks.

function lowestTotalMarks(){

    let subjects={}
    let finalTotal=0
    let current_subject;
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
   

    for(let elem in subjects){
        
        if(finalTotal===0){
            finalTotal=subjects[elem].total
            current_subject=elem
        }
        else if(finalTotal<elem.total){
            finalTotal=subjects[elem].total
            current_subject=elem
        }
    }
    return current_subject
}

console.log(lowestTotalMarks())

module.exports=lowestTotalMarks