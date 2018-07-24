//todo Task 1
/*var firstArray = ["Привет, ", "мир", "!"];

for (var i=0; i<firstArray.length; i++){
    document.write(firstArray[i]);
}*/

//todo Task 2

/*var firstArray = ["Привет, ", "мир", "!"];
var result;

for (var i=0; i<firstArray.length; i++){
    result=firstArray[i];
    document.write(result);
}*/

//todo Task 3

/*var firstArray = ["Привет, ", "мир", "!"];
firstArray[0] = "Пока, ";

for (var i=0; i<firstArray.length; i++){
    document.write(firstArray[i]);
}*/

//todo Task 4

/*var arr=[2, 5, 3, 9];
var result;
result=((arr[0]*arr[1])+(arr[2]*arr[3]));

document.write(result);*/

//todo Task 5

/*function arreyEverage() {
    var arrey = [2, 2, 3, 4, 5];
    var result= 0, everage = 0;

    for (var i=0; i<arrey.length; i++) {
        result=result+arrey[i];

    }
    everage = result/arrey.length;
    alert(everage);
}

arreyEverage();*/

//todo Task 6

function arrChecking() {
    var arreyChecking = [1, 2, 0, -1, -2];
    var counterPositive = 0, counterNegative = 0, counterZero = 0;

    for (var i=0; i<arreyChecking.length; i++) {
        if (arreyChecking[i]==0) {
            counterZero++
        } else if (arreyChecking[i]<0) {
            counterNegative++
        } else {counterPositive++}
    }

    alert(" Колличество положительных значений равно: " + counterPositive +
          "\n Колличество отридцательных значений равно: " + counterNegative +
          "\n Колличество нулевых значений равно: " + counterZero);
}

arrChecking();






