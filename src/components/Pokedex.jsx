import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { difficultyLevels } from '../data/pokemonData';
import EvolutionChain from './EvolutionChain';

const Pokedex = ({ onBack, isPokemonUnlocked, getUnlockedStages }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('beginner');
  const [expandedChains, setExpandedChains] = useState({});

  const toggleChainExpansion = (chainId) => {
    setExpandedChains(prev => ({
      ...prev,
      [chainId]: !prev[chainId]
    }));
  };

  const currentLevel = difficultyLevels[selectedDifficulty];

  return (
    <div className="max-w-6xl mx-auto">
      {/* 頂部導航 */}
      <div className="flex items-center mb-6">
        <Button
          onClick={onBack}
          variant="outline"
          className="mr-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span className="chinese-with-pinyin">
            <span className="pinyin-text">ㄈㄢˇ ㄏㄨㄟˊ</span>
            <span className="chinese-text">返回</span>
          </span>
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-purple-800">
            <span className="chinese-with-pinyin">
              <span className="pinyin-text">ㄅㄠˇ ㄎㄜˇ ㄇㄥˋ ㄊㄨˊ ㄐㄧㄢˋ</span>
              <span className="chinese-text">寶可夢圖鑑</span>
            </span>
          </h1>
        </div>
      </div>

      {/* 難度選擇 */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="text-lg font-bold mb-3">
            <span className="chinese-with-pinyin">
              <span className="pinyin-text">ㄒㄩㄢˇ ㄗㄜˊ ㄋㄢˊ ㄉㄨˋ ㄐㄧˊ ㄅㄧㄝˊ</span>
              <span className="chinese-text">選擇難度級別</span>
            </span>
          </h2>
          <div className="flex space-x-2">
            {Object.entries(difficultyLevels).map(([key, level]) => (
              <Button
                key={key}
                onClick={() => setSelectedDifficulty(key)}
                variant={selectedDifficulty === key ? "default" : "outline"}
                className="flex-1"
              >
                <div className="text-center">
                  <div>{level.name}</div>
                  <div className="text-xs">{level.pinyin}</div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 圖鑑內容 */}
      <div className="space-y-4">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-blue-800">
            {currentLevel.name} - {currentLevel.description}
          </h3>
          <div className="text-sm text-blue-600">
            {currentLevel.pinyin} - {currentLevel.descriptionPinyin}
          </div>
        </div>

        {currentLevel.chains.map((chain) => {
          const unlockedStages = getUnlockedStages ? getUnlockedStages(chain.id) : 0;
          const hasAnyUnlocked = unlockedStages > 0;
          
          return (
            <Card key={chain.id} className="overflow-hidden">
              <CardContent className="p-0">
                <Button
                  onClick={() => toggleChainExpansion(chain.id)}
                  variant="ghost"
                  className="w-full p-4 justify-between hover:bg-gray-50"
                >
                  <div className="text-left">
                    <div className="font-semibold text-lg">{chain.name}</div>
                    <div className="text-sm text-gray-600">
                      {chain.chain.length} 階段進化 
                      {hasAnyUnlocked && (
                        <span className="text-green-600 ml-2">
                          (已解鎖 {unlockedStages} 階段)
                        </span>
                      )}
                      {!hasAnyUnlocked && (
                        <span className="text-gray-400 ml-2">
                          (尚未解鎖)
                        </span>
                      )}
                    </div>
                  </div>
                  {expandedChains[chain.id] ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </Button>
                
                {expandedChains[chain.id] && (
                  <div className="p-4 border-t bg-gray-50">
                    <EvolutionChain
                      chain={chain.chain}
                      unlockedStages={unlockedStages}
                      currentEvolution={-1}
                    />
                    
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {chain.chain.map((pokemon, index) => {
                        const isUnlocked = unlockedStages > index;
                        return (
                          <Card key={index} className={`${isUnlocked ? 'bg-white' : 'bg-gray-100'}`}>
                            <CardContent className="p-3 text-center">
                              <h4 className={`font-bold text-lg mb-1 ${isUnlocked ? 'text-gray-800' : 'text-gray-400'}`}>
                                {isUnlocked ? pokemon.name : '???'}
                              </h4>
                              <div className={`text-xs mb-2 ${isUnlocked ? 'text-gray-600' : 'text-gray-400'}`}>
                                {isUnlocked ? pokemon.pinyin : 'ㄨㄟˋ ㄓ ㄉㄠˋ'}
                              </div>
                              {isUnlocked && (
                                <div className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full inline-block mb-2">
                                  {pokemon.type}
                                </div>
                              )}
                              <div className={`text-xs ${isUnlocked ? 'text-gray-500' : 'text-gray-400'}`}>
                                第 {index + 1} 階段 {isUnlocked ? '(已解鎖)' : '(未解鎖)'}
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 說明文字 */}
      <Card className="mt-6 bg-yellow-50 border-yellow-200">
        <CardContent className="p-4">
          <h3 className="font-bold text-yellow-800 mb-2">
            遊戲說明
          </h3>
          <div className="text-sm text-yellow-700 space-y-1">
            <div>• 答對 5 題或連續答對 3 題即可進化</div>
            <div>• 每個寶可夢都有完整的進化鏈</div>
            <div>• 不同難度有不同的數學題目</div>
            <div>• 所有文字都有注音標註，適合幼兒園小朋友</div>
            <div>• 圖鑑會記錄您的遊戲進度，未解鎖的寶可夢顯示為黑影</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Pokedex;

