//felcha                        //convierte objeto en array
const objectToArray =(objeto) =>Object.entries(objeto)

//llama
const data =objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  })
  
//muestra
  console.log(data)