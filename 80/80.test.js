const function80=require('../80/80')

test('should return the subject(s) in which the average marks are below the average marks of a specific student', () => {
    expect(function80("Ravi")).toStrictEqual([ { subject: 'English', average: 30.25 } ])
})