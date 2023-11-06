const function59=require('../59/59')

test('should return the subject(s) in which the average marks are above the class average marks.', () => {
    expect(function59(30)).toStrictEqual([ { subject: 'Maths', percentage: '100%' } ])
})