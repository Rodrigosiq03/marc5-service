import { useMemo } from 'react';

interface LevelInfo {
  level: number;
  progress: number;
  maxProgress: number;
}

export function useLevelCalculation(xp: number): LevelInfo {
  return useMemo(() => {
    const baseXP = 100;
    const multiplier = 1.5;
    
    let level = 1;
    let accumulatedXP = 0;
    let currentLevelXP = baseXP;
    
    while (accumulatedXP + currentLevelXP <= xp) {
      accumulatedXP += currentLevelXP;
      level++;
      currentLevelXP = Math.floor(baseXP * Math.pow(multiplier, level - 1));
    }
    
    const progress = Math.floor(xp - accumulatedXP);
    const maxProgress = currentLevelXP;
    
    return {
      level,
      progress,
      maxProgress
    };
  }, [xp]);
}