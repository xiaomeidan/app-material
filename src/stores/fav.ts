import { defineStore } from "pinia";
import type { Good } from "@/types/index";

const favStore = defineStore("fav", () => {
  const fav = ref<Good[]>([]);
  const favIds = computed(() => fav.value.map(({ id }) => id));

  function isFav(id: string) {
    return favIds.value.includes(id);
  }

  function toggleFav(good: Good) {
    const favState = isFav(good.id);
    uni.showToast({
      title: favState ? "Cancel Favourite" : "Favourite Successfully",
      duration: 1000,
      position: "top",
    });
    if (favState) {
      fav.value = fav.value.filter((item) => item.id !== good.id);
      return;
    }
    fav.value = [good, ...fav.value];
  }

  return {
    fav,
    isFav,
    toggleFav,
  };
});

export default favStore;
