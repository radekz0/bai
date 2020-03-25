names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {

    constructor(names) {
        this.names = names;
    }

    startWith(letter){ 
        let namesByLetter = [];
        for(let i = 0; i < names.length; i ++){
            if(names[i].charAt(0) === (letter)){
                namesByLetter.push(names[i]);
            }
        }
        this.names = namesByLetter;
        return this;    //return // names (array) which starts with the letter 
    }

    sort() {
        this.names.sort()
        return this;    // names (array) in alphabetical order 
    }

    get() {
        return this.names;  // names (array) in natural order
    }

    getFirst(n) {
        return this.names.slice(0, n);  // get first 'n' names (array) 
    }
}

let students = new Students(names);
// console.log(students.get());
//console.log(students.sort());
//console.log(students.startWith('P'));
//console.log(students.startWith('M').sort());
//console.log(students.sort().getFirst(4));
//console.log(students.startWith('M').sort().getFirst(2));
 console.log(students.get());



