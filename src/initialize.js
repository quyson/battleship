function initializePage(){
    const body = document.querySelector('body');
    const mainContainer = document.createElement('div');
    const title = document.createElement('div');
    const informationTag = document.createElement('div');
    const boardContainer = document.createElement('div');
    const board1 = document.createElement('div');
    const board2 = document.createElement('div');
    const buttonContainer = document.createElement('div');
    const restartButton = document.createElement('button');
    const startButton = document.createElement('button');
    mainContainer.className = 'mainContainer';
    title.className = 'title';
    informationTag.className = 'informationTag';
    boardContainer.className = 'boardContainer';
    board1.className = 'board';
    board2.className = 'board';
    buttonContainer.className = 'buttonContainer';
    restartButton.className = 'restartButton';
    boardContainer.append(board1, board2);
    buttonContainer.append(startButton, restartButton);
    mainContainer.append(title, informationTag, boardContainer, buttonContainer);
    body.append(mainContainer);
    title.textContent = "Battleship!";
    informationTag.textContent = "Press Start to Play";
    startButton.textContent = 'Start';
    restartButton.textContent = 'Restart';
}

export {initializePage}