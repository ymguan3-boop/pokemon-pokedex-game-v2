import { useState, useCallback } from 'react';
import { gameStates, evolutionRequirements } from '../data/pokemonData';
import { usePokedexProgress } from './usePokedexProgress';

export const useGameState = () => {
  const [gameState, setGameState] = useState(gameStates.MENU);
  const [difficulty, setDifficulty] = useState(null);
  const [selectedChain, setSelectedChain] = useState(null);
  const [currentEvolution, setCurrentEvolution] = useState(0);
  const [unlockedStages, setUnlockedStages] = useState(1);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [showEvolution, setShowEvolution] = useState(false);

  const { unlockPokemon, isPokemonUnlocked, getUnlockedStages, resetProgress } = usePokedexProgress();

  const startGame = useCallback(() => {
    setGameState(gameStates.DIFFICULTY_SELECT);
  }, []);

  const selectDifficulty = useCallback((selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setGameState(gameStates.POKEMON_SELECT);
  }, []);

  const selectPokemon = useCallback((chain) => {
    setSelectedChain(chain);
    
    // 檢查該進化鏈的解鎖進度
    const unlockedStagesCount = Math.max(1, getUnlockedStages(chain.id));
    const currentEvo = Math.min(unlockedStagesCount - 1, chain.chain.length - 1);
    
    setCurrentEvolution(currentEvo);
    setUnlockedStages(unlockedStagesCount);
    setCorrectAnswers(0);
    setConsecutiveCorrect(0);
    setTotalQuestions(0);
    setGameState(gameStates.PLAYING);
  }, [getUnlockedStages]);

  const answerQuestion = useCallback((isCorrect) => {
    setTotalQuestions(prev => prev + 1);
    
    if (isCorrect) {
      const newCorrectAnswers = correctAnswers + 1;
      const newConsecutiveCorrect = consecutiveCorrect + 1;
      
      setCorrectAnswers(newCorrectAnswers);
      setConsecutiveCorrect(newConsecutiveCorrect);

      // 檢查是否可以進化
      const canEvolve = (
        newCorrectAnswers >= evolutionRequirements.TOTAL_CORRECT ||
        newConsecutiveCorrect >= evolutionRequirements.CONSECUTIVE_CORRECT
      ) && currentEvolution < selectedChain.chain.length - 1;

      if (canEvolve) {
        setShowEvolution(true);
        setTimeout(() => {
          const newEvolution = currentEvolution + 1;
          const newUnlockedStages = newEvolution + 1;
          
          setCurrentEvolution(newEvolution);
          setUnlockedStages(newUnlockedStages);
          setCorrectAnswers(0);
          setConsecutiveCorrect(0);
          setShowEvolution(false);
          
          // 解鎖新的寶可夢階段
          unlockPokemon(selectedChain.id, newUnlockedStages);
          
          // 檢查是否達到最終進化
          if (newEvolution === selectedChain.chain.length - 1) {
            alert(`恭喜！${selectedChain.chain[newEvolution].name} 已達到最終進化！`);
          }
        }, 2000);
      }
    } else {
      setConsecutiveCorrect(0);
    }
  }, [correctAnswers, consecutiveCorrect, currentEvolution, selectedChain, unlockPokemon]);

  const resetGame = useCallback(() => {
    setGameState(gameStates.MENU);
    setDifficulty(null);
    setSelectedChain(null);
    setCurrentEvolution(0);
    setUnlockedStages(1);
    setCorrectAnswers(0);
    setConsecutiveCorrect(0);
    setTotalQuestions(0);
    setShowEvolution(false);
  }, []);

  const goToPokedex = useCallback(() => {
    setGameState(gameStates.POKEDEX);
  }, []);

  const backToGame = useCallback(() => {
    setGameState(gameStates.PLAYING);
  }, []);

  const backToDifficulty = useCallback(() => {
    setGameState(gameStates.DIFFICULTY_SELECT);
    setSelectedChain(null);
    setCurrentEvolution(0);
    setUnlockedStages(1);
    setCorrectAnswers(0);
    setConsecutiveCorrect(0);
    setTotalQuestions(0);
  }, []);

  return {
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
    // 圖鑑進度相關
    isPokemonUnlocked,
    getUnlockedStages,
    resetProgress
  };
};

