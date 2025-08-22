import React from 'react';
import './App.css';
import { useGameState } from './hooks/useGameState';
import { gameStates } from './data/pokemonData';
import GameHeader from './components/GameHeader';
import MainMenu from './components/MainMenu';
import DifficultySelector from './components/DifficultySelector';
import PokemonSelector from './components/PokemonSelector';
import GamePlay from './components/GamePlay';
import Pokedex from './components/Pokedex';

function App() {
  const {
    gameState,
    difficulty,
    selectedChain,
    currentEvolution,
    unlockedStages,
    correctAnswers,
    consecutiveCorrect,
    totalQuestions,
    showEvolution,
    startGame,
    selectDifficulty,
    selectPokemon,
    answerQuestion,
    resetGame,
    goToPokedex,
    backToGame,
    backToDifficulty,
    isPokemonUnlocked,
    getUnlockedStages,
    resetProgress
  } = useGameState();

  const renderCurrentScreen = () => {
    switch (gameState) {
      case gameStates.MENU:
        return (
          <MainMenu
            onStartGame={startGame}
            onViewPokedex={goToPokedex}
          />
        );

      case gameStates.DIFFICULTY_SELECT:
        return (
          <DifficultySelector
            onSelectDifficulty={selectDifficulty}
            onPokedex={goToPokedex}
          />
        );

      case gameStates.POKEMON_SELECT:
        return (
          <PokemonSelector
            difficulty={difficulty}
            onSelectPokemon={selectPokemon}
            onBack={backToDifficulty}
            getUnlockedStages={getUnlockedStages}
            onPokedex={goToPokedex}
          />
        );

      case gameStates.PLAYING:
        return (
          <GamePlay
            difficulty={difficulty}
            selectedChain={selectedChain}
            currentEvolution={currentEvolution}
            unlockedStages={unlockedStages}
            correctAnswers={correctAnswers}
            consecutiveCorrect={consecutiveCorrect}
            totalQuestions={totalQuestions}
            showEvolution={showEvolution}
            onAnswer={answerQuestion}
            onBack={backToDifficulty}
            onPokedex={goToPokedex}
          />
        );

      case gameStates.POKEDEX:
        return (
          <Pokedex
            onBack={selectedChain ? backToGame : resetGame}
            isPokemonUnlocked={isPokemonUnlocked}
            getUnlockedStages={getUnlockedStages}
          />
        );

      default:
        return (
          <MainMenu
            onStartGame={startGame}
            onViewPokedex={goToPokedex}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-red-100">
      <div className="container mx-auto px-4 py-6">
        <GameHeader />
        {renderCurrentScreen()}
      </div>
    </div>
  );
}

export default App;

