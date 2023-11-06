let classObj=require('../classObj')

// function to find and print the student(s) with the highest average marks.

function highestAverageMarks(){
      let highestAverageStudents=[]
      let highestAverage=-1
      classObj.students.forEach((student)=>{
        let current_total=0
        let currentAverage;
        student.marks.forEach((subject)=>{
           current_total+=subject.mark
        })
        currentAverage=current_total/student.marks.length
        if(currentAverage>highestAverage){
            highestAverage=currentAverage
            highestAverageStudents=[{student:student.name,average:currentAverage}]
        }
        else if(currentAverage===highestAverage){
            highestAverageStudents.push({
                student:student.name,
                average:currentAverage
            })
        }
      })
     return highestAverageStudents
}

highestAverageMarks()

module.exports=highestAverageMarks