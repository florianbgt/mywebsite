export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Florian Bigot | Web Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The personnal website and online resume of Florian Bigot | Web Developer' },
      { hid: 'keyword', name: 'keyword', content: 'Florian Bigot, Web Developer, Vue.js, Nuxt.js, Django, Python, Javascript, Docker' },      
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: '122A40',
    height: '5px'
  },

  pwa: {
    meta: {
      theme_color: '#FFFFFC'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/fontawesome', {component: 'fa'}],
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxt/image'
  ],

  fontawesome: {
    icons: {
      regular: [
        'faCircle',
        'faCalendarAlt'
      ],
      solid: [
        'faPhone',
        'faEnvelope',
        'faUser',
        'faBriefcase',
        'faUniversity',
        'faGraduationCap',
        'faMapMarkerAlt',
        'faEllipsisV',
        'faPlusCircle',
        'faGripLinesVertical',
        'faBars'
      ],
      brands: [
        'faLinkedin',
        'faGithub'
      ]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
