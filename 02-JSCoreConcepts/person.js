
class Person{
    constructor(imie, nazwisko){
        this.imie = imie;
        this.nazwisko = nazwisko;
    }

    getFullName(){
        return this.imie + ' ' + this.nazwisko.toUpperCase();
    }

    getInitials(){
        return this.imie.charAt(0).toUpperCase() + '.' + this.nazwisko.charAt(0).toUpperCase() + '.';
    }
}
person1 = new Person('Jan', 'Nowak');
person2 = new Person('Radoslaw', 'Zielinski');
console.log(person1.getFullName());
console.log(person1.getInitials());
console.log(person2.getFullName());
console.log(person2.getInitials());