
let classObj=require('../classObj')

// function to calculate and print the average marks for each student in each subject

function averageEachStudent(){
      let finalArray=[]
    classObj.students.forEach((student)=>{
        let current_total=0
        student.marks.forEach((subject)=>{
             current_total+=subject.mark
        })
        let current_Average=current_total/student.marks.length
        finalArray.push({
            name:student.name,
            avearge:current_Average
        })
    })
    return finalArray
}

console.log(averageEachStudent())

module.exports=averageEachStudent