//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
  
export const isPangram = (str) => {
  const string = str.toLowerCase();
  if (string==="")
  return false
  const alphabet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let pg = true;
  for (let i = 0; i < alphabet.length; i++) {
    if (string.includes(alphabet[i]) === false)
      pg = false
  }
  return pg
};