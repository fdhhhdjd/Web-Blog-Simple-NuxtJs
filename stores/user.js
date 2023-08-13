// stores/counter.js
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    posts: [],
    isMenuOverlay: false,
    isLogoutOverlay: false,
  }),

  actions: {
    async getAllPosts() {
      let res = await useFetch("/api/get-all-posts");
      console.log(res, "data");
      this.posts = res.data;
      return res.data;
    },
  },
});
