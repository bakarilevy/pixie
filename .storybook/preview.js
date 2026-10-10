import { backgroundDecorator } from '../utils/backgroundDecorator.js'

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    pixi: {
      applicationOptions: {
        backgroundColor: 0x1099bb,
        resolution: 1,
      },
      // Optional, if you want to provide custom resize logic, pass a function here
      resizeFn: (w, h) => {
        return {
          rendererWidth: w,
          rendererHeight: h,
          canvasWidth: w,
          canvasHeight: h,
        };
      },
    },
  },
  decorators: [backgroundDecorator],
};

export default preview;
