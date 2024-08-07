import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from "@astrojs/vue";
import rehypeMermaid from "rehype-mermaid";

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
      },
      {
        label: 'gitstudy',
        autogenerate: {
          directory: 'gitstudy'
        }
      },
      {
        label: 'blestudy',
        autogenerate: {
          directory: 'blestudy'
        }
      },
      {
        label: '项目相关',
        autogenerate: {
          directory: '项目相关'
        }
      },
      {
        label: 'other',
        autogenerate: {
          directory: 'other'
        }
      }
    ]
  }),
    vue()],
  markdown: {
    rehypePlugins: [[rehypeMermaid, { strategy: "img-svg", dark: true }]],
  },
});