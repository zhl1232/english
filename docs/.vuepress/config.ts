import { defineUserConfig, defaultTheme } from 'vuepress';

export default defineUserConfig({
  base: '/english/',
  lang: 'zh-CN',
  title: '你好！',
  theme: defaultTheme({
    sidebar: ['humanBody', 'northPole', 'pineTree', 'birdNest']
  })
});
