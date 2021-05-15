//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (input) => {
  // convert all letter to lower case and split each character into it's own element
  const sentence = input.toLowerCase().split(''); 
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let counter = 0;
  
  if(sentence.length < 26) return false;
  // iterate through alphabet
  alphabet.forEach(letter => {
    //check to see if each letter of alphabet is in sentence
    if(sentence.includes(letter)) {
      counter += 1;
    }
  });
  if(counter == 26){
    return true;
  } else {
    return false;
  }
  
};
