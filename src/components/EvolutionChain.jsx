import React from 'react';
import { ArrowRight } from 'lucide-react';
import PokemonCard from './PokemonCard';

const EvolutionChain = ({ chain, unlockedStages, currentEvolution, className = "" }) => {
  return (
    <div className={`flex items-center justify-center space-x-4 ${className}`}>
      {chain.map((pokemon, index) => (
        <React.Fragment key={index}>
          <PokemonCard
            pokemon={pokemon}
            isUnlocked={unlockedStages >= index + 1}
            isCurrentEvolution={currentEvolution === index}
            className="flex-shrink-0"
          />
          {index < chain.length - 1 && (
            <ArrowRight 
              className={`w-6 h-6 ${
                unlockedStages > index + 1 ? 'text-green-500' : 'text-gray-400'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default EvolutionChain;

