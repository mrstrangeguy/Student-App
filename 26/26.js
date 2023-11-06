let classObj=require('../classObj')

//function to find and print the student(s) with the lowest total marks.
function lowestTotalMarks(){
    let students=[]
    let grandTotal=-1
classObj.students.forEach((student)=>{
    let currentTotal=0;
    student.marks.forEach((subject)=>{
        currentTotal+=subject.mark
    })
    if(grandTotal===-1){
        grandTotal=currentTotal
        students=[{name:student.name,mark:currentTotal}]
    }
    else if(currentTotal<grandTotal){
        grandTotal=currentTotal
        students=[{name:student.name,mark:currentTotal}]
    }
    else if(currentTotal===grandTotal){
        students.push({
            name:student.name,
            mark:currentTotal
        })
    }
})
     return students
}

console.log(lowestTotalMarks())

module.exports=lowestTotalMarks
