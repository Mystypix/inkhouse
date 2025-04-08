import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';

import react from "@astrojs/react";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown({ config: { forward: ['dataLayer.push'] } })],
  output: 'server',
  adapter: netlify(),
});