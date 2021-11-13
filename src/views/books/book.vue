<template>
<div>
    <app-snackbar v-model="showSnackbar" :text="snackbarText"></app-snackbar>
    <div class="book-list-container">
        <app-book-card v-for="book in getBookList" :key="book.bookId" :book="book" :updateCountBtnClicked="updateCountBtnClicked">
        </app-book-card>
    </div>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";
import Bookcard from "@/components/bookcard/bookcard.vue";
import Snackbar from "@/components/shared/Snackbar.vue";
export default {
    data: () => ({
        showSnackbar: false,
        snackbarText: "",
    }),
    computed: {
        ...mapGetters({
            getBookList: "books/getBookList",
        }),
    },
    created() {
        if (this.getBookList && this.getBookList.length === 0) {
            this.getBookDetails();
        }

    },
    methods: {
        ...mapActions({
            getBookDetails: "books/fetchBook",
            updateBookCount: "books/UpdateBookCount"
        }),
        async updateCountBtnClicked(bookId, count) {
            try {
                await this.updateBookCount({
                    bookId,
                    count,
                });
                this.showSnackbar = true;
                this.snackbarText = "Updated successfully";
            } catch (err) {
                this.showSnackbar = true;
                this.snackbarText = "Unable to update the count.Please try again";
            }
        },

    },

    components: {
        appBookCard: Bookcard,
        appSnackbar: Snackbar,
    },
};
</script>

<style scoped>
.book-list-container {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
    margin: 20px 10px;
}

@media only screen and (max-width: 840px) {
    .book-list-container {
        grid-template-columns: 1fr;
    }
}
</style>
