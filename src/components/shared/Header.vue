<template>
  <nav
    class="navbar navbar-dark navbar-expand-xl sticky-top bg-info"
    style="width: 100%"
  >
    <div class="header-container">
      <button
        class="navbar-toggler"
        v-if="showBtn == 'backbtn'"
        type="button"
        @click="goBack()"
      >
        <span><img src="@/assets/back.png"/></span>
      </button>
      <button
        class="navbar-toggler"
        v-if="showBtn == 'homebtn'"
        type="button"
        @click="goHome()"
      >
        <span><img src="@/assets/home.png"/></span>
      </button>
      <span class="header-text" v-if="showHeading && !postData.showPostBtn">{{
        headerText
      }}</span>
      <div class="posted-btn" v-if="postData.showPostBtn">
        <span class="header-text font-light" v-if="showHeading">{{
          headerText
        }}</span>
        <span v-else></span>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import router from "@/router";

export default {
  props: {
    showpostedBtn: {
      type: Boolean,
      default: false,
    },
    postBtnClicked: {
      type: Function,
    },
    getpostData: Object,
  },
  data: () => ({
    showDialog: false,
    postData: {
      showPostBtn: false,
    },
  }),
  computed: {
    ...mapGetters({
      showHeading: "getShowHeading",
      headerText: "getHeadingText",
      previousRoute: "previousRoute",
    }),
    showSignoutBtn() {
      return router.currentRoute.path === "/";
    },

    showBtn() {
      return (
        router.currentRoute.path !== "/" &&
        (this.previousRoute &&
        this.previousRoute.path === router.currentRoute.path
          ? "homebtn"
          : "backbtn")
      );
    },
  },
  watch: {
    getpostData: function(newVal, oldVal) {
      this.postDetails(newVal);
    },
  },
  methods: {
    ...mapActions({
      logoutUser: "user/logout",
      setRoutingHistory: "SETROUTERHISTORY",
    }),
    goBack() {
      this.$router.back();
    },
    goHome() {
      this.setRoutingHistory([])
      this.$router.replace("/");
    },
    postDetails(val) {
      this.postData = val;
    },
    logout() {
      this.showDialog = !this.showDialog;
    },
    logoutAgreed() {
      this.showDialog = !this.showDialog;
      this.logoutUser();
    },
  }
};
</script>

<style scoped>
.bg-info {
  /* background-color: #ffe574 !important; */
  min-height: 62px;
}

.header-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
}

.header-text {
  grid-column: 2/10;
  display: grid;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 22px;
  /* color: darkslategrey; */
  color: #1a3263;
}

.posted-btn {
  grid-column: 2/13;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.font-light {
  font-size: 18px;
}
.v-application .primary {
  background-color: #ffe574 !important;
  border-color: #ffe574 !important;
  color: black;
}
.sign-out-icon {
  grid-column: 12/13;
  font-size: 20px;
  /* color: #2b3c4d; */
  color: #1a3263;
}
</style>
