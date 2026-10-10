import { Sprite, Texture } from 'pixi.js';

export default {
  title: 'PixiJS/TestBunny',
  argTypes: {
    scale: { control: { type: 'range', min: 0.5, max: 3, step: 0.1 } },
    tint: { control: { type: 'color' } },
  },
};

export const Standard = {
  args: {
    scale: 1.5,
    tint: '#ffffff',
  },
  render: (args) => {
    // 1. Create a basic PixiJS Sprite
    // Using a reliable sample texture from PixiJS
    const sprite = Sprite.from('https://www.sprite-ai.art/sprite-img/a5604a06-c331-45b1-8b4f-c9eae8c9bbae/personaje-para-juego-de-plataformas-2d-es-una-64x64-pixel-art-875c.png');
    
    // 2. Set the anchor to center so it rotates neatly
    sprite.anchor.set(0.5);

    // 3. Map Storybook's initial control arguments (args) to the sprite
    sprite.scale.set(args.scale);
    sprite.tint = args.tint;

    // 4. Return the configuration object recognized by @pixi/storybook-renderer
    return {
      // The framework automatically mounts this canvas element to the canvas container
      view: sprite,

      // This frame loop runs automatically using the built-in Pixi ticker
      update: (ticker) => {
        // Slow continuous spin
        sprite.rotation += 0.01 * ticker.deltaTime;
        
        // Dynamically respond to Storybook sidebar control changes
        sprite.scale.set(args.scale);
        sprite.tint = args.tint;
      },

      // Clean up memory allocations if the user switches to a different story
      destroy: () => {
        sprite.destroy();
      },
    };
  },
};
