import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  sourceDir: "src",
  dest: "docs/",
  
  lang: 'en-US',

  title: 'TURTLES@sunsin.shop',
  description: "느리것 처럼 보이는 단단한 기술력을 갖고 있는. 팀순신샵 기술블로그에서 실력과 센스를 겸비한 신입 개발자 엔지니어를 만나 보세요.",

  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '느리것 처럼 보이는 단단한 기술력을 갖고 있는. 팀순신샵  기술블로그. 팀순신샵 거북이즈' }],
    ['meta', { property: 'og:description', content: "팀순신샵 거북이즈. 느리것 처럼 보이는 단단한 기술력을 갖고 있는. 팀순신샵 기술블로그에서 실력과 센스를 겸비한 신입 개발자 엔지니어를 만나 보세요." }],
    ['meta', { property: 'og:image', content: 'https://sunsin-shop.github.io/images/repository-open-graph-sunsin.png' }],
    ['meta', { property: 'og:url', content: 'https://sunsin-shop.github.io' }],
  ],
  
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/en/': {
      lang: 'en-US',
    //   title: 'tech-blog:cashmallow',
    //   description: "cashmallow dev team's technology blog about wanting to contribute to the open source ecosystem",
    },
    '/': {
      lang: 'ko-KR',
    //   title: 'tech-blog:cashmallow',
    //   description: "cashmallow dev team's technology blog about wanting to contribute to the open source ecosystem",
    },
  },


  locales: {
    '/zh/': {
      lang: 'zh-CN',
    },
    '/en/': {
      lang: 'en-US',
    },
    '/': {
      lang: 'ko-KR',
    },
  },

  theme: defaultTheme({
    selectLanguageText: "lang",

    locales: {
      '/zh/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
      '/': {
        selectLanguageName: '한국어',
      },
    },

    logo: "/images/ninja-turtles.webp",
    logoDark: "/images/hero.webp",

    repo: "https://github.com/sunsin-shop/sunsin-shop.github.io/discussions",
    repoLabel: "discussions",

    contributors: false,

    editLink: false,
    // editLinkText: '✏️',

    lastUpdated: true,
    lastUpdatedText: "Last Updated",

    colorMode: "auto",
    colorModeSwitch: true,

    navbar: [
      { text: "101", link: "https://github.com/ppabam/101/issues" },
      { text: "resumes", link: "/team/turtle/" },
      { text: "portfolios", link: "/turtles/portfolios/" },
      { text: "🎧ྀི♪⋆.✮♬.ᐟ", link: "https://vim.sunsin.shop/?query=%ED%94%8C%EB%A6%AC&sort=shuffle" },
    ],

    sidebar: {
      "/": [
        {
          text: "share",
          collapsible: true,
          children: [
            "/tech/share/",
          ],
        },
        {
          text: "team",
          collapsible: true,
          children: [
            "/team/turtle/",
            "/turtles/portfolios/",
            "/team/tiger2agile/",
          ],
        },
        {
          text: "opensource",
          collapsible: true,
          children: [
            "/tech/share/opensource/",
          ],
        },
      ],
    },
  }),

  plugins: [
    searchPlugin({

    }),
    backToTopPlugin(),
    googleAnalyticsPlugin({
      id: "G-8X1VF5FX6X",
      debug: true,
    }),
  ],

})
