let pronombre = ['You', 'The', 'Your'];
let sustantivo = ['day','week','month','work','proyect'];
let verbo = ['improve','shine','get better'];

let randomSelector = (arr) =>{

    return Math.floor(Math.random() * (arr.length));
}

console.log(randomSelector(pronombre));
console.log(randomSelector(sustantivo));
console.log(randomSelector(verbo));