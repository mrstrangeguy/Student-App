const function77=require('../77/77')

test('should return  student(s) who scored above the average marks of a specific student in all subjects.', () => {
    expect(function77("Mini SS")).toStrictEqual([ { student: 'Aju' }, { student: 'Binu' } ])
})