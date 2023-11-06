let classObj=require('../classObj')

// function to find and print the subject(s) in which all students scored below a certain mark.
function allScoredSubject(certain_mark){
    let subjects={}
    let finalArray=[]
    for(let student of classObj.students){
        for(let element of student.marks){
            let subject=element.subject
            let mark=element.mark

            if(subjects[subject]){
                if(mark<=certain_mark){
                    subjects[subject].count+=1
                }
            }
            else{
                if(mark<=certain_mark){
                subjects[subject]={
                    
                    count:1
                }
               }
            }
        }
    }

    for(let subject in subjects){
        if(subjects[subject].count===classObj.students.length){
           finalArray.push({subject:subject,count:subjects[subject].count})
        }
    }
    console.log(subjects)
    return finalArray
}

console.log(allScoredSubject(47))

module.exports=allScoredSubject

