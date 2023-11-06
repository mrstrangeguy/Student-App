let classObj=require('../classObj')

function totalClassMark(){
    let finalTotal=0
    classObj.students.forEach((student)=>{
        let currentTotal=0
        student.marks.forEach((subject)=>{
        currentTotal+=subject.mark
        })
        finalTotal+=currentTotal
    })

    return finalTotal
}

console.log(totalClassMark())

module.exports=totalClassMark