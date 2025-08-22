// 寶可夢進化鏈數據配置
export const pokemonEvolutionChains = {
  beginner: [
    {
      id: 1,
      name: "妙蛙種子進化鏈",
      chain: [
        { name: "妙蛙種子", pinyin: "ㄇㄧㄠˋ ㄨㄚ ㄓㄨㄥˇ ㄗˇ", type: "草", image: "妙蛙種子.png" },
        { name: "妙蛙草", pinyin: "ㄇㄧㄠˋ ㄨㄚ ㄘㄠˇ", type: "草", image: "妙蛙草.png" },
        { name: "妙蛙花", pinyin: "ㄇㄧㄠˋ ㄨㄚ ㄏㄨㄚ", type: "草", image: "妙蛙花.png" }
      ]
    },
    {
      id: 2,
      name: "小火龍進化鏈",
      chain: [
        { name: "小火龍", pinyin: "ㄒㄧㄠˇ ㄏㄨㄛˇ ㄌㄨㄥˊ", type: "火", image: "小火龍.png" },
        { name: "火恐龍", pinyin: "ㄏㄨㄛˇ ㄎㄨㄥˇ ㄌㄨㄥˊ", type: "火", image: "火恐龍.png" },
        { name: "噴火龍", pinyin: "ㄆㄣ ㄏㄨㄛˇ ㄌㄨㄥˊ", type: "火", image: "噴火龍.png" }
      ]
    },
    {
      id: 3,
      name: "傑尼龜進化鏈",
      chain: [
        { name: "傑尼龜", pinyin: "ㄐㄧㄝˊ ㄋㄧˊ ㄍㄨㄟ", type: "水", image: "傑尼龜.png" },
        { name: "卡咪龜", pinyin: "ㄎㄚˇ ㄇㄧ ㄍㄨㄟ", type: "水", image: "卡咪龜.png" },
        { name: "水箭龜", pinyin: "ㄕㄨㄟˇ ㄐㄧㄢˋ ㄍㄨㄟ", type: "水", image: "水箭龜.png" }
      ]
    },
    {
      id: 4,
      name: "綠毛蟲進化鏈",
      chain: [
        { name: "綠毛蟲", pinyin: "ㄌㄩˋ ㄇㄠˊ ㄔㄨㄥˊ", type: "蟲", image: "綠毛蟲.png" },
        { name: "鐵甲蛹", pinyin: "ㄊㄧㄝˇ ㄐㄧㄚˇ ㄩㄥˇ", type: "蟲", image: "鐵甲蛹.png" },
        { name: "巴大蝶", pinyin: "ㄅㄚ ㄉㄚˋ ㄉㄧㄝˊ", type: "蟲/飛行", image: "巴大蝶.png" }
      ]
    },
    {
      id: 5,
      name: "獨角蟲進化鏈",
      chain: [
        { name: "獨角蟲", pinyin: "ㄉㄨˊ ㄐㄧㄠˇ ㄔㄨㄥˊ", type: "蟲/毒", image: "獨角蟲.png" },
        { name: "鐵殼蛹", pinyin: "ㄊㄧㄝˇ ㄎㄜˊ ㄩㄥˇ", type: "蟲/毒", image: "鐵殼蛹.png" },
        { name: "大針蜂", pinyin: "ㄉㄚˋ ㄓㄣ ㄈㄥ", type: "蟲/毒", image: "大針蜂.png" }
      ]
    },
    {
      id: 6,
      name: "皮丘進化鏈",
      chain: [
        { name: "皮丘", pinyin: "ㄆㄧˊ ㄑㄧㄡ", type: "電", image: "皮丘.png" },
        { name: "皮卡丘", pinyin: "ㄆㄧˊ ㄎㄚˇ ㄑㄧㄡ", type: "電", image: "皮卡丘.png" },
        { name: "雷丘", pinyin: "ㄌㄟˊ ㄑㄧㄡ", type: "電", image: "雷丘.png" }
      ]
    },
    {
      id: 7,
      name: "皮寶寶進化鏈",
      chain: [
        { name: "皮寶寶", pinyin: "ㄆㄧˊ ㄅㄠˇ ㄅㄠˇ", type: "妖精", image: "皮寶寶.png" },
        { name: "皮皮", pinyin: "ㄆㄧˊ ㄆㄧˊ", type: "妖精", image: "皮皮.png" },
        { name: "皮可西", pinyin: "ㄆㄧˊ ㄎㄜˇ ㄒㄧ", type: "妖精", image: "皮可西.png" }
      ]
    },
    {
      id: 8,
      name: "寶寶丁進化鏈",
      chain: [
        { name: "寶寶丁", pinyin: "ㄅㄠˇ ㄅㄠˇ ㄉㄧㄥ", type: "一般/妖精", image: "寶寶丁.png" },
        { name: "胖丁", pinyin: "ㄆㄤˋ ㄉㄧㄥ", type: "一般/妖精", image: "胖丁.png" },
        { name: "胖可丁", pinyin: "ㄆㄤˋ ㄎㄜˇ ㄉㄧㄥ", type: "一般/妖精", image: "胖可丁.png" }
      ]
    }
  ],
  intermediate: [
    {
      id: 9,
      name: "小貓怪進化鏈",
      chain: [
        { name: "小貓怪", pinyin: "ㄒㄧㄠˇ ㄇㄠ ㄍㄨㄞˋ", type: "電", image: "小貓怪.png" },
        { name: "勒克貓", pinyin: "ㄌㄜˋ ㄎㄜˋ ㄇㄠ", type: "電", image: "勒克貓.png" },
        { name: "倫琴貓", pinyin: "ㄌㄨㄣˊ ㄑㄧㄣˊ ㄇㄠ", type: "電", image: "倫琴貓.png" }
      ]
    },
    {
      id: 10,
      name: "小火焰猴進化鏈",
      chain: [
        { name: "小火焰猴", pinyin: "ㄒㄧㄠˇ ㄏㄨㄛˇ ㄧㄢˋ ㄏㄡˊ", type: "火/格鬥", image: "小火焰猴.png" },
        { name: "猛火猴", pinyin: "ㄇㄥˇ ㄏㄨㄛˇ ㄏㄡˊ", type: "火/格鬥", image: "猛火猴.png" },
        { name: "烈焰猴", pinyin: "ㄌㄧㄝˋ ㄧㄢˋ ㄏㄡˊ", type: "火/格鬥", image: "烈焰猴.png" }
      ]
    },
    {
      id: 11,
      name: "草苗龜進化鏈",
      chain: [
        { name: "草苗龜", pinyin: "ㄘㄠˇ ㄇㄧㄠˊ ㄍㄨㄟ", type: "草", image: "草苗龜.png" },
        { name: "樹林龜", pinyin: "ㄕㄨˋ ㄌㄧㄣˊ ㄍㄨㄟ", type: "草", image: "樹林龜.png" },
        { name: "土台龜", pinyin: "ㄊㄨˇ ㄊㄞˊ ㄍㄨㄟ", type: "草/地面", image: "土台龜.png" }
      ]
    },
    {
      id: 12,
      name: "波加曼進化鏈",
      chain: [
        { name: "波加曼", pinyin: "ㄅㄛ ㄐㄧㄚ ㄇㄢˋ", type: "水", image: "波加曼.png" },
        { name: "波皇子", pinyin: "ㄅㄛ ㄏㄨㄤˊ ㄗˇ", type: "水", image: "波皇子.png" },
        { name: "帝王拿波", pinyin: "ㄉㄧˋ ㄨㄤˊ ㄋㄚˊ ㄅㄛ", type: "水/鋼", image: "帝王拿波.png" }
      ]
    },
    {
      id: 13,
      name: "小鋸鱷進化鏈",
      chain: [
        { name: "小鋸鱷", pinyin: "ㄒㄧㄠˇ ㄐㄩˋ ㄜˋ", type: "水", image: "小鋸鱷.png" },
        { name: "藍鱷", pinyin: "ㄌㄢˊ ㄜˋ", type: "水", image: "藍鱷.png" },
        { name: "大力鱷", pinyin: "ㄉㄚˋ ㄌㄧˋ ㄜˋ", type: "水/地面", image: "大力鱷.png" }
      ]
    },
    {
      id: 14,
      name: "火球鼠進化鏈",
      chain: [
        { name: "火球鼠", pinyin: "ㄏㄨㄛˇ ㄑㄧㄡˊ ㄕㄨˇ", type: "火", image: "火球鼠.png" },
        { name: "火岩鼠", pinyin: "ㄏㄨㄛˇ ㄧㄢˊ ㄕㄨˇ", type: "火", image: "火岩鼠.png" },
        { name: "火暴獸", pinyin: "ㄏㄨㄛˇ ㄅㄠˋ ㄕㄡˋ", type: "火", image: "火暴獸.png" }
      ]
    },
    {
      id: 15,
      name: "菊草葉進化鏈",
      chain: [
        { name: "菊草葉", pinyin: "ㄐㄩˊ ㄘㄠˇ ㄧㄝˋ", type: "草", image: "菊草葉.png" },
        { name: "月桂葉", pinyin: "ㄩㄝˋ ㄍㄨㄟˋ ㄧㄝˋ", type: "草", image: "月桂葉.png" },
        { name: "大竺葵", pinyin: "ㄉㄚˋ ㄓㄨˊ ㄎㄨㄟˊ", type: "草", image: "大竺葵.png" }
      ]
    },
    {
      id: 16,
      name: "木守宮進化鏈",
      chain: [
        { name: "木守宮", pinyin: "ㄇㄨˋ ㄕㄡˇ ㄍㄨㄥ", type: "草", image: "木守宮.png" },
        { name: "森林蜥蜴", pinyin: "ㄙㄣ ㄌㄧㄣˊ ㄒㄧ ㄧˋ", type: "草", image: "森林蜥蜴.png" },
        { name: "蜥蜴王", pinyin: "ㄒㄧ ㄧˋ ㄨㄤˊ", type: "草", image: "蜥蜴王.png" }
      ]
    }
  ],
  advanced: [
    {
      id: 17,
      name: "火稚雞進化鏈",
      chain: [
        { name: "火稚雞", pinyin: "ㄏㄨㄛˇ ㄓˋ ㄐㄧ", type: "火", image: "火稚雞.png" },
        { name: "力壯雞", pinyin: "ㄌㄧˋ ㄓㄨㄤˋ ㄐㄧ", type: "火/格鬥", image: "力壯雞.png" },
        { name: "火焰雞", pinyin: "ㄏㄨㄛˇ ㄧㄢˋ ㄐㄧ", type: "火/格鬥", image: "火焰雞.png" }
      ]
    },
    {
      id: 18,
      name: "水躍魚進化鏈",
      chain: [
        { name: "水躍魚", pinyin: "ㄕㄨㄟˇ ㄩㄝˋ ㄩˊ", type: "水", image: "水躍魚.png" },
        { name: "沼躍魚", pinyin: "ㄓㄠˇ ㄩㄝˋ ㄩˊ", type: "水/地面", image: "沼躍魚.png" },
        { name: "巨沼怪", pinyin: "ㄐㄩˋ ㄓㄠˇ ㄍㄨㄞˋ", type: "水/地面", image: "巨沼怪.png" }
      ]
    },
    {
      id: 19,
      name: "可可多拉進化鏈",
      chain: [
        { name: "可可多拉", pinyin: "ㄎㄜˇ ㄎㄜˇ ㄉㄨㄛ ㄌㄚ", type: "鋼/岩石", image: "可可多拉.png" },
        { name: "可多拉", pinyin: "ㄎㄜˇ ㄉㄨㄛ ㄌㄚ", type: "鋼/岩石", image: "可多拉.png" },
        { name: "波士可多拉", pinyin: "ㄅㄛ ㄕˋ ㄎㄜˇ ㄉㄨㄛ ㄌㄚ", type: "鋼/岩石", image: "波士可多拉.png" }
      ]
    },
    {
      id: 20,
      name: "幼基拉斯進化鏈",
      chain: [
        { name: "幼基拉斯", pinyin: "ㄧㄡˋ ㄐㄧ ㄌㄚ ㄙ", type: "岩石/地面", image: "幼基拉斯.png" },
        { name: "沙基拉斯", pinyin: "ㄕㄚ ㄐㄧ ㄌㄚ ㄙ", type: "岩石/地面", image: "沙基拉斯.png" },
        { name: "班基拉斯", pinyin: "ㄅㄢ ㄐㄧ ㄌㄚ ㄙ", type: "岩石/惡", image: "班基拉斯.png" }
      ]
    },
    {
      id: 21,
      name: "牙牙進化鏈",
      chain: [
        { name: "牙牙", pinyin: "ㄧㄚˊ ㄧㄚˊ", type: "龍", image: "牙牙.png" },
        { name: "斧牙龍", pinyin: "ㄈㄨˇ ㄧㄚˊ ㄌㄨㄥˊ", type: "龍", image: "斧牙龍.png" },
        { name: "雙斧戰龍", pinyin: "ㄕㄨㄤ ㄈㄨˇ ㄓㄢˋ ㄌㄨㄥˊ", type: "龍", image: "雙斧戰龍.png" }
      ]
    },
    {
      id: 22,
      name: "迷你龍進化鏈",
      chain: [
        { name: "迷你龍", pinyin: "ㄇㄧˊ ㄋㄧˇ ㄌㄨㄥˊ", type: "龍", image: "迷你龍.png" },
        { name: "哈克龍", pinyin: "ㄏㄚ ㄎㄜˋ ㄌㄨㄥˊ", type: "龍", image: "哈克龍.png" },
        { name: "快龍", pinyin: "ㄎㄨㄞˋ ㄌㄨㄥˊ", type: "龍/飛行", image: "快龍.png" }
      ]
    },
    {
      id: 23,
      name: "小拳石進化鏈",
      chain: [
        { name: "小拳石", pinyin: "ㄒㄧㄠˇ ㄑㄩㄢˊ ㄕˊ", type: "岩石/地面", image: "小拳石.png" },
        { name: "隆隆石", pinyin: "ㄌㄨㄥˊ ㄌㄨㄥˊ ㄕˊ", type: "岩石/地面", image: "隆隆石.png" },
        { name: "隆隆岩", pinyin: "ㄌㄨㄥˊ ㄌㄨㄥˊ ㄧㄢˊ", type: "岩石/地面", image: "隆隆岩.png" }
      ]
    },
    {
      id: 24,
      name: "可達鴨進化鏈",
      chain: [
        { name: "可達鴨", pinyin: "ㄎㄜˇ ㄉㄚˊ ㄧㄚ", type: "水", image: "可達鴨.png" },
        { name: "哥達鴨", pinyin: "ㄍㄜ ㄉㄚˊ ㄧㄚ", type: "水/超能力", image: "哥達鴨.png" }
      ]
    }
  ]
};

