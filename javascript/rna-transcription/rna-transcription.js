//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (input) => {
  // const dna = input.split('');
  const dna = [...input]
  const rna = [];
  dna.forEach(nucleotide => {
    if(nucleotide === 'G'){
      rna.push('C');
    }
    else if(nucleotide === 'C'){
      rna.push('G');
    }
    else if(nucleotide === 'T'){
      rna.push('A');
    }
    else if(nucleotide === 'A'){
      rna.push('U');
    }
  });
  return rna.join('');
};
