//todo Task 1

/*
var arrRand = [Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100)];

var minimal=100, maximal=0;
for (i=0; i<arrRand.length; i++) {
    if (arrRand[i] > maximal) {
        maximal = arrRand[i];}
}
for (i=0; i<arrRand.length; i++){
    if(arrRand[i]<minimal){
        minimal=arrRand[i];}
}
alert(" Сгенерированный массив случайных чисел от 0 до 99: \n" + arrRand +
      "\n Миньнималое значение равно:" + minimal +
      "\n Максимальное значение равно: " + maximal);

*/

//todo Task 2

/*
var profit1 = parseFloat(prompt("Введите прибыль кампании за 1 месяц"));
var profit2 = parseFloat(prompt("Введите прибыль кампании за 2 месяц"));
var profit3 = parseFloat(prompt("Введите прибыль кампании за 3 месяц"));
var profit4 = parseFloat(prompt("Введите прибыль кампании за 4 месяц"));
var profit5 = parseFloat(prompt("Введите прибыль кампании за 5 месяц"));
var profit6 = parseFloat(prompt("Введите прибыль кампании за 6 месяц"));
var profit7 = parseFloat(prompt("Введите прибыль кампании за 7 месяц"));
var profit8 = parseFloat(prompt("Введите прибыль кампании за 8 месяц"));
var profit9 = parseFloat(prompt("Введите прибыль кампании за 9 месяц"));
var profit10 = parseFloat(prompt("Введите прибыль кампании за 10 месяц"));
var profit11 = parseFloat(prompt("Введите прибыль кампании за 11 месяц"));
var profit12 = parseFloat(prompt("Введите прибыль кампании за 12 месяц"));

var companyProfit = [profit1, profit2, profit3, profit4, profit5, profit6, profit7, profit8, profit9, profit10, profit11, profit12];



alert("Прибыль компании по месяцам выглядит так: " + companyProfit);

alert("Теперь необходимо ввести диапазон, между какими месяцами необходимо провести сравнение максимального и минимального значения");

var rangeStart = parseInt(prompt("Введите начальный месяц диапазона"));
var rangeFinish = parseInt(prompt("Введите конечный месяц диапазона"));
var maximalProfit = companyProfit[rangeStart-1], minimalProfit = companyProfit[rangeStart-1];

for(i=rangeStart-1; i<rangeFinish; i++) {
    if(companyProfit[i]>maximalProfit) {
        maximalProfit = companyProfit[i]
    }
}

for(i=rangeStart-1; i<rangeFinish; i++) {
    if(companyProfit[i]<minimalProfit) {
        minimalProfit = companyProfit[i]
    }
}

alert(" Прибыль компании по месяцам выглядит так: " +
    "\n Первый месяц: " + profit1 +
    "\n Второй месяц: " + profit2 +
    "\n Третий месяц: " + profit3 +
    "\n Четвертый месяц: " + profit4 +
    "\n Пятый месяц: " + profit5 +
    "\n Шестой месяц: " + profit6 +
    "\n Седьмой месяц: " + profit7 +
    "\n Восьмой месяц: " + profit8 +
    "\n Девятый месяц: " + profit9 +
    "\n Десятый месяц: " + profit10 +
    "\n Одиннадцатый месяц: " + profit11 +
    "\n Двенадцатый месяц: " + profit12 +
    "\n" +
    "\n" +
    "Диапазон сравнения с " + rangeStart + " до " + rangeFinish + " месяцы" +
    "\n" +
    "\n Миньнималое значение равно: " + minimalProfit +
    "\n Максимальное значение равно: " + maximalProfit);

*/

//todo Task 3

/*

var arreyN = [1, 2, 10, -2, 5, 3, -1, 3, 4, -5];   //0 3 6 9
var summNegative = 0;

var minimal = arreyN[1], maximal = arreyN[1];
var counterMinimal = 0, counterMaximal = 0;

//todo Task 3 Part 1
for (i = 0; i < arreyN.length; i++){
    if(arreyN[i]<0) {
        summNegative = summNegative + arreyN[i];
    }
}
alert("Дан массив значений: " + arreyN +
    "\n Сумма отридцательных значений равна: " + summNegative);
//todo Task 3 Part 1 End

//todo Task 3 Part 2 Start
var multiplication = 1;

for (i = 0; i < arreyN.length; i++) {
    if(arreyN[i]<minimal){
        minimal = arreyN[i];
        counterMinimal = i;
    }
}
for (i = 0; i < arreyN.length; i++) {
    if(arreyN[i]>maximal){
        maximal = arreyN[i];
        counterMaximal = i;
    }
}
if (counterMaximal<counterMinimal) {
    for(i = counterMaximal+1; i<counterMinimal; i++){
       multiplication = multiplication * arreyN[i];
    }
} else {
    for(i = counterMinimal+1; i<counterMaximal; i++){
        multiplication = multiplication * arreyN[i];
    }
}
alert("Дан массив значений: " + arreyN +
    "\n Произведение значений между максимальным и минимальным равно: " + multiplication);
//todo Task 3 Part 2 End

//todo Task 3 Part 3 Start
var summEvens = arreyN[2];

for (i = 4; i < arreyN.length; i=i+2) {
    summEvens = summEvens * arreyN[i];
}
alert("Дан массив значений: " + arreyN +
    "\n Произведение элементов с четными номерами равно: " + summEvens);

//todo Task 3 Part 3 End

//todo Task 3 Part 4 Start
var negValues = [];
var summBetweenNeg = 0;

for(i = 0; i < arreyN.length; i++) {
    if (arreyN[i]<0) {
        negValues.push(i);
    }
}

alert ("Номера элементов с отридцательным значением: " + negValues);

var startOfI = negValues[0];
var endOfI = negValues.pop();

for (i = startOfI+1; i<endOfI; i++) {
    summBetweenNeg = summBetweenNeg + arreyN[i];
}

alert("Дан массив значений: " + arreyN +
    //"\n Номера отридцательных элементов массива arreyN: " + negValues +
    "\nСуммa элементов, находящихся между первым и последним отрицательными элементами равна: " + summBetweenNeg);

*/
//todo Task 4

/*

var tenNunbersArrey = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var firstFiveNum = [];
var sekondFiveNum = [];

for (i = 0; i < 5; i++) {
    firstFiveNum.push(tenNunbersArrey[i]);
}

for (i = 5; i < tenNunbersArrey.length; i++){
    sekondFiveNum.push(tenNunbersArrey[i]);
}

alert("Исходный массив из 10 чисел: " + tenNunbersArrey +
    "\n Первый массив из 5 первых чисел: " + firstFiveNum +
    "\n Второй массив из 5 вторых чисел: " + sekondFiveNum);

var summArrey = [];

for (i = 0; i < 5; i++) {
    summArrey.push(firstFiveNum[i] + sekondFiveNum[i]);
}

alert("Массив из последовательных сумм 5 элементов предыдущих массивов: " + summArrey);

*/



