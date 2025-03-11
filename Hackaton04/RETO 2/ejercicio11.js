const getBudgets = (personas = []) => {
    let total = 0;

    for (let i = 0; i < personas.length; i++) {
        total += personas[i].budget;
    }

    return total;
};

console.log(getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 }
])); 