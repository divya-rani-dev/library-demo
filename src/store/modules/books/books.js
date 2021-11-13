import * as fb from '@/common/config';
export default {
    namespaced: true,
    getters: {
        getBookList: state => {
            return state.bookList;
        }
       
    },
    actions: {
        async fetchBook({
            commit
        }) {
           const bookList = [];
            const snapshot = await fb.booksCollection.where("status", "==", "active").get()
            snapshot.docs.forEach(books => {
                const bookDetails = books.data()
                bookList.push(bookDetails)
            })
            commit('SET_BOOK_LIST', {
                bookList
            })
        },
        async UpdateBookCount({
            commit
        },payload) {

            try {
                await fb.booksCollection
                    .doc(payload.bookId)
                    .update({
                        availableCount:payload.count
                    })
                return payload.bookId;
            } catch (err) {
                throw err;
            }
        }
    },
    mutations: {
        SET_BOOK_LIST(state, payload) {
            return state.bookList = payload.bookList;
        },
        
    },
    state: {
        bookList: []
    }
}
// test
