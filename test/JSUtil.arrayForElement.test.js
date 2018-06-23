const sum = require('../src/JSUtil');

test('arrayForElement will throw an error if element does not exist in any array', () => {
    const obj1 = { someProperty: 'one' };
    const obj2 = { someProperty: 'two' };
    const obj3 = { someProperty: 'three' };
    const obj4 = { someProperty: 'four' };
    const arr1 = [obj1, obj2];
    const arr2 = [obj3];

    expect(() => J$.arrayForElement(obj4, arr1, arr2)).toThrow();
});

test('arrayForElement will an array that contains the element', () => {
    const obj1 = { someProperty: 'one' };
    const obj2 = { someProperty: 'two' };
    const obj3 = { someProperty: 'three' };
    const arr1 = [obj1, obj2];
    const arr2 = [obj3];

    expect(J$.arrayForElement(obj2, arr1, arr2)).toStrictEqual(arr1);
});