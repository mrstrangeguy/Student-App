const function86=require('../86/86')

test('should return ', () => {
    expect(function86()).toStrictEqual([
        { subject: 'English', percentage: '75%' },
        { subject: 'Maths', percentage: '0%' },
        { subject: 'Physics', percentage: '50%' },
        { subject: 'Chemistry', percentage: '75%' },
        { subject: 'Computer', percentage: '50%' }
      ])
})