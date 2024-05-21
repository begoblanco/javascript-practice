//The word exists or not

let word = "English";

export function containsWord(str) {
    
    const lowerStr = str.toLowerCase();   

    return true == lowerStr.includes(word.toLowerCase());
}
