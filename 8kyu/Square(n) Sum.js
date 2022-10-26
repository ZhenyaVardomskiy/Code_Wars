function squareSum(numbers){
    let sum = 0;
    numbers.forEach(numbers => {
      sum += numbers*numbers
    });
    return sum
  }