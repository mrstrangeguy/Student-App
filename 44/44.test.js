const function44=require('../44/44')

test('should return function to find and print the student(s) with the highest percentage of marks in a specific subject.', () => {
    expect(function44(47)).toStrictEqual([
        { subject: 'Physics', count: 4 },
        { subject: 'Chemistry', count: 4 }
      ])
    })