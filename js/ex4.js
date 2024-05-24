//Reversing Words

export function reverseWords(str) {
    str = str.trim(); //trim() removes whitespace from both sides of a string

    const initialArray = str.split(/\s+/);
  
    const reversedArray = initialArray.reverse();
  
    const reversedString = reversedArray.join(' ');
  
    return reversedString;
  }

  