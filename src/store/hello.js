export default {
    namespaced: true,
    state: {
        sum: 1,
    },
    mutations: {
        add1 (state, n){
            state.sum += n
        },
        add2(state){
            if (state.sum%2 !== 0) {
                state.sum += 1
            }
        },
        add3(state, value){
            setTimeout(()=>{
                state.sum += value
              },1000)
        }
    }
}