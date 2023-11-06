let classObj=require('../classObj')

//  function to find and print the student(s) who scored above the average marks of a specific student in all subjects.


function aboveAllSubjects(specific_student){
    let finalArray=[]
    let averageMark=studentAverage(specific_student)
    console.log(averageMark)
     classObj.students.forEach((student)=>{
        let flag=true
        
        student.marks.forEach((subject)=>{
            if(subject.mark<averageMark){
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


console.log(aboveAllSubjects("Mini SS"))

module.exports=aboveAllSubjects