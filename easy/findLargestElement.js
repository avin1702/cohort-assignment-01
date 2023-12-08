/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let i
    let max = numbers[0]
    let length = numbers.length
    for(i=0;i<length;i++)
    {
        if(max<numbers[i])
        {
            max = numbers[i]
        }
    }
    return max
}

module.exports = findLargestElement;