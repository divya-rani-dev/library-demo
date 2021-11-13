<template>
  <v-app>
    <div id="app">
      <router-view
        :postBtnClicked="postBtnClicked"
        name="header-top"
        :getpostData="postData"
        :key="$route.fullPath"
      ></router-view>
      <router-view
        :testProp="trigger"
        :passPostData="passPostData"
        :key="'content-' + $route.fullPath"
      ></router-view>
    </div>
  </v-app>
</template>

<script>
/* eslint-disable */
import { VueEditor } from "vue2-editor";
import router from "@/router";

export default {
  name: "app",
  data: () => ({
    onLine: navigator.onLine,
    showDialog: false,
    showBackOnline: false,
    trigger: false,
    postData: {
      showPostBtn: false,
    },
  }),
  components: {
    VueEditor
   
  },
  watch: {
    onLine(v) {
      if (v) {
        this.showBackOnline = true;
        setTimeout(() => {
          this.showBackOnline = false;
        }, 1000);
      }
    },
  },
  methods: {
    updateOnlineStatus(e) {
      const { type } = e;
      this.onLine = type === "online";
      if (!this.onLine) {
        this.showDialog = true;
      }
    },
    postBtnClicked() {
      this.trigger = !this.trigger;
    },
    passPostData(val) {
      this.postData = val;
    },
    closeDialog() {
      if (this.onLine) {
        this.showDialog = !this.showDialog;
        if (router.currentRoute.path === "/accessrequest") {
          router.replace("/");
          location.reload();
          
        }
      }
    },
  },
  mounted() {
    window.addEventListener("online", this.updateOnlineStatus);
    window.addEventListener("offline", this.updateOnlineStatus);
  },
  beforeDestroy() {
    window.removeEventListener("online", this.updateOnlineStatus);
    window.removeEventListener("offline", this.updateOnlineStatus);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Average&family=Fjalla+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,400;0,500;0,700;0,800;0,900;1,800;1,900&display=swap");

html,
body {
  font-family: "Mulish", sans-serif;
  /* background-color: #ffe574; */
}

#app {
  font-family: "Mulish", sans-serif;
  /* background-color: #ffe574; */
  height: 100%;
}

.fd-title {
  font-family: "Fjalla One", sans-serif;
}
</style>
