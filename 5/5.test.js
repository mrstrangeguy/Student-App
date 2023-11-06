const function5=require('./5subjectNames')
//test function 5

test('should return student Subjects', () => {
    expect(function5("Aju")).toEqual([ 'English', 'Maths', 'Physics', 'Chemistry', 'Computer' ])
 })