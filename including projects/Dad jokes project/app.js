const jokeSection = document.querySelector(".jokes");
const copyButton = document.querySelector(".copy");

const apiUrl = "https://icanhazdadjoke.com/";
jokeSection.textContent = "";
const handleJokes = () => {
  fetch(apiUrl, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.joke);
      jokeSection.textContent = data.joke;
    })
    .catch((error) => {
      console.log("I am sorry but there is something wrong");
      jokeSection.textContent = `Api not found.....`;
    });
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
