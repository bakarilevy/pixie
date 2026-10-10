import { Graphics } from 'pixi.js';

export default {
  title: 'PixiJS/DecoratedSquare',
};

export const Minimal = {
  render: () => {
    // Create a simple red square box
    const square = new Graphics()
      .rect(0, 0, 100, 100)
      .fill({ color: 0xff3300 });

    return {
      view: square,
      
      // When the canvas resizes, this logic snaps the square to the 
      // bottom-right corner of whatever space the decorator gives it.
      resize: (availableWidth, availableHeight) => {
        square.x = availableWidth - 100;
        square.y = availableHeight - 100;
      },

      destroy: () => {
        square.destroy();
      },
    };
  },
};
