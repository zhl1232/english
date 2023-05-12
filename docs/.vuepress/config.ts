import { defineUserConfig, defaultTheme } from 'vuepress';

import fs from 'fs';
const dir = fs.readdirSync('./docs');
console.log(dir)
const sidebar = dir.flatMap((item) => {
  if (item === 'Index.md') return [];
  
  return item.match(/(.*)\.md/)?.[1] ?? [];
})

export default defineUserConfig({
  base: '/english/',
  lang: 'zh-CN',
  title: '你好！',
  theme: defaultTheme({
    sidebar: sidebar
  })
});
