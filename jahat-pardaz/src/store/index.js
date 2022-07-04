import {createStore} from 'vuex'
import {getRequest} from '@/api/request.api'
import {filter} from "core-js/internals/array-iteration";

export default createStore({
    state: {
        tickets: [],
        filter: '',
        sort: '',
        page: 1,
        pageSize: 6,
    },
    mutations: {
        SaveTickets(state, payload) {
            state.tickets = payload;
        }
    },
    getters: {
        totalPages(state) {
            return Math.ceil(state.tickets.length / state.pageSize);
        },
        pageTickets(state) {
            console.log(state.tickets.slice((state.page - 1) * state.pageSize, state.page * state.pageSize));
            return state.tickets.slice((state.page - 1) * state.pageSize, state.page * state.pageSize);
        }
    },
    actions: {
        async RequestListAction({commit, state}, filter, sortOne, sortTwo) {
            const response = await getRequest(state.filter, state.sort)
            commit('SaveTickets', response.data)
        }
    }
})
