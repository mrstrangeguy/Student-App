let classObj=require('../classObj')

// function to find and print the subject(s) in which the highest marks were scored

function lowestMarkSubject(){
    let subjects={}
    let lowestMark=-1
    let lowestScoredSubjects=[]
    for(let student of classObj.students){
        for(let element of student.marks){
            let subject=element.subject
            let mark=element.mark

            if(!subjects[subject] || mark<subjects[subject].mark){
                subjects[subject]={
                    mark:mark
                }
            }
        }
    }
     for(let subject in subjects){
        if(lowestMark===-1||subjects[subject].mark<lowestMark){
            lowestMark=subjects[subject].mark
            lowestScoredSubjects=[{subject:subject,mark:lowestMark}]
        }
        else if(subjects[subject].mark===lowestMark){
            lowestScoredSubjects.push({subject:subject,mark:lowestMark})
        }
        
     }


    return lowestScoredSubjects
}

console.log(lowestMarkSubject())

module.exports=lowestMarkSubject
