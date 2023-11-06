let classObj=require('../classObj')

//function to find and print the subject(s) with the highest percentage of marks for a specific student.

function highestPercentageSubject(specific_student){
    let highestPercentage=-1
     let highestPercentageSubjects=[]
     
      classObj.students.forEach((student)=>{
        let current_student=specific_student.toLowerCase()
        if(current_student===student.name.toLocaleLowerCase()){
            console.log(current_student)
        student.marks.forEach((subject)=>{
            let percentage=(subject.mark/50)*100
            if(percentage>highestPercentage){
                highestPercentage=percentage
                highestPercentageSubjects=[{name:student.name,subject:subject.subject,percentage:percentage+"%"}]
            }
            else if(percentage===highestPercentage){
                highestPercentageSubjects.push({name:student.name,subject:subject.subject,percentage:percentage+"%"})
            }
        })
    }
      })

      return highestPercentageSubjects
}

console.log(highestPercentageSubject("Ravi"))

module.exports=highestPercentageSubject