// for (let i = 5; i <= 10; i++) {
//   console.log(i);
// }

// loop: for (let i = 20; (i) => 10; i--) {
//   if (i === 13) {
//     break loop;
//   }
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// let i = 2;
// while (i <= 16) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// function fifthTask() {
//   const arrayOfNumbers = [];

//   // Пишем решение вот тут
//   for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers[i - 5] = i;
//   }
//   console.log(arrayOfNumbers);
//   // Не трогаем
//   return arrayOfNumbers;
// }

// fifthTask();

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// // Пишем решение вот тут
// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i]);
// }
// console.log(result);

// let data = [5, 10, "Shopping", 20, "Homework"];

// Пишем решение вот тут
// for (let i = 0; i < data.length; i++) {
//   if (data[i].typeof === Number) {
//     data[i] * 2;
//     console.log(data[i]);
//   } else if (data[i].typeof === String) {
//     data[i] + " - done";
//   }
// }
// console.log(data);

// for (let i of data) {
//   if (typeof i === "number") {
//     i = i * 2;
//     console.log(i);
//   } else if (typeof i === "string") {
//     i = i + " - done";
//     console.log(i);
//   } else {
//     console.log("err");
//   }
// }
// console.log(data);

// for (let i = 0; i < data.length; i++) {
//   if (typeof data[i] === "number") {
//     data[i] = data[i] * 2;
//   } else if (typeof data[i] === "string") {
//     data[i] = data[i] + " - done";
//   }
// }
// console.log(data);

// function secondTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, "Shopping", 20, "Homework"];

//   // Пишем решение вот тут
//   for (let i of data) {
//     if (typeof i === "number") {
//       i = i * 2;
//       console.log(data);
//     } else if (typeof i === "string") {
//       i = i + " - done";
//     }
//   }
//   console.log(data);
//   // Не трогаем
//   return data;
// }
// secondTask();
// function secondTask() {
//   const data = [5, 10, "Shopping", 20, "Homework"];

//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === "number") {
//       data[i] = data[i] * 2;
//     } else if (typeof data[i] === "string") {
//       data[i] = data[i] + " - done";
//     }
//   }
//   console.log(data);
//   return data;
// }

// secondTask();

debugger;

const lines = 5;
let result = "";
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
