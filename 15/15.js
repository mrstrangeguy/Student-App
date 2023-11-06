let classObj=require('../classObj')

function highestAverage(){
    let finalAverage=0
    let current_student;
    classObj.students.forEach((student)=>{
        let currentHighest=0;
        let currentAverage=0;
        let num=0;
       
        student.marks.forEach((subject)=>{
           currentHighest+=parseInt(subject.mark)
           num=num+1
        })
        currentAverage=currentHighest/num
        if(currentAverage>finalAverage){
            finalAverage=currentAverage
            current_student=student.name
        }
    })
    return current_student
}

module.exports=highestAverage


console.log(highestAverage())
