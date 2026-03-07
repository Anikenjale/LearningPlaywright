
let scores =[45,83,91,88,60,73];

//map - transforms every element, returns NEW Array

let grades = scores.map(s=>s>70 ? "Pass":"Fail");
console.log(grades);

//filter - keeps elements that pass a test

let passing =scores.filter(s => s >=70);
console.log(passing);

//reduce - accumulates to a single value

let total= scores.reduce((sum))