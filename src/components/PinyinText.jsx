import React from 'react';

const PinyinText = ({ chinese, pinyin, className = "" }) => {
  return (
    <span className={`chinese-with-pinyin ${className}`}>
      <span className="pinyin-text">{pinyin}</span>
      <span className="chinese-text">{chinese}</span>
    </span>
  );
};

export default PinyinText;

