import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { generateTokens } from './scripts/generate-tokens.js';

// Netlify sets CONTEXT to 'production', 'deploy-preview' or 'branch-deploy'.
const indexable = process.env.CONTEXT === 'production' || process.env.INDEXABLE === 'true';

export default defineConfig({
  define: {
    __INDEXABLE__: JSON.stringify(indexable)
  },
  plugins: [
    sveltekit(),
    {
      name: 'tokens',
      buildStart: generateTokens
    }
  ]
});
