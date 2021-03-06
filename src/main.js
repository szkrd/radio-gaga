import './styles/index.less'
import 'whatwg-fetch'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './components/app'
import store from './vuex/store'
import locales from './locales'

// localization
Vue.use(VueI18n)
Object.keys(locales).forEach(lang => Vue.locale(lang, locales[lang]))
const lang = window.navigator.language
Vue.config.lang = locales[lang] ? lang : 'en-US'

// test
Vue.config.lang = 'hu-HU'

// bootstrap
function init () {
  return new Vue({
    el: '#main',
    store,
    components: {
      App
    }
  })
}

document.addEventListener(window.cordova ? 'deviceready' : 'DOMContentLoaded', init, false)
