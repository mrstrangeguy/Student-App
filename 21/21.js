let classObj=require('../classObj')

//21. function to find and print the subject with the highest total marks.

function highestTotalMarks(){
    let subjects={}
    let grandTotal=0
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
  
    
    for(let subject in subjects){
          if(subjects[subject].total>grandTotal){
            grandTotal=subjects[subject].total
            current_subject=subject
          }
    }
   return current_subject
}

console.log(highestTotalMarks())

module.exports=highestTotalMarks
