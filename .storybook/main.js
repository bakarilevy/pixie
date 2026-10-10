/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  logLevel: 'debug',
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    "@storybook/addon-essentials",
    '@storybook/addon-highlight',
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
  ],
  framework: "@pixi/storybook-vite",
  docs: {
    autodocs: "tag",
  },
  core: {
    disableTelemetry: true,
  },
};
export default config;
