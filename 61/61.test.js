const function61=require('../61/61')

test('should return the subject(s) in which the lowest percentage of students scored above a certain mark.', () => {
    expect(function61(30)).toStrictEqual([
        { subject: 'English', percentage: '50%' },
        { subject: 'Chemistry', percentage: '50%' },
        { subject: 'Computer', percentage: '50%' }
      ])
})