//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (num) => {
  let number = num;
  let steps = 0;

  if( number < 1 ) {
    throw new Error('Only positive numbers are allowed');
  }

  if(number === 1) return steps;

  while (number != 1) {
    if (number % 2 == 0){
      number /= 2;
      steps++;
    } else {
      number *= 3;
      number += 1;
      steps++;
    }
  }
  return steps;
};
