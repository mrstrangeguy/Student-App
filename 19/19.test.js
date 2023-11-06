const function19=require('../19/19')

test('should return  the overall total marks for the class.', () => {
    expect(function19()).toStrictEqual(
        [
            { subject: 'English', averageMark: 30.25 },
            { subject: 'Maths', averageMark: 46 },
            { subject: 'Physics', averageMark: 34.5 },
            { subject: 'Chemistry', averageMark: 35 },
            { subject: 'Computer', averageMark: 35 }
          ]
    )
 })