

function objectToArray(obj) {

    return Object.entries(obj);
    
}



console.log(objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
})); 