import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Book } from 'lucide-react';
import EvolutionChain from './EvolutionChain';
import { difficultyLevels } from '../data/pokemonData';

const PokemonSelector = ({ difficulty, onSelectPokemon, onBack, getUnlockedStages, onPokedex }) => {
  const currentLevel = difficultyLevels[difficulty];

  return (
    <Card className="max-w-6xl mx-auto">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <Button
            onClick={onBack}
            variant="outline"
            className="flex items-center space-x-2 bg-green-500 text-white hover:bg-green-600"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="chinese-with-pinyin">
              <span className="pinyin-text">ㄈㄢˇ ㄏㄨㄟˊ</span>
              <span className="chinese-text">返回</span>
            </span>
          </Button>
          
          <Button
            onClick={onPokedex}
            variant="outline"
            className="flex items-center space-x-2 bg-blue-500 text-white hover:bg-blue-600"
          >
            <Book className="w-4 h-4" />
            <div className="text-center">
              <span className="chinese-with-pinyin">
                <span className="pinyin-text">ㄔㄚˊ ㄎㄢˋ ㄊㄨˊ ㄐㄧㄢˋ</span>
                <span className="chinese-text">查看圖鑑</span>
              </span>
            </div>
          </Button>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">
          <span className="chinese-with-pinyin">
            <span className="pinyin-text">ㄒㄩㄢˇ ㄗㄜˊ ㄋㄧˇ ㄉㄜ˙ ㄅㄠˇ ㄎㄜˇ ㄇㄥˋ ㄏㄨㄛˇ ㄅㄢˋ</span>
            <span className="chinese-text">選擇你的寶可夢夥伴</span>
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentLevel.chains.map((chain) => {
            const unlockedStages = getUnlockedStages ? Math.max(1, getUnlockedStages(chain.id)) : 1;
            return (
              <Card key={chain.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-lg">{chain.name}</h3>
                    {unlockedStages > 1 && (
                      <div className="text-sm text-green-600 mt-1">
                        <span className="chinese-with-pinyin">
                          <span className="pinyin-text">ㄧˇ ㄐㄧㄝˇ ㄙㄨㄛˇ {unlockedStages} ㄐㄧㄝ ㄉㄨㄢˋ</span>
                          <span className="chinese-text">已解鎖 {unlockedStages} 階段</span>
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <EvolutionChain
                    chain={chain.chain}
                    unlockedStages={unlockedStages}
                    currentEvolution={Math.min(unlockedStages - 1, chain.chain.length - 1)}
                    className="mb-4"
                  />
                  
                  <Button
                    onClick={() => onSelectPokemon(chain)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    <span className="chinese-with-pinyin">
                      <span className="pinyin-text">ㄒㄩㄢˇ ㄗㄜˊ ㄓㄜˋ ㄍㄜˋ ㄏㄨㄛˇ ㄅㄢˋ</span>
                      <span className="chinese-text">選擇這個夥伴</span>
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default PokemonSelector;

