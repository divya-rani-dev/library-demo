import * as fb from '@/common/config';
export default {
    namespaced: true,
    getters: {
        getOrderList: state => {
            return state.orderList;
        }
    },
    actions: {
        async FETORDER({
            commit
        }) {

           const orderList = [];
            const snapshot = await fb.orderCollection.get()
            snapshot.docs.forEach(Orders => {
                const orderDetails = Orders.data()
                orderList.push(orderDetails)
            })
            commit('SET_ORDER_LIST', {
                orderList
            })
        }
    },
    mutations: {
        SET_ORDER_LIST(state, payload) {
            return state.orderList = payload.orderList;
        }
    },
    state: {
        orderList: []
    }
}
// test
