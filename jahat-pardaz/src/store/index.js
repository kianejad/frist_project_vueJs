import {createStore} from 'vuex'
import {getRequest} from '@/api/request.api'
import {filter} from "core-js/internals/array-iteration";

export default createStore({
    state: {
        tickets: [],
        filter: '',
        sortOne: '',
        sortTwo: ''
    },
    mutations: {
        SaveTickets(state, payload) {
            state.tickets = payload
        }
    },
    actions: {
        async RequestListAction({commit, state}, filter, sortOne, sortTwo) {
            const response = await getRequest(state.filter, state.sortOne, state.sortTwo)
            console.log(state)
            commit('SaveTickets', response.data)
        }

    }
})
