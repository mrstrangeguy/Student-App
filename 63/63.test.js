const function63=require('../63/63')

test('should return the percentage of students who scored above the class average marks in each subject.', () => {
    expect(function63(30)).toStrictEqual([
        { subject: 'English', percentage: '25%' },
        { subject: 'Maths', percentage: '100%' },
        { subject: 'Physics', percentage: '50%' },
        { subject: 'Chemistry', percentage: '25%' },
        { subject: 'Computer', percentage: '50%' }
      ])
})