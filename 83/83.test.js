const function83=require('../83/83')

test('should return the function to find and print the subject(s) in which the lowest percentage of students scored above the average marks of a specific student.', () => {
    expect(function83("Binu")).toStrictEqual([
        { subject: 'Physics', percentage: '0%' },
        { subject: 'Chemistry', percentage: '0%' }
      ])
})