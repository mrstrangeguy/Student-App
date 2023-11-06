const function84=require('../84/84')

test('should return the function to find and print the subject(s) in which the lowest percentage of students scored below the average marks of a specific student.', () => {
    expect(function84("Binu")).toStrictEqual([ { subject: 'Maths', percentage: '50%' } ])
})