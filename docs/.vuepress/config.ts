import { defineUserConfig, defaultTheme } from 'vuepress';
import fs from 'fs';
const dir = fs.readdirSync('./docs');
const sidebar = dir.flatMap((item) => {
  if (item === 'README.md') return [];
  return item.match(/(.*)\.md/)?.[1] ?? [];
});

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  theme: defaultTheme({
    sidebar: sidebar
  })
});
