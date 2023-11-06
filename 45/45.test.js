const function45=require('../45/45')

test('should return  function to find and print the subject(s) in which the average marks of all students are above a certain mark.', () => {
    expect(function45(40)).toStrictEqual([ { subject: 'Maths', averageMark: 46 } ])
})