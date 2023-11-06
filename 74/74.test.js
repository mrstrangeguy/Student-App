const function74=require('../74/74')

test('should return student(s) who scored below the class average marks in the majority of subjects', () => {
    expect(function74("Aju")).toStrictEqual([
        { subject: 'English', percentage: '50%' },
        { subject: 'Maths', percentage: '0%' },
        { subject: 'Physics', percentage: '50%' },
        { subject: 'Chemistry', percentage: '50%' },
        { subject: 'Computer', percentage: '50%' }
      ])
})