'use strict';

let lang = 'ru';
let ruWeek = 'понедельник, вторник, среда, четверг, пятница, суббота, воскресение.';
let enWeek = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.';
// Через if 
if (lang === 'ru'){
   console.log(ruWeek);
} else if (lang === 'en'){
    console.log(enWeek);
}
// Через switch-case
switch (lang){
    case 'ru':
        console.log(ruWeek);
        break;
    case 'en':
        console.log(enWeek);
        break;
}
// Через многомерный массив

 let arr = {'ru': ruWeek.split(), 'en': enWeek.split()};
console.log(arr[lang].join());

