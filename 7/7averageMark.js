let classObj=require('../classObj')
//function to calculate and print the average marks for a specific student.

function averageMark(student_name){
    let name=student_name.toLowerCase()
    let current_student=classObj.students.find((student)=>{
            return name===student.name.toLocaleLowerCase()
    })
    if(current_student){
        let sum=0
        let num=0
        current_student.marks.forEach((subject)=>{
            sum=sum+parseInt(subject.mark)
            num=num+1
        })
        return "Average "+sum/num
    }
    else{
        return "No such student is found in the directory"
    }

}
console.log(averageMark("Aju"))

module.exports=averageMark