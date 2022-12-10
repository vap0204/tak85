import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  // ======================================================= //

  const request = new Request("https://pokeapi.co/api/v2/pokemon?limit=10");
  fetch(request)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Something went wrong on API server!");
      }
    })
    .then((data) => {
      const pokemon = data.results.map((p) => {
        // return `<li>${p.name}</li>`;
        return p.name;
      });

      pokemon.forEach((name) => {
        const li = document.createElement("li");
        li.innerText = name;
        ul.appendChild(li);
        console.log(name);
      });
    })
    .catch((error) => {
      console.error(error);
    });
});