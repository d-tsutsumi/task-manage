import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve!.alias,
          '@/components': path.resolve(__dirname, '../src/components'),
          '@/lib': path.resolve(__dirname, '../src/lib'),
          '@/models': path.resolve(__dirname, '../src/models'),
          '@/pages': path.resolve(__dirname, '../src/pages'),
          '@/styles': path.resolve(__dirname, '../src/styles'),
        },
      },
    };
  },
};
export default config;
