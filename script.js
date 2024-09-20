import { quotes } from "./quotes.js";
let generate = document.getElementById("generate");
let selector = document.getElementById("selector");
let quote = document.getElementById("quote");
let author = document.getElementById("author");

document.addEventListener("DOMContentLoaded", function () {
  const back = [
    "flow2.jpg",
    "flow3.jpg",
    "flow5.jpg",
    "flow6.jpg",
    "flow8.jpg",
    "flow11.jpg",
    "flow12.jpg",
    "flow14.jpg",
    "flow15.jpg",
    "flow16.jpg",
    "flow17.jpg",
    "flow18.jpeg",
    "sakura.jpg",
    "snow2.jpg",
    "snow1.png",
    "flow20.jpg",
    "flow21.jpg",
    "flow22.jpeg",
    "flow23.jpeg",
    "flow24.jpeg",
    "flow25.jpg",
    "flow26.png",
    "flow27.jpg",
  ];
  //changeBack();
  function changeBack() {
    const randomIndex = Math.floor(Math.random() * back.length);
    let path = back[randomIndex];
    path = "assets/img/" + path;
    //console.log(path);
    document.body.style.backgroundImage = `linear-gradient(45deg, #9c59b65e, #3498db5e),
      url('${path}')`;
  }

  function generateQuote(language) {
    const quoteArray = quotes[language];
    const random = Math.floor(Math.random() * quoteArray.length);
    let quoteSet = quoteArray[random];
    //console.log(quoteSet);
    quote.innerText = quoteSet["quote"];
    author.innerText = "-- " + quoteSet["author"];
  }
  generate.addEventListener("click", () => {
    let language = selector.value;
    generateQuote(language);
    changeBack();
    //console.log(language);
  });

  selector.addEventListener("change", () => {
    if (selector.value == "en") {
      generate.innerText = "Change";
      quote.innerText = "Click the button to generate a quote";
      author.innerText = "-Author ";
    } else if (selector.value == "es") {
      generate.innerText = "Cambiar";
      quote.innerText = "Haga clic en el botón para generar una cotización";
      author.innerText = "-Autor ";
    } else if (selector.value == "fr") {
      generate.innerText = "Changer";
      quote.innerText = "Cliquez sur le bouton pour générer une citation";
      author.innerText = "-Auteur ";
    }
  });
});
