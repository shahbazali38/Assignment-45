var myName = "Amjad Ali";
console.log("uppercase:", myName.toLocaleUpperCase());
console.log("lowercase:", myName.toLowerCase());
console.log("titlecase:", myName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
