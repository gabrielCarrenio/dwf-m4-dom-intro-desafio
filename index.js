const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const lista = document.querySelector(".lista");
  lista.innerHTML = "";

  cosasQueAprendimos.forEach((element) => {
    let li = document.createElement("li");
    li.innerHTML = element.tema;
    li.classList.add(element.class || "item");
    // if (!element.class.length == 0) {
    //   li.classList.add(element.class);
    // }
    lista.appendChild(li);
  });
}

main();
