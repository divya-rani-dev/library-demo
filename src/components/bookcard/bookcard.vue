<template>
  <div class="bookcard">
    <div class="image">
      <img :src = "book.image" alt="" />
    </div>
    <div class="details">
      <div class="book-details">
        <div>
          {{ book.title }}
        </div>
      </div>
      <div class="book-price">
        {{ book.price }}
      </div>
      <div class="book-author">
        {{ book.authorName }}
      </div>
      <div class="book-availability">
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="indigo"
          @click="book.availableCount >1 && book.availableCount--"
        >
          <v-icon dark> mdi-minus </v-icon>
        </v-btn>
        <div>{{ book.availableCount }}</div>
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="indigo"
          @click="book.availableCount >0 && book.availableCount++"
        >
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </div>
      <div class="book-description">
        {{ book.description }}
      </div>
      <div class="book-button">
        <v-btn depressed color="primary"
        @click.stop="updateCountBtnClicked(book.bookId, book.availableCount)"
        > Update </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["book","updateCountBtnClicked"],
};
</script>
<style scoped>
.bookcard {
  display: grid;
  border: 1px solid lightgray;
  grid-template-columns: 2fr 8fr;
  grid-auto-rows: minmax(150px, auto);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 400px;
  /* padding: 30px;
  margin: 50px; */
}
.bookcard .image img {
  width: 90px;
}
.image {
  justify-self: center;
  align-self: center;
  padding: 10px;
}

.details {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, minmax(50px, auto));
  padding: 10px 15px;
}
.book-details {
  grid-column: 1/5;
}
.book-description {
  grid-column: 1/5;
  /* grid-row: 3/5; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 40px;
  line-height: 20px;
}
.book-availability {
  grid-column: 5/7;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  align-self: center;
  justify-self: center;
}
.book-button {
  grid-column: 5/7;
  justify-self: center;
  align-self: center;
}
.book-details {
  display: flex;
  justify-content: space-between;
  align-self: center;
}
.book-price {
  grid-column: 5/7;
  justify-self: end;
  align-self: center;
}
.book-author {
  grid-column: 1/5;
}
.book-availability button {
  width: 25px;
  height: 25px;
  align-self: center;
  justify-self: center;
}
</style>