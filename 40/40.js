let classObj=require('../classObj')

//function to find and print the student(s) with the lowest percentage of marks in a specific subject.

function lowestPercentageStudent(specific_subject){
        let lowestPercentage=-1
        let lowestPercentageStudents=[]
       classObj.students.forEach((student)=>{
        student.marks.forEach((subject)=>{

            let currrent_subject=subject.subject.toLocaleLowerCase()
            if(currrent_subject===specific_subject.toLocaleLowerCase()){
                let percentage=(subject.mark/50)*100
                if(lowestPercentage===-1||percentage<lowestPercentage){
                    lowestPercentage=percentage
                    lowestPercentageStudents=[{name:student.name,subject:subject.subject,percentage:percentage+"%"}]
                }
                else if(lowestPercentage===percentage){
                    lowestPercentageStudents.push({
                        name:student.name,
                        subject:subject.subject,
                        percentage:percentage
                    })
                }
            }
        })
       })
       return lowestPercentageStudents
}

console.log(lowestPercentageStudent("Physics"))

module.exports=lowestPercentageStudent