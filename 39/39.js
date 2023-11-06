let classObj=require('../classObj')

//function to find and print the student(s) with the highest percentage of marks in a specific subject.

function highestPercentageStudent(specific_subject){
    let highestPercentage=-1
    let highestPercentageStudents=[]
    classObj.students.forEach((student)=>{
        student.marks.forEach((subject)=>{
            let currrent_subject=subject.subject.toLocaleLowerCase()
            if(currrent_subject===specific_subject.toLocaleLowerCase()){
                let percentage=(subject.mark/50)*100
                if(percentage>highestPercentage){
                    highestPercentage=percentage
                    highestPercentageStudents=[{name:student.name,subject:subject.subject,percentage:percentage+"%"}]
                }
                else if(percentage===highestPercentage){
                    highestPercentageStudents.push({
                        name:student.name,
                        subject:subject.subject,
                        percentage:percentage
                    })
                }
            }
        })
    })
    return highestPercentageStudents
}

console.log(highestPercentageStudent("English"))

module.exports=highestPercentageStudent