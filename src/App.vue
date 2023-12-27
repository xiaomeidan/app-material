<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
  uni.authorize({
    scope: "scope.userInfo",
    success: () => {
      uni.getUserInfo({
        success: (userInfo) => {
          console.log("info ", userInfo);
        },
      });
    },
  });
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
