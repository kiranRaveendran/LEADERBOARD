// script.js

let players = [];

function addPlayer() {
  const name = document.getElementById("playerName").value;
  const score = parseInt(document.getElementById("startingScore").value);

  if (name && !isNaN(score)) {
    players.push({ name, score });
    updateTable();
    document.getElementById("playerName").value = '';
    document.getElementById("startingScore").value = '';
  } else {
    alert("Please enter valid name details.");
  }
}

function updateTable() {
  const tableBody = document.getElementById("playerTable");
  tableBody.innerHTML = '';

  players.forEach((player, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${player.name}</td>
      <td>${player.score}</td>
      <td>
        <button onclick="adjustScore(${index}, 5)">+5</button>
        <button onclick="adjustScore(${index}, -5)">-5</button>
        <button onclick="deletePlayer(${index})">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function adjustScore(index, value) {
  players[index].score += value;
  updateTable();
}

function deletePlayer(index) {
  players.splice(index, 1);
  updateTable();
}

function sortPlayersByScore() {
  players.sort((a, b) => b.score - a.score);
  updateTable();
}

document.getElementById("AddScore").addEventListener("click", addPlayer);
