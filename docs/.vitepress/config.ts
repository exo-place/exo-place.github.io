import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'exo',
  description: 'Places to exist',
  srcExclude: ['**/CLAUDE.md'],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/projects/' },
      {
        text: 'Docs',
        items: [
          { text: 'Hologram', link: 'https://docs.exo.place/hologram/' },
          { text: 'Aspect', link: 'https://docs.exo.place/aspect/' },
          { text: 'noncanon', link: 'https://docs.exo.place/noncanon/' },
        ]
      },
    ],

    sidebar: {
      '/': [
        {
          text: 'Overview',
          items: [
            { text: 'About', link: '/about' },
          ]
        },
        {
          text: 'Projects',
          items: [
            { text: 'Hologram', link: '/projects/hologram' },
            { text: 'Aspect', link: '/projects/aspect' },
            { text: 'noncanon', link: '/projects/noncanon' },
          ]
        },
        {
          text: 'Community',
          items: [
            { text: 'Contributing', link: '/contributing' },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/exo-place' }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/exo-place/github-io/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
  },
}))
