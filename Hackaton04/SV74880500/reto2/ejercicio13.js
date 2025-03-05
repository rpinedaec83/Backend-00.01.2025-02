function objectToArray(obj) {
    var result = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push([key, obj[key]]);
        }
    }
    return result;
}

console.log(objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  })); 
  