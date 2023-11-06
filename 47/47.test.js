const function47=require('../47/47')

test('should return function to find and print the student(s) who scored the highest marks in at least one subject.', () => {
    expect(function47()).toStrictEqual([
        { name: 'Ravi', highestMark: 48 },
        { name: 'Aju', highestMark: 38 },
        { name: 'Mini SS', highestMark: 49 },
        { name: 'Binu', highestMark: 50 }
      ])
})