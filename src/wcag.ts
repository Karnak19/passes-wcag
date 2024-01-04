import { getContrastRatio } from './get-contrast-ratio';

const passes = (color1: string, color2: string, threshold: number) => getContrastRatio(color1, color2) >= threshold;

export const passesWcagAaLargeText = (color1: string, color2: string) => passes(color1, color2, 3);
export const passesWcagAa = (color1: string, color2: string) => passes(color1, color2, 4.5);
export const passesWcagAaa = (color1: string, color2: string) => passes(color1, color2, 7);
