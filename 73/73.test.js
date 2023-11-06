const function73=require('../73/73')

test('should return student(s) who scored above the class average marks in the majority of subjects', () => {
    expect(function73("Aju")).toStrictEqual([
        { subject: 'English', percentage: '50%' },
        { subject: 'Maths', percentage: '100%' },
        { subject: 'Physics', percentage: '50%' },
        { subject: 'Chemistry', percentage: '25%' },
        { subject: 'Computer', percentage: '50%' }
      ])
})