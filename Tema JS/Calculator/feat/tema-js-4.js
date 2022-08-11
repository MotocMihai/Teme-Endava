function countElementsInDocument(document, elementName){
    const matches = document.getElementsByTagName(elementName);
    console.log(matches);
    return(matches.length)
    
}
console.log( countElementsInDocument(document,"p"))


