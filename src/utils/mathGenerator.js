// 數學題目生成器
export class MathGenerator {
  constructor(difficulty) {
    this.difficulty = difficulty;
  }

  // 生成隨機整數
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // 生成初級題目（個位數加減法）
  generateBeginnerQuestion() {
    const operations = ['+', '-'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let num1, num2, correctAnswer;
    
    if (operation === '+') {
      num1 = this.randomInt(1, 9);
      num2 = this.randomInt(1, 9);
      correctAnswer = num1 + num2;
    } else {
      // 確保減法結果為正數
      num1 = this.randomInt(2, 9);
      num2 = this.randomInt(1, num1 - 1);
      correctAnswer = num1 - num2;
    }

    return {
      question: `${num1} ${operation} ${num2} = ?`,
      questionPinyin: `${this.numberToPinyin(num1)} ${this.operationToPinyin(operation)} ${this.numberToPinyin(num2)} ㄉㄥˇ ㄩˊ ㄉㄨㄛ ㄕㄠˇ？`,
      correctAnswer,
      options: this.generateOptions(correctAnswer, 1, 18)
    };
  }

  // 生成中級題目（兩位數加減法）
  generateIntermediateQuestion() {
    const operations = ['+', '-'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let num1, num2, correctAnswer;
    
    if (operation === '+') {
      num1 = this.randomInt(10, 50);
      num2 = this.randomInt(10, 50);
      correctAnswer = num1 + num2;
    } else {
      // 確保減法結果為正數
      num1 = this.randomInt(20, 99);
      num2 = this.randomInt(10, num1 - 10);
      correctAnswer = num1 - num2;
    }

    return {
      question: `${num1} ${operation} ${num2} = ?`,
      questionPinyin: `${this.numberToPinyin(num1)} ${this.operationToPinyin(operation)} ${this.numberToPinyin(num2)} ㄉㄥˇ ㄩˊ ㄉㄨㄛ ㄕㄠˇ？`,
      correctAnswer,
      options: this.generateOptions(correctAnswer, 1, 150)
    };
  }

  // 生成高級題目（99乘法表）
  generateAdvancedQuestion() {
    const num1 = this.randomInt(1, 9);
    const num2 = this.randomInt(1, 9);
    const correctAnswer = num1 * num2;

    return {
      question: `${num1} × ${num2} = ?`,
      questionPinyin: `${this.numberToPinyin(num1)} ㄔㄥˊ ${this.numberToPinyin(num2)} ㄉㄥˇ ㄩˊ ㄉㄨㄛ ㄕㄠˇ？`,
      correctAnswer,
      options: this.generateOptions(correctAnswer, 1, 81)
    };
  }

  // 生成三個選項（包含正確答案）
  generateOptions(correctAnswer, minRange, maxRange) {
    const options = [correctAnswer];
    
    while (options.length < 3) {
      let wrongAnswer;
      
      // 生成接近正確答案的錯誤選項
      if (Math.random() < 0.5) {
        wrongAnswer = correctAnswer + this.randomInt(-5, 5);
      } else {
        wrongAnswer = this.randomInt(Math.max(1, minRange), maxRange);
      }
      
      if (wrongAnswer !== correctAnswer && wrongAnswer > 0 && !options.includes(wrongAnswer)) {
        options.push(wrongAnswer);
      }
    }
    
    // 隨機排列選項
    return this.shuffleArray(options);
  }

  // 打亂陣列
  shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  // 數字轉注音
  numberToPinyin(num) {
    const digits = {
      0: 'ㄌㄧㄥˊ', 1: 'ㄧ', 2: 'ㄦˋ', 3: 'ㄙㄢ', 4: 'ㄙˋ', 5: 'ㄨˇ',
      6: 'ㄌㄧㄡˋ', 7: 'ㄑㄧ', 8: 'ㄅㄚ', 9: 'ㄐㄧㄡˇ'
    };
    
    if (num < 10) {
      return digits[num];
    } else if (num < 100) {
      const tens = Math.floor(num / 10);
      const ones = num % 10;
      let result = '';
      
      if (tens === 1) {
        result = 'ㄕˊ';
      } else {
        result = digits[tens] + 'ㄕˊ';
      }
      
      if (ones > 0) {
        result += digits[ones];
      }
      
      return result;
    }
    
    return num.toString();
  }

  // 運算符號轉注音
  operationToPinyin(operation) {
    const operations = {
      '+': 'ㄐㄧㄚ',
      '-': 'ㄐㄧㄢˇ',
      '×': 'ㄔㄥˊ',
      '÷': 'ㄔㄨˊ'
    };
    return operations[operation] || operation;
  }

  // 根據難度生成題目
  generateQuestion() {
    switch (this.difficulty) {
      case 'beginner':
        return this.generateBeginnerQuestion();
      case 'intermediate':
        return this.generateIntermediateQuestion();
      case 'advanced':
        return this.generateAdvancedQuestion();
      default:
        return this.generateBeginnerQuestion();
    }
  }
}

