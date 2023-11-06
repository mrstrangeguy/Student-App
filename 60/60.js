
let classObj=require('../classObj')

//Write a function to find and print the subject(s) in which the highest percentage of students scored above a certain mark.

function lowestPercentageStudents(certain_mark){

    let subjects={}
    let finalArray=[]
    for(let student of classObj.students){
        for(let element of student.marks){
            let subject=element.subject
            let mark=element.mark
            let current_num=0
            if(mark>certain_mark){
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
    let subject_percentge=-1
    for(let subject in subjects){
        let percentage=subjects[subject].student_number/(classObj.students.length)*100
        if(subject_percentge===-1||percentage<subject_percentge){
            subject_percentge=percentage
            finalArray=[{subject:subject,percentage:percentage+"%"}]
        }
        else if(percentage===subject_percentge){
            finalArray.push({subject:subject,percentage:percentage+"%"})
        }
    }
    console.log(subjects)
    return finalArray
}

console.log(lowestPercentageStudents(30))

module.exports=lowestPercentageStudents