const function41=require('../41/41')

test('should return the subject(s) with the highest percentage of marks for a specific student.', () => {
    expect(function41("Ravi")).toStrictEqual([ { name: 'Ravi', subject: 'Maths', percentage: '96%' } ])
 })