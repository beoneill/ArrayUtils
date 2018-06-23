const sum = require('../src/JSUtil');

test('intersect returns the common elements of two arrays', () => {
    const arr1 = ['one','two','three'];
    const arr2 = ['two','three','four'];
    const expected = ['two','three'];

    expect(J$.intersect(arr1, arr2)).toEqual(expected);
});

test('intersect does not return duplicate common elements of two arrays', () => {
    const arr1 = ['one','two', 'two', 'three'];
    const arr2 = ['two','two','three','four'];
    const expected = ['two','three'];

    expect(J$.intersect(arr1, arr2)).toEqual(expected);
});

test('intersect returns the common elements of two or more arrays', () => {
    const arr1 = ['one','two','three'];
    const arr2 = ['two','three','four'];
    const arr3 = ['three','four', 'five'];
    const arr4 = ['three'];
    const expected = ['three'];

    expect(J$.intersect(arr1, arr2, arr3)).toEqual(expected);
});

test('intersect returns an empty array when no common elements', () => {
    const arr1 = ['one','two','three'];
    const arr2 = ['two','three','four'];
    const arr3 = ['four', 'five'];
    const expected = [];

    expect(J$.intersect(arr1, arr2, arr3)).toEqual(expected);
});

test('intersect rejects anything that is not an array', () => {
    const obj1 = { someProperty: 123 };
    const obj2 = { someProperty: 999 };

    expect(() => J$.intersect(obj1, obj2)).toThrow();
});

test('intersect returns the common objects of two arrays', () => {
    const arr1 = [{ someProperty: 'one' }, { someProperty: 'two' }];
    const arr2 = [{ someProperty: 'two' }, { someProperty: 'three' }];
    const expected = [{ someProperty: 'two' }];

    expect(J$.intersect(arr1, arr2)).toEqual(expected);
});