$(document).ready(function() {
    // Update game settings
    $('#updateSettings').click(function() {
        const difficulty = $('#difficulty').val();
        alert(`Difficulty set to: ${difficulty}`);
        
        // Update difficulty (simple example - you could add complexity)
        localStorage.setItem("gameDifficulty", difficulty);
    });

    // Mock scoreboard data
    const mockScores = [
        { name: "Player 1", score: 50 },
        { name: "Player 2", score: 30 },
        { name: "Player 3", score: 70 }
    ];

    // Populate scoreboard
    mockScores.forEach(player => {
        $('#scoreList').append(`<li>${player.name}: ${player.score}</li>`);
    });
});
