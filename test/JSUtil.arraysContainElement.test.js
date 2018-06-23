const sum = require('../src/JSUtil');

const obj1 = { someProperty: 'one' };
const obj2 = { someProperty: 'two' };
const obj3 = { someProperty: 'three' };

test('arraysContainElement will be false if element does not exists in all arrays', () => {
    const arr1 = [obj1, obj2];
    const arr2 = [obj3];

    expect(J$.arraysContainElement(obj3, arr1, arr2)).toBeFalsy();
});

test('arraysContainElement will be true if element exists in all arrays', () => {
    const arr1 = [obj1, obj2];
    const arr2 = [obj3, obj1];

    expect(J$.arraysContainElement(obj1, arr1, arr2)).toBeTruthy();
});