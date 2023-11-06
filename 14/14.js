let classObj=require('../classObj')

function lowestTotalMark(){
    let finalTotal=0;
    let current_student;
    classObj.students[0].marks.forEach((subject)=>{
            finalTotal+=parseInt(subject.mark)
    })
    
    classObj.students.forEach((student)=>{
        let current_total=0;
        student.marks.forEach((subject)=>{
            current_total+=parseInt(subject.mark)
        })
        if(current_total<=finalTotal){
            finalTotal=current_total
            current_student=student.name
        }
    })
    return current_student;
}

console.log(lowestTotalMark())

module.exports=lowestTotalMark