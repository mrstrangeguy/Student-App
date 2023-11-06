let classObj=require('../classObj')

//function to find and print the subject(s) in which the average marks of all students are above a certain mark.

function averageMark(certain_mark){
      let subjects={}
      let finalArray=[]
      classObj.students.forEach((student)=>{
        student.marks.forEach((element)=>{
            let subject=element.subject
            let mark=element.mark
            if(subjects[subject]){
                subjects[subject].total+=mark
                subjects[subject].count+=1
            }
            else{
                subjects[subject]={
                    total:mark,
                    count:1
                }
            }
        })
      })

      for(let subject in subjects){
        let averageMark=subjects[subject].total/subjects[subject].count
        if(averageMark>certain_mark){
           finalArray.push({subject:subject,averageMark:averageMark})
        }
      }
      return finalArray
}

console.log(averageMark(40))

module.exports=averageMark