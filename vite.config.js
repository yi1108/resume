import { defineConfig } from 'vite';
import markdownItImsize from 'markdown-it-imsize';

import markdownToResume from './core/vite-plugin';

export default defineConfig({
  base: './',
  plugins: [
    markdownToResume({
      markdown(md) {
        md.use(markdownItImsize);
      },
      pdfName: '李毅慧-Java-3年',
      pdfMargin: 0,
      webTitle: '李毅慧个人简历'
    })
  ],
  build: {
    assetsDir: './'
  }
});
