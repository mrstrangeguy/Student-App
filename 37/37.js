let classObj=require('../classObj')

//function to find and print the subject(s) with the highest percentage of marks.

function highestPercentageSubjects(){

       let subjects={}
       let subjectPercentages=[]
       let HighestPercentage=-1;
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
          
          let currentPercentage=subjects[subject].total/(subjects[subject].count*50)*100
           if(currentPercentage>HighestPercentage){
            HighestPercentage=currentPercentage
            subjectPercentages=[{name:subject,percentage:currentPercentage}]
           }
           else if(currentPercentage===HighestPercentage){
              subjectPercentages.push({name:subject.name,percentage:currentPercentage})
           }
       }

       return subjectPercentages
}
console.log(highestPercentageSubjects())

module.exports=highestPercentageSubjects

