  
// Задание 1

const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) break;

    console.log(numbers[i]);
}

// Задание 2

const nums = [1, 5, 4, 10, 0, 3];

const result = nums.indexOf(4);

console.log(result);

// Задание 3

const num = [1, 3, 5, 10, 20];

word = num.join(' ');
console.log(word);


// Задание 4

const arr = [];

for (let i = 0; i < 3; i++) {
    
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
    arr[i].push(1)
    }
}

console.log(arr);


// Задание 5

const numbs = [1, 1, 1];

numbs.push(2, 2, 2);

console.log(numbs);

// Задание 6

const numbrs = [9, 8, 7, 'a', 6, 5];


sorting = numbrs.sort ();

delete numbrs[5]

//sorting.splice(5, 5) 
//оставил как я решил изначально, 
//через splice нашел в интернете, пытаясь понять почему ячейка пустая остается, 
//оно работает.

console.log (sorting);


// Задание 7

const numbr = [9, 8, 7, 6, 5];

   let user = Number(prompt('Угадайте число', '1-9'));

   let search = numbr.includes(user);

   //console.log(search);

   if (search) {                        //тут серч делает проверку на труе или фалс
    console.log('Угадал');
   } else {
    console.log('Не угадал');
   }

    // Задание 8

    let text = 'abcdef'

    text = text.split('').reverse('').join('');
    console.log(text);

 // Задание 9

 const number = [
    [1, 2, 3,],
    [4, 5, 6]
];
    nu =  number.flat();

    console.log(nu);

// Задание 10

const nSumm = [2, 7, 4, 3, 9, 1, 5, 2, 6, 9];

for (let i = 0; i < nSumm.length - 1; i++) {
    let sum = nSumm[i] + nSumm[i + 1];
    console.log(sum);
  }



// Задание 11

function mult(arr){
    return arr.map(item => item ** 2);
  }
console.log(mult([1, 2, 3]));

// Задание 12

function getLengthWords(arrr){
    
    return arrr.map(item => item.length);
  }

console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));


// Задание 13


function filterPositive(array) {

    return array.filter(item => item <= 0);
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

