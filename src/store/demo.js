import { nanoid } from "nanoid"

export default {
    namespaced: true,
    state: {
        personList: [
            {id:'111', name:'张三'}
        ],
    },
    actions: {
        async addName (store, value){
            let obj = {id: nanoid(), name:value}
            store.commit('addName', obj)
        }
    },
    mutations:{
        addName(state, obj){
            state.personList.unshift(obj)
            state.name = ''
        }
    },
    getters: {
        firstName(state){
            return state.personList[0].name
        }
    }
}