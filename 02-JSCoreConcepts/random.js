arrayOfNumbers = [];

const arrayFiller = (first, last) => {
    for(let i = first; i <= last; i++){
        arrayOfNumbers.push(i);
    }
}

const printArray = (arrayToPrint) => {
    arrayToPrint.forEach(element => {
        console.log(element);
    });
}

arrayFiller(5,14);
printArray(arrayOfNumbers);