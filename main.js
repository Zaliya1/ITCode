// Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
let arr = [4, 8, 3];
let sum = 0;
for (let i = 0; i< arr.length; i++) {
    sum += Math.pow(arr[i],2);
}
console.log(sum);

// Яблоко стоит 1.15, апельсин стоит 2.30. Сколько они стоят вместе – чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?
console.log(1.15 + 2.30);

// Треугольник. Напишите цикл,  выводит такой треугольник:
// *
// **
// ***
// ****
// *****
// ******
let a = '*';
for (let i = 0; i<6; i++) {
    console.log(a);
    a+= "*";
}

// Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
for (let i =1; i<=100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log('Fizz');
    } else if (i % 3 !== 0 && i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else {
        console.log(i);
    }
}

// Напишите скрипт, который считает количество секунд в часе.
let hour = 1;
let seconds = hour * 60 * 60;
console.log(seconds);

// Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.
let answer = prompt('Какое у вас имя?');
alert (`Ваше имя ${answer}`);

// Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
let str = 'abcde';
console.log(str[0], str[2], str[4]);

// Выведите зарплату Пети и Коли
let obj = {
    'Коля':1000,
    'Вася':500,
    'Петя':200
};
console.log(obj['Коля'] + " " + obj['Петя']);

// Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
let arr1= [2, 5, 3, 9];
let result = arr1[0]*arr1[1] + arr1[2]*arr1[3];
console.log(result);

//  Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4из этого массива.
let arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7,8,9] 
];
console.log(arr2[1][0]);

// В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
let min = 10;
let quartet;
if (min >= 0 && min <15) {
    quartet = 1;
} else if (min >= 15 && min < 30) {
    quartet = 2;
} else if (min >= 30 && min < 45) {
    quartet = 3;
} else if (min >= 45 && min < 60) {
    quartet = 4;
} else { console.log('введите корректное число')};
console.log(quartet + " четверть часа");

// Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при  a, равном 1, 0, -3.
function checkCount (a) {
    if (a < 0) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}
checkCount(1);

//  Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при  test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
let test = false;
if (test) {
    console.log('Верно');
} else if (!test){
    console.log('Неверно');
}
if (test===true) {
    console.log('Верно');
} else if (test===false){
    console.log('Неверно');
}

// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
let result1;
let num = 1;
switch(num) {
    case 1:
        result1 = 'зима';
        break;
    case 2:
        result1 = 'весна';
        break;
    case 3:
        result1 = 'лето';
        break;
    case 4:
        result1 = 'осень';
        break;
}
console.log(result1);

//  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла forвыведите все эти элементы на экран.
let arr3 = [1, 2, 3, 4, 5];
for (let key of arr3) {
    console.log(key);
}

//  Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
let a1 = 10;
let b1 = 3;
console.log(a1%b1);

// Возведите 2 в 10 степень. Результат запишите в переменную st.
let st = Math.pow(2,10);
console.log(st);

// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
let count = Math.sqrt(379);
console.log('без округления: '+ count);
console.log(Math.round(count));
console.log(Math.round(count*10)/10);
console.log(Math.round(count*100)/100);

// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));

//  Выведите на экран случайное целое число от 1 до 100.
let random = Math.floor(Math.random()*100 +1);
console.log(random);

//  Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice)
let str2 = 'aaa bbb ccc';
console.log(str2.substr(4,3));
console.log(str2.substring(4,7));
console.log(str2.slice(4, 7));

// Дана строка 'js'. Сделайте из нее строку 'JS'.
let str1 = 'js';
str1 = str1.toUpperCase();
console.log(str1);

//  Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
let str3 = 'я учу javascript!';
let strLength = str3.length;
console.log(strLength);

// Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
let str4 = 'я учу javascript!';
let strArr = str4.split(' ');
console.log(strArr);
for (let i = 0; i<strArr.length; i++) {
    if (strArr[i]=== 'учу') {
        console.log(i+1 + ' позиция')
    }
}

// Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
let str5 = 'Я-учу-javascript!';
while (str5.includes('-')) {
    str5 = str5.replace('-','!');
}
console.log(str5);

// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

// Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
let arr4 = ['я', 'учу', 'javascript', '!'];
console.log(arr4.join('+'));

// Преобразуйте первую букву строки в верхний регистр.
let stroke = "пРиВЕТ";
let updateStroke = stroke[0].toUpperCase() + stroke.substring(1).toLowerCase();
console.log(updateStroke);