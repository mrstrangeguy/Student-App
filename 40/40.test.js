const function40=require('../40/40')

test('should return function to find and print the student(s) with the highest percentage of marks in a specific subject.', () => {
    expect(function40("Physics")).toStrictEqual([ { name: 'Mini SS', subject: 'Physics', percentage: '36%' } ])
 })