let classObj=require('../classObj')

//function to find and print the subject(s) with the lowest percentage of marks.

function lowestPercentageSubjects(){
    let subjects={}
    let subjectPercentages=[]
    let lowestPercentage=-1
    for(let student of classObj.students){
        for(let element of student.marks){
            let mark=element.mark
            let subject=element.subject
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
        
        let currentPercentage=subjects[subject].total/(subjects[subject].count*50)*100
        if(lowestPercentage===-1||currentPercentage<lowestPercentage){
             lowestPercentage=currentPercentage
              subjectPercentages=[{name:subject,percentage:currentPercentage+"%"}]
        }
        else if(lowestPercentage===currentPercentage){
              subjectPercentages.push({
                name:subject,
                percentage:currentPercentage+"%"
              })
        }

    }

    return subjectPercentages
}

console.log(lowestPercentageSubjects())

module.exports=lowestPercentageSubjects
