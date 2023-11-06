const function62=require('../62/62')

test('should return the subject(s) in which the lowest percentage of students scored below a certain mark.', () => {
    expect(function62(30)).toStrictEqual([
        { subject: 'Maths', percentage: '0%' },
        { subject: 'Chemistry', percentage: '0%' }
      ])
})