const function52=require('../52/52')

test('should return function to find and print the student(s) who scored the lowest marks in each subject.', () => {
    expect(function52()).toStrictEqual({
        English: { name: 'Mini SS', subject: 'English', mark: 12 },
        Maths: { name: 'Aju', subject: 'Maths', mark: 38 },
        Physics: { name: 'Mini SS', subject: 'Physics', mark: 18 },
        Chemistry: { name: 'Ravi', subject: 'Chemistry', mark: 30 },
        Computer: { name: 'Ravi', subject: 'Computer', mark: 20 }
      })
})