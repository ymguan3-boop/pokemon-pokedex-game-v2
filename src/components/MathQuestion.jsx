import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MathGenerator } from '../utils/mathGenerator';

const MathQuestion = ({ difficulty, onAnswer, className = "" }) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [mathGenerator] = useState(new MathGenerator(difficulty));

  useEffect(() => {
    generateNewQuestion();
  }, [difficulty]);

  const generateNewQuestion = () => {
    const question = mathGenerator.generateQuestion();
    setCurrentQuestion(question);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleAnswerSelect = (answer) => {
    if (showResult) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    const isCorrect = answer === currentQuestion.correctAnswer;
    
    setTimeout(() => {
      onAnswer(isCorrect);
      generateNewQuestion();
    }, 1500);
  };

  if (!currentQuestion) {
    return (
      <Card className={className}>
        <CardContent className="p-4 text-center">
          <div className="text-orange-600">載入題目中...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardContent className="p-4">
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold mb-2 text-orange-700">
            <span className="chinese-with-pinyin">
              <span className="pinyin-text">ㄕㄨˋ ㄒㄩㄝˊ ㄊㄧˊ ㄇㄨˋ</span>
              <span className="chinese-text">數學題目</span>
            </span>
          </h3>
          
          <div className="bg-orange-50 p-3 rounded-lg mb-3 border-2 border-orange-200">
            <div className="text-2xl font-bold text-orange-800 mb-1">
              {currentQuestion.question}
            </div>
            <div className="text-xs text-orange-600">
              {currentQuestion.questionPinyin}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {currentQuestion.options.map((option, index) => {
            let buttonClass = "h-12 text-lg font-semibold transition-all duration-200 rounded-lg";
            
            if (showResult) {
              if (option === currentQuestion.correctAnswer) {
                buttonClass += " bg-green-500 text-white";
              } else if (option === selectedAnswer) {
                buttonClass += " bg-red-500 text-white";
              } else {
                buttonClass += " bg-gray-200 text-gray-500";
              }
            } else {
              buttonClass += " bg-white border-2 border-orange-200 hover:border-orange-400 hover:bg-orange-50 text-gray-800";
            }

            return (
              <Button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={buttonClass}
                disabled={showResult}
              >
                {option}
              </Button>
            );
          })}
        </div>

        {showResult && (
          <div className="mt-3 text-center">
            {selectedAnswer === currentQuestion.correctAnswer ? (
              <div className="text-green-600 font-bold text-base">
                <span className="chinese-with-pinyin">
                  <span className="pinyin-text">ㄉㄚˊ ㄉㄨㄟˋ ㄌㄜ˙！ㄊㄞˋ ㄅㄤˋ ㄌㄜ˙！</span>
                  <span className="chinese-text">答對了！太棒了！</span>
                </span>
              </div>
            ) : (
              <div className="text-red-600 font-bold text-base">
                <span className="chinese-with-pinyin">
                  <span className="pinyin-text">ㄉㄚˊ ㄘㄨㄛˋ ㄌㄜ˙，ㄗㄞˋ ㄕˋ ㄕˋ ㄎㄢˋ！</span>
                  <span className="chinese-text">答錯了，再試試看！</span>
                </span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MathQuestion;

