let classObj=require('../classObj')

//function to find and print the student(s) with the lowest percentage of marks.

function lowestPercentageMarks(){
    let lowestPercentage=-1
    let students=[]
    classObj.students.forEach((student)=>{
        let current_total=0;
        let totalMarks=student.marks.length*50
        student.marks.forEach((subject)=>{
            current_total+=subject.mark
        })
        let percent=current_total/totalMarks*100
        let percentage=percent.toFixed(2)
        if(lowestPercentage===-1){
            lowestPercentage=percentage
            students=[{student:student.name,percentage:percentage+"%"}]
        }
        else if(percentage<lowestPercentage){
             lowestPercentage=percentage
             students=[{student:student.name,percentage:percentage+"%"}]
        }
        else if(percentage===lowestPercentage){
            students.push({
                student:student.name,
                percentage:percentage+"%"
            })
        }

    })
    return students
}

console.log(lowestPercentageMarks())

module.exports=lowestPercentageMarks