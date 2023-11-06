let classObj=require('../classObj')

//function to find and print the subject(s) in which the lowest percentage of students scored above a certain mark

function belowCertainPercentage(certain_mark){
       
    let subjects={}
    let finalArray=[]
    for(let student of classObj.students){
        for(let element of student.marks){
            let subject=element.subject
            let mark=element.mark
            let current_num=0
            if(mark<certain_mark){
                current_num=1
            }
            if(subjects[subject]){
                subjects[subject].count+=1
                subjects[subject].student_number+=current_num
            }
            else{
                subjects[subject]={
                    count:1,
                    student_number:current_num
                }
            }
        }
    }
     let current_percentage=-1
     for(let subject in subjects){
           let percentage=subjects[subject].student_number/(classObj.students.length)*100
           if(current_percentage===-1||percentage<current_percentage){
            current_percentage=percentage
              finalArray=[{subject:subject ,percentage:percentage+"%"}]
           }
           else if(current_percentage===percentage){
            finalArray.push({subject:subject ,percentage:percentage+"%"})
           }
          
     }    
    return finalArray
}

console.log(belowCertainPercentage(30))

module.exports=belowCertainPercentage

