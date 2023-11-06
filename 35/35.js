let classObj=require('../classObj')

//35. function to find and print the student(s) with the highest percentage of marks.


function highestPercentageMarks(){
    let higherstPercentage=-1
    let students=[]
    classObj.students.forEach((student)=>{
        let current_total=0
        let totalMarks=student.marks.length*50
        student.marks.forEach((subject)=>{
         current_total+=subject.mark
        })
        let percent=current_total/totalMarks*100
        let percentage=percent.toFixed(2)
        if(percentage>higherstPercentage){
            higherstPercentage=percentage
            students=[{name:student.name,percentage:percentage+"%"}]
        }
        else if(percentage===higherstPercentage){
            students.push({name:student.name,percentage:percentage+"%"})
        }
    })
    return students
}
console.log(highestPercentageMarks())

module.exports=highestPercentageMarks