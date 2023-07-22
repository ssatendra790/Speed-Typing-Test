const base_url = `ws://${window.location.host}'${window.location.pathname}`;

const ws = new WebSocket(base_url);

ws.onopen = function(event) {
    console.log("connected");
    document.getElementById('waiting-screen').style.display = 'block';
    ws.send(JSON.stringify({ type: 'join_game' }));
};

ws.onclose = function(event) {
    console.error('socket closed unexpectedly');
};

ws.onmessage = function (event) {
    const data = JSON.parse(event.data);

    if (data.type === 'start_game') {
        startGame(data.common_paragraph, data.players);
    } else if (data.type === 'update') {
        updatePlayersProgress(data.players);
    }
};

function startGame(commonParagraph, players) {
    document.getElementById('waiting-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';

    document.getElementById('common-paragraph').textContent = commonParagraph;

    let isCompleted = false;
    document.getElementById('player-input').addEventListener('input', function () {
        if(!isCompleted){
            const playerInput = this.value;
            const playerData = { type: 'player_progress', words_typed: playerInput.split(' ').length };

            if (playerInput.trim() === commonParagraph.trim()) {
                isCompleted = true;
                playerData.completed = true;
                document.getElementById('completion-message').textContent = 'Congratulations! You have completed the text.';

            }

            ws.send(JSON.stringify(playerData));
        }
    
    });

    players.forEach(player => {
        const progressId = `progress-${player.id}`;
        const progressBar = document.getElementById(progressId);
        progressBar.style.width = `${(player.words_typed / 5) * 20}%`;
    });
}

function updatePlayersProgress(players) {
    players.forEach(player => {
        const progressId = `progress-${player.id}`;
        const progressBar = document.getElementById(progressId);
        progressBar.style.width = `${(player.words_typed / 5) * 20}%`;
    });
}