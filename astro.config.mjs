import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from "@astrojs/vue";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'My Docs',
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [
    // {
    // 	label: 'Guides',
    // 	items: [
    // 		// Each item here is one entry in the navigation menu.
    // 		{ label: 'Example Guide', link: '/guides/example/' },
    // 	],
    // },
    // {
    // 	label: 'Reference',
    // 	autogenerate: { directory: 'reference' },
    // },
    {
      label: 'mdstudy',
      autogenerate: {
        directory: 'mdstudy'
      }
    }, {
      label: 'gitstudy',
      autogenerate: {
        directory: 'gitstudy'
      }
    }, {
      label: 'blestudy',
      autogenerate: {
        directory: 'blestudy'
      }
    }, {
      label: 'other',
      autogenerate: {
        directory: 'other'
      }
    }]
  }), vue()]
});