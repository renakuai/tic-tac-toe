
//module for single gameboard
const gameboard = (() => {
  let playerTwoBoard = [];
  let playerOneBoard = [];
  return {
    playerOneBoard,
    playerTwoBoard,
  }
})();

//module for gameflow
const game = (() => {
  let countRound = () => {
    return i++;
  }
  //prevent putting markers in taking same spot
  const preventSameSelection = (element) => {
    let selected = element.target.id;
    if (gameboard.playerOneBoard.includes(selected) || gameboard.playerTwoBoard.includes(selected)) {
      return
    }
    else {
      _markBoard(selected);
    }
  }
  //function to mark clicked cell properly + store in array
  const _markBoard = (selected) => {
    let selectedCell = document.getElementById(selected);
    selectedCell.classList.add('selected');
    let round = +countRound();
    if (round % 2 !== 0){
      setTimeout(showTurn(round), 10000);
      selectedCell.classList.add('yellow');
      selectedCell.textContent = playersFactory.playerOneChar[0];
      gameboard.playerOneBoard.push(selected);
    }
    else if (round % 2 == 0){
      setTimeout(showTurn(round), 10000);
      selectedCell.classList.add('blue');
      selectedCell.textContent = playersFactory.playerTwoChar[0];
      gameboard.playerTwoBoard.push(selected);
    }
  }
  //function to keep check whether round is won or not
  const checkGame = () => {
    let arrayOne = gameboard.playerOneBoard;
    let arrayTwo = gameboard.playerTwoBoard;
    let winningCombination = {
      comb1: ['1','2','3'],
      comb2: ['4','5','6'],
      comb3: ['7', '8', '9'],
      comb4: ['1', '4', '7'],
      comb5: ['2', '5', '8'],
      comb6: ['3', '6', '9'],
      comb7: ['1', '5', '9'],
      comb8: ['7', '5', '3'],
    }
    for (let key in winningCombination) {
      let arrayComb = winningCombination[key];
      let oneIncludes = arrayComb.every(element => arrayOne.includes(element));
      let twoIncludes = arrayComb.every(element => arrayTwo.includes(element));
      if (oneIncludes == true) {
        const winner = "Player 1 is the winner!";
        gameEnd(winner);
      }
      else if (twoIncludes == true) {
        const winner = "Player 2 is the winner!";
        gameEnd(winner);
      }
      else if (oneIncludes == false && twoIncludes == false && i == 10) {
          const winner = "It's a tie!"
          gameEnd(winner);
      }
    }
  }
  const showTurn = (round) => {
    const p2section = document.querySelector('.player2');
    const p1section = document.querySelector('.player1');
    if (round % 2 == 0){
      p1section.classList.add('yourturn');
      document.querySelector('.arrow1').style.display = 'inline';
      p2section.classList.remove('yourturn');
      document.querySelector('.arrow2').style.display = 'none';
    }
    else if (round % 2 !== 0){
      p2section.classList.add('yourturn');
      document.querySelector('.arrow2').style.display = 'inline';
      p1section.classList.remove('yourturn');
      document.querySelector('.arrow1').style.display = 'none';
    }
  }
  //function to restart game / clear board
  const gameEnd = (winner) => {
    let results = document.querySelector('.results');
    let restartMsg = document.querySelector('.restartMsg');
    restartMsg.textContent = "Game over! " + winner;
    let restartBtn = document.createElement('div');
    restartBtn.classList.add('restartBtn');
    restartBtn.textContent = 'Restart Game';
    document.querySelector('.yourturn').classList.remove('yourturn');
    document.querySelector('.arrow2').style.display = "none";
    document.querySelector('.arrow1').style.display = "none";
    results.appendChild(restartBtn);
    const gamecontainer = document.querySelector('.game-container');
    gamecontainer.style.opacity = "50%";
    restartBtn.addEventListener('click', () => {
      gameboard.playerOneBoard.length = 0;
      gameboard.playerTwoBoard.length = 0;
      playersFactory.playerOneChar.length = 0;
      playersFactory.playerTwoChar.length = 0;
      i = 1;
      document.querySelector('.selection-container').style.display = 'flex';
      let yellow = document.querySelectorAll('.yellow');
      yellow.forEach((cell) => {
        cell.classList.remove('yellow');
      })
      let blue = document.querySelectorAll('.blue');
      blue.forEach((cell) => {
        cell.classList.remove('blue');
      })
      let allCells = document.querySelectorAll('.cell');
        allCells.forEach((cell) => {
          cell.textContent = '';
      })
      const gamecontainer = document.querySelector('.game-container');
      gamecontainer.style.display = "none";
      const players = document.querySelector('.selection-picker');
      players.style.display = "flex";
      const selectedchars = document.querySelectorAll('.selected-state');
      selectedchars.forEach((cell) => {
        cell.classList.remove('selected-state');
      })
      document.querySelector(".p1-select-text").textContent = '';
      document.querySelector(".p2-select-text").textContent = '';
      document.querySelector(".restartMsg").textContent = '';
      document.querySelector(".restartBtn").remove();
      gamecontainer.style.opacity = "100%";
    })}
  return {
    preventSameSelection,
    checkGame,
    showTurn,
  }
})();

