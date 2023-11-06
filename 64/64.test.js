const function64=require('../64/64')

test('should return the percentage of students who scored below the class average marks in each subject.', () => {
    expect(function64(30)).toStrictEqual([
        { subject: 'English', percentage: '75%' },
        { subject: 'Maths', percentage: '0%' },
        { subject: 'Physics', percentage: '50%' },
        { subject: 'Chemistry', percentage: '75%' },
        { subject: 'Computer', percentage: '50%' }
      ])
})