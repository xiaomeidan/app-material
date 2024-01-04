import { defineStore } from "pinia";
import img9 from "@/static/good/thunder.png";
import img10 from "@/static/good/wind.png";
import type { User } from "@/types/user";

const userStore = defineStore("user", () => {
  const cart = ref<User>({
    openid: '',
    unionid: '',
    name: '',
    avatar: '',
    type: 0
  });

  function addToCart(good: Good) {
    const isExist = cart.value.find(({ id }) => id === good.id);
    setGoodNumber(good, isExist ? isExist.count + 1 : 1);
  }

  function rmFromCart(good: Good) {
    const isExist = cart.value.find(({ id }) => id === good.id);
    if (isExist) {
      setGoodNumber(good, good.count - 1);
    }
  }

  function setGoodNumber(good: Good, count: number) {
    if (count <= 0) {
      cart.value = cart.value.filter(({ id }) => id !== good.id);
      return;
    }

    const isExist = cart.value.find(({ id }) => id === good.id);
    if (isExist) {
      isExist.count = count;
      return;
    }
    cart.value = [{ ...good, count }, ...cart.value];
  }

  return {
    cart,
    addToCart,
    rmFromCart,
    setGoodNumber,
  };
});

export default cartStore;
