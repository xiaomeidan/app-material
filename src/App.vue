<script setup lang="ts">
import { getBaseInfo } from "@/api/user";
import useUserStore from '@/stores/user';
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

const userStore = useUserStore();

onLaunch(() => {
  console.log("App Launch");
  login();
});
onShow(() => {
  console.log('App Show');
});
onHide(() => {
  console.log("App Hide");
});

function login() {
  // 调用微信登录接口
  uni.login({
    provider: "weixin",
    onlyAuthorize: true,
    success: function (loginRes) {
      // console.log("登录成功：", loginRes);
      // 获取到用户登录凭证（code）
      const code = loginRes.code;
      if (code) {
        uni.request({
          url: "https://api.weixin.qq.com/sns/jscode2session",
          method: "GET",
          data: {
            appid: "wxceda7a35e6fcab48", //你的小程序的APPID
            secret: "86b8cd55c6bae3165e74f07b7b700f98", //你的小程序的secret,
            js_code: code, //wx.login 登录成功后的code
            grant_type: "authorization_code",
          },
          success: (cts) => {
            //openid 用户唯一标识
            //unionid 开放平台唯一标识
            getBase(cts.data.openid, cts.data.unionid);
          },
        });
      } else {
        console.log('登录失败！' + loginRes.errMsg);
      }
    },
  });
}

async function getBase(openId: string, unionId: string) {
  if (!openId && !unionId) {
    return;
  }
  const user = await getBaseInfo({ openId, unionId });
  console.log('user ', user);
  userStore.setUser({
    openid: openId,
    unionid: unionId,
    name:  user.yhnc || '',
    avatar: user.imgurl || '',
    type: user.yhlx || 0,
    memberDate: user.hydqr || '',
    freeUpload: user.mfcs || 0
  });
}
</script>
<style></style>
