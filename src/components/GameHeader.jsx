import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import PinyinText from './PinyinText';

const GameHeader = () => {
  return (
    <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-6">
      <CardContent className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-2">
          <PinyinText chinese="寶" pinyin="ㄅㄠˇ" />
          <PinyinText chinese="可" pinyin="ㄎㄜˇ" />
          <PinyinText chinese="夢" pinyin="ㄇㄥˋ" />
          <PinyinText chinese="數" pinyin="ㄕㄨˋ" />
          <PinyinText chinese="學" pinyin="ㄒㄩㄝˊ" />
          <PinyinText chinese="圖" pinyin="ㄊㄨˊ" />
          <PinyinText chinese="鑑" pinyin="ㄐㄧㄢˋ" />
        </h1>
        
        <div className="text-lg mt-4">
          <PinyinText chinese="幼" pinyin="ㄧㄡˋ" />
          <PinyinText chinese="兒" pinyin="ㄦˊ" />
          <PinyinText chinese="園" pinyin="ㄩㄢˊ" />
          <PinyinText chinese="數" pinyin="ㄕㄨˋ" />
          <PinyinText chinese="學" pinyin="ㄒㄩㄝˊ" />
          <PinyinText chinese="遊" pinyin="ㄧㄡˊ" />
          <PinyinText chinese="戲" pinyin="ㄒㄧˋ" />
        </div>
        
        <div className="mt-4 text-sm">
          <PinyinText chinese="製" pinyin="ㄓˋ" />
          <PinyinText chinese="作" pinyin="ㄗㄨㄛˋ" />
          <PinyinText chinese="人" pinyin="ㄖㄣˊ" />
          ：
          <PinyinText chinese="官" pinyin="ㄍㄨㄢ" />
          <PinyinText chinese="毅" pinyin="ㄧˋ" />
          <PinyinText chinese="明" pinyin="ㄇㄧㄥˊ" />
        </div>
      </CardContent>
    </Card>
  );
};

export default GameHeader;

