import { reverseString, evenOdd, decrementArr, getCentury, squareSum, progression } from './index'

if (reverseString('hello')) {
  test('Задание 1', () => {
    expect(reverseString('hello')).toEqual('olleh')
  })
}

if (evenOdd(4)) {
  test('Задание 2', () => {
    expect(evenOdd(5)).toEqual('Odd')
    expect(evenOdd(8)).toEqual('Even')
    expect(evenOdd(0)).toEqual('Even')
  }) 
}

if (decrementArr(3)) {
  test('Задание 3', () => {
    expect(decrementArr(7)).toEqual([7, 6, 5, 4, 3, 2, 1])
  })
}

if (getCentury(1187)) {
  test('Задание 4', () => {
    expect(getCentury(1605)).toBe(17)
    expect(getCentury(1800)).toBe(18)
    expect(getCentury(35)).toBe(1)
  })
}

if (squareSum([1, 3, 5])) {
  test('Задание 5', () => {
    expect(squareSum([2, 4, 6])).toBe(56)
  })
}

if (progression(3, 6, 2)) {
  test('Задание 6', () => {
    expect(progression([3, 4, 5])).toEqual([3, 12, 48, 192, 768])
  })
}