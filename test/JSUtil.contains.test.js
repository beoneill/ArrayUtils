const sum = require('../src/index');

const obj1 = { someProperty: 'one' };
const obj2 = { someProperty: 'two' };
const obj3 = { someProperty: 'three' };
const obj4 = { someProperty: 'four' };

test('contains returns true if object is in array', () => {
    const arr1 = [obj1, obj2];

    expect(J$.contains(obj2, arr1)).toBeTruthy();
});

test('contains returns true if object is in one of 2 arrays', () => {
    const arr1 = [obj1, obj2];
    const arr2 = [obj3];

    expect(J$.contains(obj2, arr1, arr2)).toBeTruthy();
});

test('contains returns true if object is in one of 3 arrays', () => {
    const arr1 = [obj1, obj2];
    const arr2 = [obj3];
    const arr3 = [obj4];

    expect(J$.contains(obj4, arr1, arr2, arr3)).toBeTruthy();
});

test('contains returns false if object is not in array', () => {
    const arr1 = [obj1, obj2];

    expect(J$.contains(obj3, arr1)).toBeFalsy();
});

test('contains returns false if object is not in any provided array', () => {
    const arr1 = [obj1, obj2];
    const arr2 = [obj3];

    expect(J$.contains(obj4, arr1, arr2)).toBeFalsy();
});

test('contains returns true if object exists but properties are different order', () => {
    const obj1 = { someProperty: 'one', extraProperty: 'extra' };
    const obj1DifferentOrder = { extraProperty: 'extra', someProperty: 'one' };
    
    const arr1 = [obj1, obj2];
    const arr2 = [obj3];

    expect(J$.contains(obj1DifferentOrder, arr1, arr2)).toBeTruthy();
});