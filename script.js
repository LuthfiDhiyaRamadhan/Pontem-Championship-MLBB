document.addEventListener("DOMContentLoaded", function() {
    const winnerElement = document.getElementById("winner");
    const winnersList = document.getElementById("winners-list");

    // Simulate data retrieval
    const winnerData = "Team D - 1st Place";
    const winnersData = [
        { rank: 1, teamName: "Team X", prize: "1st Prize", image: "team_x.png" },
        { rank: 2, teamName: "Team Y", prize: "2nd Prize", image: "team_y.png" },
        { rank: 3, teamName: "Team Z", prize: "3rd Prize", image: "team_z.png" }
        // tambahkan data pemenang lainnya
    ];

    // Update the winner element
    winnerElement.textContent = winnerData;

    // Update the winners list
    winnersData.forEach(winner => {
        const row = winnersList.insertRow();
        const rankCell = row.insertCell(0);
        const teamNameCell = row.insertCell(1);
        const prizeCell = row.insertCell(2);
        const imageCell = row.insertCell(3);

        rankCell.textContent = winner.rank;
        teamNameCell.textContent = winner.teamName;
        prizeCell.textContent = winner.prize;
        const image = document.createElement("img");
        image.src = winner.image;
        image.alt = winner.teamName;
        imageCell.appendChild(image);
    });
});
