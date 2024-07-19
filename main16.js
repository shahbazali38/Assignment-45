"use strict";
let guests = ["Amna", "Fatima"];
// console.log("Due to limited space only two guests can be invited.")
//while (guests.length > 2) {
//    const removedGuest : = guests.pop();
//    console.log(`Sorry ${removedGuest} you are no longer invited.`);
//}
//guests.forEach((items) => 
//    console.log(`Dear ${items} you are still invited for the dinner.`))
guests.pop();
guests.pop();
console.log("final list:", guests);
