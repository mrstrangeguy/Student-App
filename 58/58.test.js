const function58=require('../58/58')

test('should return function to find and print the subject(s) in which the average marks are below the class average marks.', () => {
    expect(function58()).toStrictEqual([
        { subject: 'English', averageMark: 30.25 },
        { subject: 'Physics', averageMark: 34.5 },
        { subject: 'Chemistry', averageMark: 35 },
        { subject: 'Computer', averageMark: 35 }
      ])
})