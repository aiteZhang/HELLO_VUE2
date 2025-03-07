import Vue from 'vue'
import Vuex from 'vuex'
import demoStore from './demo'
import helloStore from './hello'
Vue.use(Vuex)



export default new Vuex.Store({
    modules: {
        demoStore,
        helloStore
    }
})