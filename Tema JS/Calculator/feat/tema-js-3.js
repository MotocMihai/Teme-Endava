function isChar(char) {
    if (char >= 'a' && char <= 'z') return true;
    else if (char >= 'A' && char <= 'Z') return true;
    return false;
}
var hmap = {};
array = [1, "A", "B", ["C", 2, ["A","B","D"],4]];
function countLetters(array) {
    for (let index = 0; index < array.length; index++) {
        if (Array.isArray(array[index])) {
            countLetters(array[index]);
        }
        else if (isChar(array[index])) {
            if (!isNaN(hmap[[array[index]]])) hmap[[array[index]]]++;
            else hmap[[array[index]]] = 1;

        }
    }
}
countLetters(array);
console.log(hmap);