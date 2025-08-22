import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book } from 'lucide-react';
import { difficultyLevels } from '../data/pokemonData';

const DifficultySelector = ({ onSelectDifficulty, onPokedex }) => {
  return (
    <Card className="max-w-2xl mx-auto bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200">
      <CardContent className="p-6">
        <div className="flex justify-end mb-4">
          <Button
            onClick={onPokedex}
            variant="outline"
            className="flex items-center space-x-2 bg-red-500 text-white hover:bg-red-600"
          >
            <Book className="w-4 h-4" />
            <div className="text-center">
              <div className="chinese-with-pinyin">
                <span className="pinyin-text">ㄔㄚˊ ㄎㄢˋ ㄊㄨˊ ㄐㄧㄢˋ</span>
                <span className="chinese-text">查看圖鑑</span>
              </div>
            </div>
          </Button>
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-2 text-orange-700">
          <span className="chinese-with-pinyin">
            <span className="pinyin-text">ㄒㄩㄢˇ ㄗㄜˊ ㄋㄢˊ ㄉㄨˋ ㄐㄧˊ ㄅㄧㄝˊ</span>
            <span className="chinese-text">選擇難度級別</span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(difficultyLevels).map(([key, level]) => (
            <Button
              key={key}
              onClick={() => onSelectDifficulty(key)}
              className="h-auto p-6 flex flex-col items-center space-y-3 bg-white border-2 border-orange-200 hover:border-orange-400 hover:bg-orange-50 text-gray-800"
              variant="outline"
            >
              <div className="text-xl font-bold">
                <span className="chinese-with-pinyin">
                  <span className="pinyin-text">{level.pinyin}</span>
                  <span className="chinese-text">{level.name}</span>
                </span>
              </div>
              <div className="text-sm text-center">
                <span className="chinese-with-pinyin">
                  <span className="pinyin-text">{level.descriptionPinyin}</span>
                  <span className="chinese-text">{level.description}</span>
                </span>
              </div>
              <div className="text-xs text-red-600">
                <span className="chinese-with-pinyin">
                  <span className="pinyin-text">{level.chains.length} ㄍㄜˋ ㄐㄧㄣˋ ㄏㄨㄚˋ ㄌㄧㄢˋ</span>
                  <span className="chinese-text">{level.chains.length} 個進化鏈</span>
                </span>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DifficultySelector;

