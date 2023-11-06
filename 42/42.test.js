const function42=require('../42/42')

test('should return the subject(s) with the lowest percentage of marks for a specific student', () => {
    expect(function42("Aju")).toStrictEqual([ { name: 'Aju', subject: 'Computer', percentage: '60%' } ])
 })