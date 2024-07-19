let myName : string = "Amjad Ali";

console.log("uppercase:", myName.toLocaleUpperCase());

console.log("lowercase:", myName.toLowerCase());

console.log("titlecase:", myName.replace(/\b\w/g,c=> c.toUpperCase()));
