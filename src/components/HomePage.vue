<template>
  <div>
    <div class="home-container">
      <div class="welcome-text">
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-col class="text-right">
                <v-btn
                  class="text-right"
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  + Add Book
                </v-btn>
              </v-col>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Add Book</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field label="Title*" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Author name*"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea label="Description*" required></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Price*" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-file-input
                        show-size
                        label="Upload"
                        accept="image/*"
                        @change="selectImage"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  depressed
                  color="blue darken-1"
                  text
                  @click="dialog = false"
                >
                  Add
                </v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </div>
      <app-snackbar v-model="showSnackbar" text="Link Copied"></app-snackbar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Snackbar from "@/components/shared/Snackbar.vue";
import router from "@/router";
export default {
  computed: {
    ...mapGetters({
      userDetail: "user/getUserDetail",
      buddyDetails: "user/getBuddyDetails",
    }),
  },
  components: {
    appSnackbar: Snackbar,
  },

  data: () => ({
    showSnackbar: false,
    dialog: false,
  }),
  methods: {
    copyDonationLink() {
      this.showSnackbar = !this.showSnackbar;
    },
    goToPage(name) {
      router.push({ name });
    },
  },
};
</script>

<style scoped>
.home-container {
  height: 100%;
  background-color: #fffffe;
  padding: 24px;
}
.welcome-text {
  text-indent: 30px;
}

</style>
