import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faQuestionCircle, faWaveSquare, faDatabase, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faItunesNote } from '@fortawesome/free-brands-svg-icons';

library.add(faItunesNote, faWaveSquare, faDatabase, faQuestionCircle, faChevronUp, )

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('faIcon', FontAwesomeIcon, {})
})
