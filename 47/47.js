let classObj=require('../classObj')

//function to find and print the student(s) who scored the highest marks in at least one subject.

function highestMark(){
    let finalArray=[]
    classObj.students.forEach((student)=>{
        let highestMark=-1
        
        student.marks.forEach((subject)=>{
          if(subject.mark>highestMark){
            highestMark=subject.mark
          }  
        })
        if(highestMark>-1){
            finalArray.push({
                name:student.name,
                highestMark:highestMark
            })
        }
    })
    return finalArray
}

console.log(highestMark())

module.exports=highestMark

