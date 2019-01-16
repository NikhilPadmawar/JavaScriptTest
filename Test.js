//1

var num = 59;
var reminderF;
var coinFive;
var coinThree;
var coinOne;

function coins(num) {
  coinFive = parseInt(num / 5);
  reminderF = num % 5;
  if (reminderF != 0) {
    coinThree = parseInt(reminderF / 3);
    coinOne = reminderF % 3;
  }
  return coinFive + coinThree + coinOne;
}

console.log(coins(num));

//2

sen = "I have completed my task !";
var stringArr = "";
var stringArrNew = [];
var finalResult = "";

function longestWord(sen) {
  for (let i = 0; i <= sen.length; i++) {
    if (i < sen.length) stringArr = stringArr + sen[i];
    if (sen[i] == " ") {
      stringArrNew.push(stringArr);
      stringArr = "";
    } else if (sen.length == i) {
      stringArrNew.push(stringArr);
    }
  }

  for (let j = 0; j < stringArrNew.length; j++) {
    if (stringArrNew[j].length > finalResult.length) {
      finalResult = stringArrNew[j];
    }
  }

  return finalResult;
}

console.log(longestWord(sen));

//3

str = "Hello World and Coders";
var string = "";

function firstReverse(str) {
  for (var i = str.length - 1; i >= 0; i--) {
    string = string + str[i];
  }
  return string;
}

console.log(firstReverse(str));
