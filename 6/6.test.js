const function6=require('./6printMarks')

//test function 6
test('should return student Marks', () => {
    expect(function6("Aju")).toEqual([
        { subject: 'English', mark: 35 },
        { subject: 'Maths', mark: 38 },
        { subject: 'Physics', mark: 33 },
        { subject: 'Chemistry', mark: 34 },
        { subject: 'Computer', mark: 30 }
      ])
 })