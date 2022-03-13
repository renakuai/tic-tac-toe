# tic-tac-toe
A browser game to showcase understanding of prototype chain, scope + closures, and the module pattern

*Planning out the modules*
I decided to work with 3 modules:
- Gameboard Module: To house player selections in arrays
- Game Module: To control the flow of the game. This module includes functions for not allowing the same space to be selected, marking pieces on the board, checking the status of the game during each play, displaying the current turn, and displaying the end / winner state.
- Players Module: To control the flow of player selections at the start of the game. This module includes functions for selecting a character initially, changing characters, and displaying the Start Game button once all players have selected their characters.

*Challenges*
- DOM Manipulation: There was a lot of DOM manipulation in this project and it got a little messy and confusing due to me still trying to work on logical naming of items
- Public v Private functions: This was my first time playing with closures and IIFEs and it was a little difficult at the beginning to understand which functions I need to have access to on a global level v on a private level. 
- Factory Functions: I don't think I quite understand the purpose of factory functions and how to utilize them properly at this point yet. I understand at a conceptual level that Factory Functions are better than constructors and allow you to use one function for multiple entities, but I didn't quite use them for this project.


