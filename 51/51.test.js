const function51=require('../51/51')

test('should return function to find and print the student(s) who scored the highest marks in each subject.', () => {
    expect(function51()).toStrictEqual({
        English: { name: 'Binu', subject: 'English', mark: 49 },
        Maths: { name: 'Mini SS', subject: 'Maths', mark: 49 },
        Physics: { name: 'Binu', subject: 'Physics', mark: 47 },
        Chemistry: { name: 'Binu', subject: 'Chemistry', mark: 46 },
        Computer: { name: 'Binu', subject: 'Computer', mark: 50 }
      })
})