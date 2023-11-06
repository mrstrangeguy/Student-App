const function32=require('../32/32')

test('should return the percentage of students who scored below a certain mark in all subjects', () => {
    expect(function32(30,"English")).toBe("50%")
 })