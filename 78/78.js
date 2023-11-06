let classObj=require('../classObj')

//  function to find and print the student(s) who scored below the average marks of a specific student in all subjects.


function belowAllSubjects(specific_student){
    let finalArray=[]
    let averageMark=studentAverage(specific_student)
    console.log(averageMark)
     classObj.students.forEach((student)=>{
        let flag=true
        
        student.marks.forEach((subject)=>{
            if(subject.mark>averageMark){
                flag=false
            }
           
        })
        if(flag){
           finalArray.push({student:student.name})
        }
     })

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


console.log(belowAllSubjects("Binu"))

module.exports=belowAllSubjects