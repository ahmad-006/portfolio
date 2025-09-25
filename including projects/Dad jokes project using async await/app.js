const { log } = require("node:console");

const jokeSection = document.querySelector(".jokes");
const copyButton = document.querySelector(".copy");

const apiUrl = "https://icanhazdadjoke.com/";
jokeSection.textContent = "";
const handleJokes = () => {
  async function jokesHandle() {
    try {
      const response = await fetch(apiUrl, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log(response);
      const data = await response.json();
      jokeSection.textContent = data.joke;
    } catch (error) {
      console.log(error);
      jokeSection.textContent = error;
    }
  }
  if (document.querySelector(".next").textContent === "GET ONE") {
    document.querySelector(".next").textContent = "GET ANOTHER";
    document.querySelector(".copy").classList.remove("hide");
  }
};

document.querySelector(".next").addEventListener("click", handleJokes);
document.querySelector(".copy").addEventListener("click", (e) => {
  const jokeText = jokeSection.textContent; // Get the current joke text
  navigator.clipboard
    .writeText(jokeText)
    .then(() => {
      alert("Joke copied to clipboard!");
    })
    .catch((err) => {
      alert("Failed to copy text: " + err);
    });
});
