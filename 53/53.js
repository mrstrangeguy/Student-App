let classObj=require('../classObj')

// function to find and print the subject(s) in which the highest marks were scored

function highestMarkSubject(){
    let subjects={}
    let highestMark=-1
    let highestScoredSubjects=[]
    for(let student of classObj.students){
        for(let element of student.marks){
            let subject=element.subject
            let mark=element.mark

            if(!subjects[subject] || mark>subjects[subject].mark){
                subjects[subject]={
                    mark:mark
                }
            }
        }
    }
     for(let subject in subjects){
        if(subjects[subject].mark>highestMark){
            highestMark=subjects[subject].mark
            highestScoredSubjects=[{subject:subject,mark:highestMark}]
        }
        else if(subjects[subject].mark===highestMark){
            highestScoredSubjects.push({subject:subject,mark:highestMark})
        }
        
     }


    return highestScoredSubjects
}

console.log(highestMarkSubject())

module.exports=highestMarkSubject
