//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (inputColor) => {
  for(let [index, color] of COLORS.entries()) {
    if(color == inputColor) {
      return index;
    }
  }
};

export const COLORS = ['black','brown','red','orange', 'yellow','green','blue','violet','grey','white'];
