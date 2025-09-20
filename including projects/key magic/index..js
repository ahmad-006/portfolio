document.querySelector(".input").addEventListener("keydown", (e) => {
  document.querySelector(".data").innerHTML = `
      <h2>Key: ${e.key === " " ? "Space" : e.key}</h2>
      <h2>Key Code: ${e.code}</h2>
      <h2>Event Type: ${e.type}</h2>
      <h2>Event Code: ${e.keyCode}</h2>
    `;
});
