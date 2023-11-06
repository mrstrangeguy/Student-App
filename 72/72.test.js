const function72=require('../72/72')

test('should return student(s) who scored below the class average marks in the majority of subjects', () => {
    expect(function72()).toStrictEqual([
        { subject: 'English', belowAverageCount: 3 },
        { subject: 'Chemistry', belowAverageCount: 3 }
      ])
})