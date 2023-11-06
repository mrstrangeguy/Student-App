const function81=require('../81/81')

test('should return the subject(s) in which the highest percentage of students scored above the average marks of a specific student.', () => {
    expect(function81("Mini SS")).toStrictEqual([
        { subject: 'Maths', percentage: '100%' },
        { subject: 'Chemistry', percentage: '100%' }
      ])
})