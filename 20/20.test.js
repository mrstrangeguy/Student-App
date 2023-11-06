const function20=require('../20/20')

test('should return total mark of every subject', () => {
    expect(function20()).toStrictEqual(
        [
            { subject: 'English', totalMark: 121 },
            { subject: 'Maths', totalMark: 184 },
            { subject: 'Physics', totalMark: 138 },
            { subject: 'Chemistry', totalMark: 140 },
            { subject: 'Computer', totalMark: 140 }
          ]
    )
 })