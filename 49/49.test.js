const function49=require('../49/49')

test('should return function to calculate and print the average marks for each student in each subject.', () => {
    expect(function49()).toStrictEqual([
        { name: 'Ravi', avearge: 32.6 },
        { name: 'Aju', avearge: 34 },
        { name: 'Mini SS', avearge: 29.8 },
        { name: 'Binu', avearge: 48.2 }
      ])
})