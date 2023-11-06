const function60=require('../60/60')

test('should return the subject(s) in which the average marks are below the class average marks.', () => {
    expect(function60(30)).toStrictEqual([
        { subject: 'English', percentage: '50%' },
        { subject: 'Chemistry', percentage: '50%' },
        { subject: 'Computer', percentage: '50%' }
      ])
})