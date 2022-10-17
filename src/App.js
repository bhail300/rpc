import rock from "./images/rocks.png"
import paper from "./images/parchment.png"
import scissors from "./images/2492_U1RVRElPIERBTiAwMDgtNjY.jpg"
import q_mark1 from "./images/question-mark.png"
import q_mark2 from "./images/question-mark.png"
import React, { useState } from "react";
import './App.css';

const choices = [rock, paper, scissors];

const App = () => {
  const [playerPoints, setPlayerPoints] = useState(0);
  const [compPoints, setCompPoints] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(q_mark1);
  const [compChoice, setCompChoice] = useState(q_mark2);
  const [gameResult, setGameResult] = useState('');

  const createCompChoice = () =>{
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setCompChoice(randomChoice);
  }

  const handleClick = (value) => {
    setPlayerChoice(value)
    createCompChoice()
  }

  const New_Game = () =>{
    setPlayerChoice(q_mark1)
    setCompChoice(q_mark2)
    setPlayerPoints(0)
    setCompPoints(0)
    setGameResult('')
  }

  const Play_Game = () =>{
     if ((compChoice === paper && playerChoice === rock) || (compChoice === scissors && playerChoice === paper) || (compChoice === rock && playerChoice === scissors)){
        setGameResult( 'You lose this round.');
        setCompPoints(compPoints + 1)
      }else if((compChoice === scissors && playerChoice === rock) || (compChoice === rock && playerChoice === paper) || (compChoice === paper && playerChoice === scissors)){
        setGameResult( 'You win this round.');
        setPlayerPoints(playerPoints + 1)
      }else{
        setGameResult( 'This round is a draw.');
      }

      if(playerPoints === 5){
        setGameResult('Player wins the game!')
        New_Game();
      }
      
      if(compPoints === 5){
        setGameResult('Computer wins the game.')
        New_Game();
      }
  };

  return (
    <main id="main-div">
      <header>
       <h1>Rock, Paper, Scissors Game</h1>
      </header>
        <section >
          <article id='buttons' className='column'>
            <div id='new-button'>
              <button onClick={New_Game}><b>New Game</b></button>
            </div>
            <div id='play-button'>
              <button onClick={Play_Game} ><b>Play Game</b>
            </button>
            </div>
          </article>
          <article id='character-display' className='column'>
           <div id='player-character'>
            <img id='pc' src={playerChoice} alt='question_mark' width='150' height='150'></img>
           </div>
           <div id='computer-character'>
             <img src={compChoice} alt='question_mark' width='150' height='150'></img>
           </div>
          </article>
          <article id="result">
            <p>{gameResult}</p>
          </article>
          <article id='scores' className='column'> 
            <div id='player-score'>
              <p><b>Player score: {playerPoints}</b></p>
            </div>
            <div id='computer-score'>
              <p><b>Computer score: {compPoints}</b></p>
            </div>
          </article>
          <article id='character-select' className='column'>
            <div>
              <button onClick={() => handleClick(rock)}>
               <img src={rock} alt='rock' width='100' height='100'></img>
              </button>
            </div>
            <div>
              <button onClick={() => handleClick(paper)}>
               <img src={paper} alt='paper' width='100' height='100'></img>
              </button>
            </div>
            <div>
              <button onClick={() => handleClick(scissors)}>
               <img id='scissors' src={scissors} alt='scissors' width='100' height='100'></img>
              </button>
            </div>
          </article> 
        </section> 
      </main>        
  );
}

export default App;