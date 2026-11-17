function spinWords(str) {
    const words = str.split(' ');

    const result = words.map(function(word) {
        if (word.length >= 5) {
            return word.split('').reverse().join('');
        } else {
            return word;
        }
    });

    return result.join(' ');
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL
const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test