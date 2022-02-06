let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
   function getToys() {
     return fetch('http://localhost:3000/toys')
     .then(res => res.json())
   }
   function postToy(toy_data) { 
     fetch('http://localhost:3000/toys', {
     method: 'POST',
      headers: 
      {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
     body: json.stringify({
       "name": toy_data.name.value,
       "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
        "likes": 0
      })
    })
    .then(res => res.json())
  }
  function likes(e){
    let more = parseInt(e.target.previousElement.innertext) + 1
      fetch(`http://localhost:3000/toys/${e.target.id}`, {
        method: "PATCH",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          "likes": newNumberOfLikes
        })
      })
      .then (res =>  res.json())
      .then((like_obj => {
        e.target.previousElementSibling.innertext = `${more} likes`
      }))
      }
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
