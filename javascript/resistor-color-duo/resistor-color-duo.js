//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colorArr) => {
  const colorCode = (inputColor) => {

    const colors = ['black','brown','red','orange', 'yellow','green','blue','violet','grey','white'];

    for(let [index, color] of colors.entries()) {
      if(color == inputColor) {
        return index;
      }
    }
  }
  
  const value = () => {
    return ((10 * colorCode(colorArr[0])) + colorCode(colorArr[1]));
  }
  
  return value();
};
