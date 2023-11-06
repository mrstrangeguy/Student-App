let classObj=require('../classObj')
//find and print the student(s) with the highest total marks.
function highestTotalMarks(){
    let students=[]
    let highestTotalMark=0;
    let current_student;
    classObj.students.forEach((student)=>{
        let currentTotalMark=0;
        student.marks.forEach((subject)=>{
            currentTotalMark+=subject.mark
        })
        if(currentTotalMark>highestTotalMark){
            highestTotalMark=currentTotalMark
            current_student=student.name
            students=[{name:student.name,mark:currentTotalMark}]
        }
        else if(currentTotalMark===highestTotalMark){
           students.push({
            name:student.name,
            mark:currentTotalMark
           })
        }
    })
    return students
}

console.log(highestTotalMarks())

module.exports=highestTotalMarks