let classObj=require('../classObj')

// function to calculate and print the percentage of students who scored above the average marks of a specific student in each subject.

function aboveSpecificStudent(specific_student){
      let averageMark=studentAverage(specific_student)
      console.log(averageMark)
 
      let subjects={}
      let finalArray=[]
      for(let student of classObj.students){
        for(let element of student.marks){
            let subject=element.subject
            let mark=element.mark

            if(!subjects[subject]){
                subjects[subject]={
                    aboveAverageCount:0,
                    totalCount:0
                }
            }
            if(mark>averageMark){
                subjects[subject].aboveAverageCount++
            }
            subjects[subject].totalCount++
        }
      }

      

      for(let subject in subjects){
        let percentage=subjects[subject].aboveAverageCount/(subjects[subject].totalCount)*100
        finalArray.push({subject:subject,percentage:percentage+"%"})
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

console.log(aboveSpecificStudent("Aju"))

module.exports=aboveSpecificStudent