// Задание 1
export function reverseString(str) {
  const objRevers = {
    revers: str
  }
  let reverStr = '';
  let newArrStr = Object.values(objRevers)[0].split('');
  for (let i = newArrStr.length - 1; i > -1; i--) {
    reverStr += `${newArrStr[i]}`;
  }
  console.log(reverStr);
  return reverStr;
}
reverseString('hello');
// Задание 2
export function evenOdd(num) {
  (num % 2 == 0) ? alert('even') : alert('odd');
}
evenOdd(0);

// Задание 3
export function decrementArr(arr) {
  let newArr = [];
  if (arr == 0 || arr == 1) {
    alert('введено некорректное число');
  } else {
    for (let i = arr; i > 0; i--) {
      newArr.push(i);
    }
    console.log(newArr);
    return newArr;
  }
}
decrementArr(5);

// Задание 4
export function getCentury(year) {
  let century = Math.ceil(year / 100);
  console.log(century);
  return century;
}
getCentury(2020);

// Задание 5
export function squareSum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += Math.pow(num, 2);
  }
  console.log(sum);
  return sum;
}

squareSum([10, 3, 5]);

// Задание 6
export function progression(i, j, len) {
  let arr = [];
  let secondElArr = i * j;
  arr.push(i, secondElArr);
  for (let o = 2; o < len; o++) {
    secondElArr *= j;
    arr.push(secondElArr);
  }
  return arr;
}

progression(4, 5, 10);