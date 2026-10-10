import type { Container, Ticker } from 'pixi.js';

export interface PixiStoryReturn {
  view: Container; // Pixi v8 uses Container as the base layout type
  update?: (ticker: Ticker) => void;
  resize?: (rendererWidth: number, rendererHeight: number) => void;
  destroy?: () => void;
}
