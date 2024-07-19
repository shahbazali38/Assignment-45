"use strict";
let guestsArr = ["Irfan", "Adnan", "Azeem"];
let canNotCome = "Irfan";
console.log(canNotCome + " " + 'cannot come for the dinner');
let newGuest = "Jameel";
guestsArr[guestsArr.indexOf(canNotCome)] = newGuest;
console.log(guestsArr);
guestsArr.forEach((items) => console.log(`Dear ${items}, you are invited for the dinner tonight.`));
