import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Book } from 'lucide-react';

const MainMenu = ({ onStartGame, onViewPokedex }) => {
  return (
    <Card className="max-w-md mx-auto bg-gradient-to-br from-orange-100 to-yellow-100 border-4 border-orange-300">
      <CardContent className="p-8 text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">🎮</div>
          <h1 className="text-3xl font-bold text-red-700 mb-2">
            <span className="chinese-with-pinyin">
              <span className="pinyin-text">ㄏㄨㄢ ㄧㄥˊ ㄌㄞˊ ㄉㄠˋ</span>
              <span className="chinese-text">歡迎來到</span>
            </span>
          </h1>
          <h2 className="text-2xl font-bold text-orange-700 mb-2">
            <span className="chinese-with-pinyin">
              <span className="pinyin-text">ㄅㄠˇ ㄎㄜˇ ㄇㄥˋ ㄕㄨˋ ㄒㄩㄝˊ ㄊㄨˊ ㄐㄧㄢˋ</span>
              <span className="chinese-text">寶可夢數學圖鑑</span>
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          <Button
            onClick={onStartGame}
            className="w-full h-16 text-xl font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Play className="w-6 h-6 mr-3" />
            <div>
              <span className="chinese-with-pinyin">
                <span className="pinyin-text">ㄎㄞ ㄕˇ ㄧㄡˊ ㄒㄧˋ</span>
                <span className="chinese-text">開始遊戲</span>
              </span>
            </div>
          </Button>

          <Button
            onClick={onViewPokedex}
            variant="outline"
            className="w-full h-16 text-xl font-bold border-2 border-red-400 text-red-600 hover:bg-red-50 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Book className="w-6 h-6 mr-3" />
            <div>
              <span className="chinese-with-pinyin">
                <span className="pinyin-text">ㄔㄚˊ ㄎㄢˋ ㄊㄨˊ ㄐㄧㄢˋ</span>
                <span className="chinese-text">查看圖鑑</span>
              </span>
            </div>
          </Button>
        </div>

        <div className="mt-8 text-sm text-gray-600">
          <span className="chinese-with-pinyin">
            <span className="pinyin-text">ㄕˋ ㄏㄜˊ ㄧㄡˋ ㄦˊ ㄩㄢˊ ㄒㄧㄠˇ ㄆㄥˊ ㄧㄡˇ ㄉㄜ˙ ㄕㄨˋ ㄒㄩㄝˊ ㄧㄡˊ ㄒㄧˋ</span>
            <span className="chinese-text">適合幼兒園小朋友的數學遊戲</span>
          </span>
        </div>

        <div className="mt-4 text-xs text-red-600 font-semibold border-t pt-4">
          【本遊戲為測試使用，請勿用於販售用途!】
        </div>
      </CardContent>
    </Card>
  );
};

export default MainMenu;

