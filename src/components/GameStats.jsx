import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Target, Zap } from 'lucide-react';
import { evolutionRequirements } from '../data/pokemonData';

const GameStats = ({ 
  correctAnswers, 
  consecutiveCorrect, 
  totalQuestions, 
  currentEvolution, 
  maxEvolution,
  className = "" 
}) => {
  const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
  
  const progressToNextEvolution = Math.max(
    correctAnswers / evolutionRequirements.TOTAL_CORRECT,
    consecutiveCorrect / evolutionRequirements.CONSECUTIVE_CORRECT
  );

  return (
    <Card className={className}>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-3 text-center">
          遊戲統計
        </h3>
        <div className="text-xs text-gray-600 text-center mb-4">
          ㄧㄡˊ ㄒㄧˋ ㄊㄨㄥˇ ㄐㄧˋ
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">答對題數</span>
            </div>
            <span className="font-bold text-green-600">{correctAnswers}</span>
          </div>
          <div className="text-xs text-gray-500 text-center">
            ㄉㄚˊ ㄉㄨㄟˋ ㄊㄧˊ ㄕㄨˋ
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-blue-500" />
              <span className="text-sm">連續答對</span>
            </div>
            <span className="font-bold text-blue-600">{consecutiveCorrect}</span>
          </div>
          <div className="text-xs text-gray-500 text-center">
            ㄌㄧㄢˊ ㄒㄩˋ ㄉㄚˊ ㄉㄨㄟˋ
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4 text-purple-500" />
              <span className="text-sm">總題數</span>
            </div>
            <span className="font-bold text-purple-600">{totalQuestions}</span>
          </div>
          <div className="text-xs text-gray-500 text-center">
            ㄗㄨㄥˇ ㄊㄧˊ ㄕㄨˋ
          </div>

          {totalQuestions > 0 && (
            <>
              <div className="flex items-center justify-between">
                <span className="text-sm">正確率</span>
                <span className="font-bold text-indigo-600">{accuracy}%</span>
              </div>
              <div className="text-xs text-gray-500 text-center">
                ㄓㄥˋ ㄑㄩㄝˋ ㄌㄩˋ
              </div>
            </>
          )}

          {currentEvolution < maxEvolution - 1 && (
            <>
              <div className="mt-4 pt-3 border-t">
                <div className="text-sm font-semibold mb-2">進化進度</div>
                <div className="text-xs text-gray-500 mb-2">ㄐㄧㄣˋ ㄏㄨㄚˋ ㄐㄧㄣˋ ㄉㄨˋ</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(progressToNextEvolution * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  需要：答對{evolutionRequirements.TOTAL_CORRECT}題 或 連續答對{evolutionRequirements.CONSECUTIVE_CORRECT}題
                </div>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default GameStats;

