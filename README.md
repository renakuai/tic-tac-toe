# tic-tac-toe
A browser game to showcase understanding of prototype chain, scope + closures, and the module pattern

<b>Planning out the modules</b>
<br>I decided to work with 3 modules:
- Gameboard Module
- Game Module
- Players Module

<b>Gameboard Module</b>
<br>I used the gameboard module to house player selections in empty arrays to keep track of taken board locations.

<b>Game Module</b>
<br>This module was used to control the flow of the game. It includes functions for:
- Not allowing the same space to be selected
- Marking pieces on the board with the player's chosen character
- Checking the status of the game during each play -- This was a little challenging in that I had first written the winning conditions out using arrays, but decided to go back and refactor because I realized I could employ an object with the winning conditions. I then utilized a loop to loop through each winning combination to see if players had selected all of the winning numbers.
- Visual indicators for the current player's turn
- Displaying whether or not a game is won or tied
- Restarting the game

<b>Players Module</b>
<br>This module was used to control the flow of player selections at the start of the game. It includes functions for:
- Selecting initial characters
- Changing characters
- Displaying the Start Game button once all players have selected their characters.

*Challenges*
- DOM Manipulation: There was a lot of DOM manipulation in this project and it got a little messy and confusing due to me still trying to work on logical naming of items
- Public v Private functions: This was my first time playing with closures and IIFEs and it was a little difficult at the beginning to understand which functions I need to have access to on a global level v on a private level. 
- Factory Functions: I don't think I quite understand the purpose of factory functions and how to utilize them properly at this point yet. I understand at a conceptual level that Factory Functions are better than constructors and allow you to use one function for multiple entities, but I didn't quite use them for this project.