let i = 1;
//module for player selection
const playersFactory = (() => {
  let playerOneChar = [];
  let playerTwoChar = [];
  //letting players pick characters
  const pickCharFlow = (element) => {
    let pickedId = element.target.id;
    let picked = element.target;
    if (pickedId == 'one-cat' || pickedId == 'one-dog' || pickedId == 'one-monkey') {
      if (playerOneChar.length == 0) {
        playerOneSelect(picked);
        console.log('picked');
      }
      else if (playerOneChar.length == 1) {
        let p1text = document.querySelector('.p1-select-text');
        p1text.textContent = '';
        let prevSelected = document.querySelector('.p1.selected-state');
        prevSelected.classList.remove('selected-state');
        playerOneChar = [];
        playerOneSelect(picked);
      }
    }
    else if (pickedId == 'two-cat' || pickedId == 'two-dog' || pickedId == 'two-monkey') {
      if (playerTwoChar.length == 0) {
        playerTwoSelect(picked);
      }
      else if (playerTwoChar.length == 1) {
        let p2text = document.querySelector('.p2-select-text');
        p2text.textContent = '';
        let prevSelected2 = document.querySelector('.p2.selected-state');
        prevSelected2.classList.remove('selected-state');
        playerTwoChar = [];
        playerTwoSelect(picked);
      }
    }
  }
  const playerOneSelect = (picked) => {
    picked.classList.add('selected-state');
    let desc = document.querySelector('.p1-select-text');
    playerOneChar.push(picked.textContent);
    desc.textContent = 'Player 1 selects ' + playerOneChar[0];
    displayStartBtn();
  }
  const playerTwoSelect = (picked) => {
    picked.classList.add('selected-state');
    let desc2 = document.querySelector('.p2-select-text');
    playerTwoChar.push(picked.textContent);
    desc2.textContent = 'Player 2 selects ' + playerTwoChar[0];
    displayStartBtn();
  }
  const displayStartBtn = () => {
    let startBtnExists = document.querySelector('.start-btn');
    if (playerOneChar.length == 1 && playerTwoChar.length == 1 && startBtnExists == null) {
      let btn = document.createElement('div');
      btn.classList.add('start-btn');
      btn.textContent = 'Start Game!';
      let container = document.querySelector('.selection-container');
      container.appendChild(btn);
      const startBtn = document.querySelector('.start-btn');
      startBtn.addEventListener('click', () => {
        btn.remove();
        document.querySelector('.selection-container').style.display = 'none';
        const players = document.querySelector('.selection-picker');
        players.style.display = "none";
        const gamecontainer = document.querySelector('.game-container');
        gamecontainer.style.display = "flex";
        const player1char = document.querySelector('.player1-selection');
        player1char.textContent = playerOneChar[0];
        const player2char = document.querySelector('.player2-selection');
        player2char.textContent = playerTwoChar[0];
        const p2section = document.querySelector('.player2');
        const p1section = document.querySelector('.player1');
        p1section.classList.add('yourturn');
        document.querySelector('.arrow1').style.display = 'inline';
        p2section.classList.remove('yourturn');
      })
    }
  }
  return {
    pickCharFlow,
    playerOneChar,
    playerTwoChar,
  }
})();

//click event to start marking cells
const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
      cell.addEventListener('click', (element) => {
        const restartBtn = document.querySelector('.restartBtn')
        if (restartBtn == null) {
          game.preventSameSelection(element);
          game.checkGame();
        }
        else if (restartBtn !== null) {
          element.stopPropagation();
        }
    })
})

//click event to select players
const chars = document.querySelectorAll('.char');
  chars.forEach((char) => {
    char.addEventListener('click', (element) => {
      playersFactory.pickCharFlow(element);
    })
})

