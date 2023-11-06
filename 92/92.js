let classObj=require('../classObj')

//function to find and print the student(s) who scored above the average marks of the class in the majority of subjects.



function lessThanClassAverage(){
    let majority=classObj.students[0].marks.length/2
    
    let students=[]
    let classAverageMark=findAverage(classObj)
    classObj.students.forEach((student)=>{
         let current_no=0
        student.marks.forEach((subject)=>{
          if(subject.mark<classAverageMark){
            current_no++
          }
        })
        if(current_no>majority){
            students.push(student.name)
        }
        
    })

    
    
    return students
}

function findAverage(classObj){
    let totalClassMark=0
    let totalSubjects=0
    
    classObj.students.forEach((student)=>{
        student.marks.forEach((subject)=>{
            totalClassMark+=subject.mark
            totalSubjects++
        })
    })

    let classAverageMark=totalClassMark/totalSubjects

    return classAverageMark
}

console.log(lessThanClassAverage())

module.exports=lessThanClassAverage