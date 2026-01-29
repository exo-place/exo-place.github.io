import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'exo',
  description: 'Places to exist',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/projects/' },
      {
        text: 'Docs',
        items: [
          { text: 'Hologram', link: 'https://exo-place.github.io/hologram/' },
          { text: 'Aspect', link: 'https://exo-place.github.io/aspect/' },
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
  },
})
