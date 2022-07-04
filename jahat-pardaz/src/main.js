import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import {library} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas)


createApp(App)
    .component('fa-icon', FontAwesomeIcon)
    .use(router)
    .use(store)
    .mount('#app')
