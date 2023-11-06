
let classObj=require('../classObj')

// function to find and print the subject(s) with the lowest percentage of marks for a specific student.

function lowestPercentageSubject(specific_student){
    let lowestPercentage=-1
     let lowestPercentageSubjects=[]
     
      classObj.students.forEach((student)=>{
        let current_student=specific_student.toLowerCase()
        if(current_student===student.name.toLocaleLowerCase()){
            
        student.marks.forEach((subject)=>{
            let percentage=(subject.mark/50)*100

            if(lowestPercentage===-1||percentage<lowestPercentage){
                lowestPercentage=percentage
                lowestPercentageSubjects=[{name:student.name,subject:subject.subject,percentage:percentage+"%"}]
            }
            else if(percentage===lowestPercentage){
                lowestPercentageSubjects.push({name:student.name,subject:subject.subject,percentage:percentage+"%"})
            }
        })
    }
      })

      return lowestPercentageSubjects
}

console.log(lowestPercentageSubject("Aju"))

module.exports=lowestPercentageSubject