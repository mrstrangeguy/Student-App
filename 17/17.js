let classObj=require('../classObj')
//function to calculate and print the overall average marks for the class

function overallAverageMark(){
     let finalTotal=0
     classObj.students.forEach((student)=>{
        let subject_total=0
       
        student.marks.forEach((subject)=>{
             subject_total+=subject.mark
        })
        
        finalTotal+=subject_total
     })
     return finalTotal/classObj.students.length
}

console.log(overallAverageMark())

module.exports=overallAverageMark