// 難度級別配置
export const difficultyLevels = {
  beginner: {
    name: "初級",
    pinyin: "ㄔㄨ ㄐㄧˊ",
    description: "個位數加減法",
    descriptionPinyin: "ㄍㄜˋ ㄨㄟˋ ㄕㄨˋ ㄐㄧㄚ ㄐㄧㄢˇ ㄈㄚˇ",
    chains: pokemonEvolutionChains.beginner
  },
  intermediate: {
    name: "中級",
    pinyin: "ㄓㄨㄥ ㄐㄧˊ",
    description: "兩位數加減法",
    descriptionPinyin: "ㄌㄧㄤˇ ㄨㄟˋ ㄕㄨˋ ㄐㄧㄚ ㄐㄧㄢˇ ㄈㄚˇ",
    chains: pokemonEvolutionChains.intermediate
  },
  advanced: {
    name: "高級",
    pinyin: "ㄍㄠ ㄐㄧˊ",
    description: "99乘法表",
    descriptionPinyin: "99 ㄔㄥˊ ㄈㄚˇ ㄅㄧㄠˇ",
    chains: pokemonEvolutionChains.advanced
  }
};

// 遊戲狀態管理
export const gameStates = {
  MENU: 'menu',
  DIFFICULTY_SELECT: 'difficulty_select',
  POKEMON_SELECT: 'pokemon_select',
  PLAYING: 'playing',
  EVOLUTION: 'evolution',
  POKEDEX: 'pokedex'
};

// 進化條件
export const evolutionRequirements = {
  TOTAL_CORRECT: 5,  // 總共答對5題
  CONSECUTIVE_CORRECT: 3  // 連續答對3題
};

