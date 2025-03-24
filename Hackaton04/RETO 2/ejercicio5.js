const filtrarStrings = (array) => array.filter(item => typeof item === "string");

console.log(filtrarStrings([1, "hola", true, "como estas?", 42, "bien"])); 
