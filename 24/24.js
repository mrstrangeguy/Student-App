let classObj=require('../classObj')

// function to find and print the student(s) with the lowest average marks.

function lowestAverageMarks(){
    
    let lowestAverageStudents=[]
    let lowestAverage=-1;

     classObj.students.forEach((student)=>{
        let current_total=0
        let currentAverage;
        student.marks.forEach((subject)=>{
            current_total+=subject.mark
        })
        currentAverage=current_total/student.marks.length
        if(lowestAverage===-1){
            lowestAverage=currentAverage
            lowestAverageStudents=[{student:student.name,average:currentAverage}]
        }
        else if(currentAverage<lowestAverage){
             lowestAverage=currentAverage
             lowestAverageStudents=[{student:student.name,average:currentAverage}]
        }
        else if(currentAverage===lowestAverage){
            lowestAverageStudents.push({
                student:student.name,
                average:currentAverage
            })
        }
    
     })
  
    return lowestAverageStudents
    
}

console.log(lowestAverageMarks())

module.exports=lowestAverageMarks