let array = [];
let highNumber = 0;
alert("sigma");
alert("hi")

function useConjecture(number) {
  const input = document.getElementById("nValue");
  const inputValue = input.value;
  number = inputValue;
  if (number >= 1) {
    for (let i = 1; number !== 1; i++) {
      if (number % 2 === 0) {
        array.push(i);
        if (number > highNumber) {
          highNumber = number;
        }
        number = number / 2;
        console.log(number);
      } else if (number % 2 !== 0) {
        array.push(i);
        if (number > highNumber) {
          highNumber = number;
        }
        number = (number * 3) + 1;
        console.log(number);
      }
    }
    document.getElementById("amountOfSteps").innerHTML = array.length;
    array.length = [];
    document.getElementById("highestNumber").innerHTML = highNumber;
    highNumber = 0;
  } else if (Number.isInteger(number) == false) {
    alert("Number needs to be greater than or equal to 1 and needs to be an integer!")
  } else {
    alert("Number needs to be greater than or equal to 1 and needs to be an integer!")
  }
}