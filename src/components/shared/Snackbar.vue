<template>
  <v-snackbar v-model="showSnackbar">
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn color="#fff" text v-bind="attrs" @click="showSnackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    value: Boolean,
    snackbar: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
    },
    timeout: {
      type: Number,
      default: 2000,
    },
  },
  computed: {
    showSnackbar: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style scoped>
div.v-snack:not(.v-snack--absolute) {
    height: 100%;
}
</style>
