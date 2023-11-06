const function46=require('../46/46')

test('should return  function to find and print the subject(s) in which the average marks of all students are below a certain mark.', () => {
    expect(function46(35)).toStrictEqual([
        { subject: 'English', averageMark: 30.25 },
        { subject: 'Physics', averageMark: 34.5 }
      ])
})