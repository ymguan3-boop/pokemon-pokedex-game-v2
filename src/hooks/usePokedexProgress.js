import { useState, useEffect } from 'react';

export const usePokedexProgress = () => {
  const [unlockedPokemon, setUnlockedPokemon] = useState(() => {
    // 從localStorage讀取已解鎖的寶可夢
    const saved = localStorage.getItem('pokemon-pokedex-progress');
    return saved ? JSON.parse(saved) : {};
  });

  // 保存進度到localStorage
  useEffect(() => {
    localStorage.setItem('pokemon-pokedex-progress', JSON.stringify(unlockedPokemon));
  }, [unlockedPokemon]);

  // 解鎖寶可夢
  const unlockPokemon = (chainId, evolutionStage) => {
    setUnlockedPokemon(prev => ({
      ...prev,
      [chainId]: Math.max(prev[chainId] || 0, evolutionStage)
    }));
  };

  // 檢查寶可夢是否已解鎖
  const isPokemonUnlocked = (chainId, evolutionStage) => {
    return (unlockedPokemon[chainId] || 0) >= evolutionStage;
  };

  // 獲取進化鏈的解鎖階段數
  const getUnlockedStages = (chainId) => {
    return unlockedPokemon[chainId] || 0;
  };

  // 重置所有進度
  const resetProgress = () => {
    setUnlockedPokemon({});
    localStorage.removeItem('pokemon-pokedex-progress');
  };

  return {
    unlockedPokemon,
    unlockPokemon,
    isPokemonUnlocked,
    getUnlockedStages,
    resetProgress
  };
};

