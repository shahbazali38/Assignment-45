let countries : string[] = ["Pakistan","Dubai","United Kingdom","Turkey","India"]

console.log("Original Order:",countries);
console.log("Alphabetical Order:", [...countries].sort());
console.log("Original Order after sorting:",countries);
console.log("Alphabetical Order:", [...countries].sort().reverse());
console.log("Original Order after reverse sorting:",countries);

countries.reverse();
console.log("Reversed order:", countries)

countries.reverse();
console.log("Back to original order:", countries)

countries.sort();
console.log("Sorted in aplhabetical order:", countries)

countries.sort((a,b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", countries)