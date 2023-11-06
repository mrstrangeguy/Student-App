let classObj=require('../classObj')

// function to find and print the subject(s) in which the highest percentage of students scored above the average marks of a specific student.

function subjectsAboveStudent(specific_student){
      let  average=studentAverage(specific_student)
      let subjects={}
      let finalArray=[]
      for(let student of classObj.students){
        for(let element of student.marks){
            let subject=element.subject
            let mark=element.mark

            if(!subjects[subject]){
                subjects[subject]={
                    subject:subject,
                    aboveAverageCount:0,
                    totalCount:0
                }
            }
            if(mark>average){
                subjects[subject].aboveAverageCount++
            }

            subjects[subject].totalCount++
        }
      }
    let highestPercentage=-1
      for(let subject in subjects){
        let percentage=subjects[subject].aboveAverageCount/(subjects[subject].totalCount)*100
        if(percentage>highestPercentage){
            highestPercentage=percentage
            finalArray=[{subject:subject,percentage:percentage+"%"}]
        }
        else if(percentage===highestPercentage){
             finalArray.push({subject:subject,percentage:percentage+"%"})
        }
      }
      return finalArray
}

function studentAverage(specific_student){
    
    let num=0
    let total=0
     classObj.students.forEach((student)=>{
        if(student.name.toLocaleLowerCase()===specific_student.toLocaleLowerCase()){
            num=student.marks.length
            student.marks.forEach((subject)=>{
                total+=subject.mark
            })
        }
     })

     return total/num
}

console.log(subjectsAboveStudent("Mini SS"))

module.exports=subjectsAboveStudent