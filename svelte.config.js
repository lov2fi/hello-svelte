import adapter from '@sveltejs/adapter-static'; /* not support dynamic route */
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    }),
    paths: {
      base: dev ? '' : '/hello-svelte'
    },
    appDir: 'internal'
  },
  preprocess: vitePreprocess()
};

export default config;
