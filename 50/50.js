let classObj=require('../classObj')

// function to calculate and print the average marks for each student in each subject

function totalEachStudent(){
      let finalArray=[]
    classObj.students.forEach((student)=>{
        let current_total=0
        student.marks.forEach((subject)=>{
             current_total+=subject.mark
        })
        
        finalArray.push({
            name:student.name,
            total:current_total
        })
    })
    return finalArray
}

console.log(totalEachStudent())

module.exports=totalEachStudent