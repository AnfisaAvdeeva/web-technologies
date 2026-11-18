function longestPrefix(strs) {
    let result = '';

    for (let i = 1; i <= strs[0].length; i++) {
        let letter = strs[0][strs[0].length - i];

        let count = 0;

        for (let j = 0; j < strs.length; j++) {
            if (strs[j][strs[j].length - i] === letter) {
                count++;
            }
        }

        if (count === strs.length) {
            result = letter + result;
        } else {
            break;
        }
    }

    if (result.length >= 2) {
        return result;
    } else {
        return '';
    }
}

const strs1 = ["цветок", "поток", "хлопок"];
console.log(longestPrefix(strs1)); 
const strs2 = ["собака","гоночная машина","машина"]
console.log(longestPrefix(strs2)); 