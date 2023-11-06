const function43=require('../43/43')

test('should return function to find and print the student(s) with the highest percentage of marks in a specific subject.', () => {
    expect(function43(20)).toStrictEqual([
        { subject: 'Maths', count: 4 },
        { subject: 'Chemistry', count: 4 },
        { subject: 'Computer', count: 4 }
      ])
 })