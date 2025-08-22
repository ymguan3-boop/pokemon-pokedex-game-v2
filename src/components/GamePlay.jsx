import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Book } from 'lucide-react';
import MathQuestion from './MathQuestion';

const GamePlay = ({ 
  difficulty, 
  selectedChain, 
  currentEvolution, 
  unlockedStages, 
  correctAnswers,
  consecutiveCorrect,
  totalQuestions,
  showEvolution,
  onAnswer, 
  onBack, 
  onPokedex 
}) => {
  const currentPokemon = selectedChain.chain[currentEvolution];
  
  return (
    <div className="max-w-md mx-auto space-y-4 min-h-screen flex flex-col">
      {/* 頂部導航 - 簡化 */}
      <div className="flex items-center justify-between p-2">
        <Button
          onClick={onBack}
          variant="outline"
          size="sm"
          className="flex items-center space-x-1 bg-orange-100 border-orange-300 text-orange-700 hover:bg-orange-200"
        >
          <ArrowLeft className="w-3 h-3" />
          <span className="text-sm">返回</span>
        </Button>
        
        <Button
          onClick={onPokedex}
          variant="outline"
          size="sm"
          className="flex items-center space-x-1 bg-red-500 text-white hover:bg-red-600"
        >
          <Book className="w-3 h-3" />
          <span className="text-sm">圖鑑</span>
        </Button>
      </div>

      {/* 進化動畫提示 */}
      {showEvolution && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg text-center animate-pulse mx-4">
            <div className="text-xl font-bold text-yellow-600 mb-3">
              <span className="chinese-with-pinyin">
                <span className="pinyin-text">🌟 ㄐㄧㄣˋ ㄏㄨㄚˋ ㄓㄨㄥ... 🌟</span>
                <span className="chinese-text">🌟 進化中... 🌟</span>
              </span>
            </div>
            <div className="text-base">
              <span className="chinese-with-pinyin">
                <span className="pinyin-text">{currentPokemon.name} ㄓㄥˋ ㄗㄞˋ ㄐㄧㄣˋ ㄏㄨㄚˋ！</span>
                <span className="chinese-text">{currentPokemon.name} 正在進化！</span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 當前寶可夢顯示 - 放大並居中 */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-4 mx-2">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-orange-700 mb-2">
            <span className="chinese-with-pinyin">
              <span className="pinyin-text">ㄉㄤ ㄑㄧㄢˊ ㄅㄠˇ ㄎㄜˇ ㄇㄥˋ</span>
              <span className="chinese-text">當前寶可夢</span>
            </span>
          </h2>
          <h3 className="text-xl font-bold text-red-600">
            {currentPokemon.name}
          </h3>
        </div>
        
        <div className="w-48 h-48 flex items-center justify-center bg-white rounded-full shadow-lg mb-4">
          <img
            src={currentPokemon.image}
            alt={currentPokemon.name}
            className="w-40 h-40 object-contain"
          />
        </div>
        
        <div className="text-sm text-gray-600 text-center">
          <span className="chinese-with-pinyin">
            <span className="pinyin-text">ㄓㄥˋ ㄑㄩㄝˋ ㄉㄚˊ ㄊㄧˊ ㄐㄧㄣˋ ㄏㄨㄚˋ</span>
            <span className="chinese-text">正確答題進化</span>
          </span>
        </div>
      </div>

      {/* 數學題目 - 適配手機 */}
      <div className="bg-white rounded-lg border-2 border-orange-200 p-4 mx-2 mb-4">
        <MathQuestion
          difficulty={difficulty}
          onAnswer={onAnswer}
        />
      </div>
    </div>
  );
};

export default GamePlay;

