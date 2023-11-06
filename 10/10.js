let classObj=require('../classObj')

//10. function to calculate and print the total marks for all students in a specific subject.

function sumofSubject(subject){

    let new_subject=subject.toLowerCase()
     let marks=[]
     let sum=0
     
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
       
     })
     return "Sum "+sum
    }
    else{
        return "Such subject is not existing"
    }
    
}

console.log(sumofSubject("Computer"))

module.exports=sumofSubject