//function to calculate and print the average marks for all students in a specific subject.
let classObj=require('../classObj')

function averageMarkofSubject(subject){

    let new_subject=subject.toLowerCase()
     let marks=[]
     let sum=0
     let num=0
     if(new_subject){
     classObj.students.forEach((student)=>{
      student.marks.forEach((subject)=>{
            if(new_subject===subject.subject.toLocaleLowerCase()){
                marks.push(subject)
            }
        })
     })
     marks.forEach((subject)=>{
        sum=sum+parseInt(subject.mark)
        num=parseInt(num)+1
     })
     return "Average "+sum/num
    }
    else{
        return "Such subject is not existing"
    }
    
}

console.log(averageMarkofSubject("Maths"))

module.exports=averageMarkofSubject