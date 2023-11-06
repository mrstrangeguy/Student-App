
const function4=require('./4printIds')
//test function 4
test('should return student IDs', () => {
    expect(function4()).toEqual([ '101', '102', '103', '104' ])
 })