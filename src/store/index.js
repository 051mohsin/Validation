import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        vue_vuex: "Wellcome to the vuex home",
        users: [
            {
                id: 1, name: "mohsin", age: 30
            },
            {
                id: 2, name: "ali", age: 20
            },
            {
                id: 3, name: "tahir", age: 20
            },
            {
                id: 4, name: "Asif", age: 25
            }
        ]
    },
    mutations: {
        update_masseges(state) {
            state.vue_vuex = " updated wellcome to the vuex home"
        }
    },
    actions: {
        update_masseges(context) {
            context.commit('update_masseges')
        }

    },
    getters: {
     getUsers(state) {
            return state.users.filter(user =>  user.age < 30)

        }

    },
})
export default store;