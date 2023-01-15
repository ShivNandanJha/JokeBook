const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
// const url ="https://api.humorapi.com/jokes/random?api-key=5ab4cbdfae594c44aaa436f9a9e1f3c3"
const url ="https://official-joke-api.appspot.com/random_joke"

let getJoke = () => {
  fetch(url)
    .then((data) => data.json())
      .then((item) =>
      {
        jokeContainer.innerHTML =`<p>${item.setup}</p><p>${item.punchline}</p>`
      },
      );
};
btn.addEventListener("click",getJoke)
getJoke();
