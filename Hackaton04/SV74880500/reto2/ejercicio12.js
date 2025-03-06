function getStudentNames(students) {
    return students.map(function(student) {
        return student.name;
    });
}

console.log(getStudentNames([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ])); // ➞ ["Steve", "Mike", "John"]
  