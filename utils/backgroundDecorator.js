import { Container } from 'pixi.js';

const MARGIN = 10;
const DOUBLE_MARGIN = MARGIN * 2;

export const backgroundDecorator = (story) => {
  const root = new Container();
  const storyResult = story();
  
  root.addChild(storyResult.view);
  
  return {
    view: root,
    // FIX: Pass the full ticker object forward instead of a raw delta number
    update: (ticker) => storyResult.update?.(ticker),
    resize: (screenWidth, screenHeight) => {
      root.x = MARGIN;
      root.y = MARGIN;
      storyResult.resize?.(screenWidth - DOUBLE_MARGIN, screenHeight - DOUBLE_MARGIN);
    },
    destroy: () => {
      // Clean up the parent container layout when switching stories
      storyResult.destroy?.();
      root.destroy({ children: true });
    },
  };
};
