// boki trójkąta
a = 3;
b = 4;
c = 5;
//h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

function traingleAreaCalc(a, b, c){
    let p = (a + b + c)/2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c)); 
    return area;
};

let traingleArea = traingleAreaCalc(a, b, c);

console.log(`Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi: ${traingleArea}`);