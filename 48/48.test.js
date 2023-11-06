const function48=require('../48/48')

test('should return function to find and print the student(s) who scored the lowest marks in at least one subject.', () => {
    expect(function48()).toStrictEqual([
        { name: 'Ravi', lowestMark: 20 },
        { name: 'Aju', lowestMark: 30 },
        { name: 'Mini SS', lowestMark: 12 },
        { name: 'Binu', lowestMark: 46 }
      ])
})