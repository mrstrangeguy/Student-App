const function82=require('../82/82')

test('should return the subject(s) in which the highest percentage of students scored below the average marks of a specific student.', () => {
    expect(function82("Binu")).toStrictEqual([
        { subject: 'Physics', percentage: '100%' },
        { subject: 'Chemistry', percentage: '100%' }
      ])
})