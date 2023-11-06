const function78=require('../78/78')

test('should return  student(s) who scored below the average marks of a specific student in all subjects.', () => {
    expect(function78("Binu")).toStrictEqual([ { student: 'Ravi' }, { student: 'Aju' } ])
})