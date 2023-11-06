let classObj=require('../classObj')

//function to find and print the student(s) who scored the lowest marks in each subject

function lowestMarkEachSubject(){

    let subjects={}
   
    for(let student of classObj.students){
        for(let element of student.marks){
            let subject=element.subject
            let mark=element.mark

            if(!subjects[subject] || mark<subjects[subject].mark){
                subjects[subject]={
                    name:student.name,
                    subject:subject,
                    mark:mark
                }
            }
        }
    }

    return subjects
}

console.log(lowestMarkEachSubject())

module.exports=lowestMarkEachSubject