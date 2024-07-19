"use strict";
// Part 1
let guestArr = ["Jameel", "Irfan", "Adnan", "Azeem"];
console.log(guestArr);
let cannotCome = "Irfan";
let newGuest = "Aqeel";
guestArr[guestArr.indexOf(cannotCome)] = newGuest;
guestArr.map((items) => console.log(`${items} i have arranged a big dining table so i am inviting more guests.`));
// Part 2
let guestInStart = "Ali";
guestArr.unshift(guestInStart);
console.log(guestArr);
// Part 3
let middleguest = "Shaka";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleguest);
console.log(guestArr);
// Part 4
guestArr.push("Zeeshan");
console.log(guestArr);
// Part 5
guestArr.map((items) => console.log(`Dear ${items} you are invited for the dinner tonight.`));
