let classObj=require('../classObj')

function lowestAverage(){
     let finalAverage=0;
     let current_student;
     classObj.students[0].marks.forEach((sub)=>{
        finalAverage+=parseInt(sub.mark)/classObj.students[0].marks.length
     })
     console.log("final average "+finalAverage)
    classObj.students.forEach((student)=>{
        let currentHighest=0;
        let currentAverage=0;
        let n=0;
        student.marks.forEach((subject)=>{
            currentHighest+=parseInt(subject.mark)
            n=n+1
        })
        currentAverage=currentHighest/n
        if(currentAverage<finalAverage){
            finalAverage=currentAverage
            current_student=student.name
        }
    })

    return current_student
}

console.log(lowestAverage())

module.exports=lowestAverage
