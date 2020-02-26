// Theme API.
module.exports = (options, ctx) => {
  return {
    title: 'Omnis Theme Docs',
    // description: 'Documentation for Omnis WordPress Theme',
    theme: '.vuepress/theme-omnis',
    base: '/omnis-docs/',
    dest: 'docs',
    themeConfig: {
      logo: '/images/logos/logo-dark.png',
      nav: [
          { text: 'Home', link: '/' },
          { text: 'Changelog', link: '/#changelog' },
          { text: 'Docs', link: '/docs/' },
          { text: 'Theme Demo', link: 'https://demo.loprd.pl/omnis/' },
          { text: 'Buy Theme', link: 'https://themeforest.net/user/leopardthemes/portfolio' }
      ],
      sidebar: {
          // '/api/': getApiSidebar(),
          '/docs/': getGuideSidebar('General', 'Theme Features'),
          // '/plugin/': getPluginSidebar('Plugin', 'Introduction', 'Official Plugins'),
          // '/theme/': getThemeSidebar('Theme', 'Introduction'),
      },
      displayAllHeaders: true, // Default: false
      activeHeaderLinks: false, // Default: true
      searchPlaceholder: 'Search...',
      plugins: [
         '@vuepress/plugin-back-to-top',
          '@vuepress/plugin-active-header-links',
          '@vuepress/active-header-links',
      ],
      smoothScroll: true,
    },
    plugins: [
      ['@vuepress/active-header-links', true],
      '@vuepress/search',
      '@vuepress/plugin-nprogress',
      '@vuepress/plugin-back-to-top',
      '@vuepress/plugin-register-components',
      'vuepress-plugin-medium-zoom',
      [
        'vuepress-plugin-serve',
        {
          post: 1234,
          staticOptions: {
            dotfiles: 'allow',
          },
        },
      ],
      ['container', {
        type: 'content-wide',
        before: () => `<div class="content-wide">\n`,
        after: () => '</div>\n'
      }],
      ['container', {
        type: 'steps',
        before: () => `<div class="steps">\n`,
        after: () => '</div>\n'
      }],
      ['container', {
        type: 'changelog',
        before: badge => `<div class="changelog"><span class="changelog__badge ${badge}">${badge}</span>\n`,
        after: () => '</div>\n'
      }],
      ['container', {
        type: 'grid',
        before: column => `<div class="grid columns-${column}">\n`,
        after: () => '</div>\n'
      }],
      ['container', {
        type: 'grid-col',
        before: () => `<div class="grid__column">\n`,
        after: () => '</div>\n'
      }],
      ['container', {
        type: 'wrapper',
        defaultTitle: '',
        before: title => `<div class="wrapper"><div class="wrapper__title">${title}</div>\n`,
        after: () => '</div>\n'
      }],
      ['smooth-scroll', true]
    ],
  }
}

function getGuideSidebar (groupA, groupB) {
    return [
      {
        title: groupA,
        collapsable: true,
        children: [
          '',
          'installation',
        ]
      },
      {
        title: groupB,
        collapsable: true,
        children: [
          'plugins',
          'options',
          'menus',
        ]
      }
    ];
  }