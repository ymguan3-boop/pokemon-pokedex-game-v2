import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PokemonCard = ({ pokemon, isUnlocked, isCurrentEvolution, className = "" }) => {
  const getImagePath = (imageName) => {
    try {
      return new URL(`../assets/pokemon_images/${imageName}`, import.meta.url).href;
    } catch (error) {
      console.error(`Image not found: ${imageName}`);
      return null;
    }
  };

  return (
    <Card className={`relative overflow-hidden transition-all duration-300 ${className} ${
      isCurrentEvolution ? 'ring-4 ring-yellow-400 shadow-lg scale-105' : ''
    }`}>
      <CardContent className="p-4 text-center">
        <div className="relative w-24 h-24 mx-auto mb-3">
          {isUnlocked ? (
            <img
              src={getImagePath(pokemon.image)}
              alt={pokemon.name}
              className="w-full h-full object-contain rounded-lg"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
          ) : (
            <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-black rounded-full opacity-80"></div>
            </div>
          )}
          <div 
            className="w-full h-full bg-gray-600 rounded-lg flex items-center justify-center text-white text-xs"
            style={{ display: 'none' }}
          >
            圖片載入中...
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="text-lg font-bold text-gray-800">
            {isUnlocked ? pokemon.name : "???"}
          </div>
          <div className="text-xs text-gray-500">
            {isUnlocked ? pokemon.pinyin : "ㄨㄟˋ ㄓ ㄉㄠˋ"}
          </div>
          {isUnlocked && (
            <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full inline-block">
              {pokemon.type}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;

