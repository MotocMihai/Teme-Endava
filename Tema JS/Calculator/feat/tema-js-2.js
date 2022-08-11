array = [1, "A", "B", ["C", 2, ["A","B","D"],4]];
//function countLetters(multiDimensionArray) {
 
   
//}
hmap={};
function isChar(char) {
    if (char >= 'a' && char <= 'z') return true;
    else if (char >= 'A' && char <= 'Z') return true;
    return false;
}

array.flat(Infinity).filter(x=>isChar(x)).forEach(element => {
    if (!isNaN(hmap[element])) hmap[element]++;
            else hmap[element] = 1;   
});
console.log(hmap)


//    Sa se implementeze corpul functiei de mai sus (folosind metodele predifinite pe array-urile din JS) in asa fel
//    incat sa returneze un obiect de JS care va contine fiecare litera de cate ori apare in array-ul de intrare.
//    Ex: { A: 3, B: 2, ... , T: 1 ... }. Litere care nu apar, se ignora in rezultat.