const function39=require('../39/39')

test('should return function to find and print the student(s) with the highest percentage of marks in a specific subject.', () => {
    expect(function39("English")).toStrictEqual([ { name: 'Binu', subject: 'English', percentage: '98%' } ])
 })