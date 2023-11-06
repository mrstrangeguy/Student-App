
let classObj=require('../classObj')
//function to calculate and print the total marks for a specific student.

function totalMark(student_name){
    let name=student_name.toLowerCase()
    let current_student=classObj.students.find((student)=>{
            return name===student.name.toLocaleLowerCase()
    })
    if(current_student){
        let sum=0
        
        current_student.marks.forEach((subject)=>{
            sum=sum+parseInt(subject.mark)
           
        })
        return "Total Mark "+sum
    }
    else{
        return "No such student is found in the directory"
    }

}
console.log(totalMark("Aju"))

module.exports=totalMark