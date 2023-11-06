const function50=require('../50/50')

test('should return function to calculate and print the total marks for each student in each subject.', () => {
    expect(function50()).toStrictEqual([
        { name: 'Ravi', total: 163 },
        { name: 'Aju', total: 170 },
        { name: 'Mini SS', total: 149 },
        { name: 'Binu', total: 241 }
      ])
})