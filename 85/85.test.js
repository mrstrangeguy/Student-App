const function85=require('../85/85')

test('should return ', () => {
    expect(function85()).toStrictEqual([
        { subject: 'English', percentage: '25%' },
        { subject: 'Maths', percentage: '100%' },
        { subject: 'Physics', percentage: '50%' },
        { subject: 'Chemistry', percentage: '25%' },
        { subject: 'Computer', percentage: '50%' }
      ])
})