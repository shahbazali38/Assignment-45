let guestsArr : string[] = ["Irfan","Adnan","Azeem"]
let canNotCome : string = "Irfan" 
console.log(canNotCome +" "+'cannot come for the dinner');

let newGuest : string = "Jameel";
guestsArr [guestsArr.indexOf(canNotCome)] = newGuest;

console.log(guestsArr)

guestsArr.forEach((items) => 
console.log(`Dear ${items}, you are invited for the dinner tonight.`))