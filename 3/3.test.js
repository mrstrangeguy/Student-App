const function3=require('./3printNames')

//test function 3
test('should return student names', () => {
   expect(function3()).toEqual([ 'Ravi', 'Aju', 'Mini SS', 'Binu' ])
})
