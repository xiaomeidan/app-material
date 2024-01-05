import { defineStore } from "pinia";
import { ref } from 'vue';
import type { User } from "@/types/user";

const userStore = defineStore("user", () => {
  const user = ref<User>({
    openId: '',
    unionId: '',
    name: '',
    avatar: '',
    type: 0,
    memberDate: '',
    freeUpload: 0
  });

  function setUser(u: Partial<User>) {
    user.value = { ...user.value, ...u };
  }

  return {
    user,
    setUser
  };
});

export default userStore;
