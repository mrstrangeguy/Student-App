const function79=require('../79/79')

test('should return the subject(s) in which the average marks are above the average marks of a specific student', () => {
    expect(function79("Aju")).toStrictEqual([
        { subject: 'Maths', average: 46 },
        { subject: 'Physics', average: 34.5 },
        { subject: 'Chemistry', average: 35 },
        { subject: 'Computer', average: 35 }
      ])
})