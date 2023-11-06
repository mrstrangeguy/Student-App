let classObj=require('../classObj')

//function to find and print the student(s) who scored the highest marks in at least one subject.

function lowestMarks(){
    let finalArray=[]
    classObj.students.forEach((student)=>{
        let lowestMark=-1
        
        student.marks.forEach((subject)=>{
           
          if(lowestMark===-1||subject.mark<lowestMark){
            lowestMark=subject.mark
          }  
        })
        if(lowestMark>-1){
            finalArray.push({
                name:student.name,
                lowestMark:lowestMark
            })
        }
    })
    return finalArray
}

console.log(lowestMarks())

module.exports=lowestMarks

