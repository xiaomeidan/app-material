<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
      uni.login({
        provider: 'weixin', //使用微信登录
        success: function (loginRes) {
          console.log("wx login", loginRes.authResult);
        },
      });
  // uni.getSetting({
  //   success(res) {
  //     console.log("setting", res.authSetting);
  //   },
  // });
  // uni.authorize({
  //   scope: "scope.userProfile",
  //   success: () => {
  //     uni.getUserProfile({
  //       success: (userInfo) => {
  //         console.log("info ", userInfo);
  //       },
  //     });
  //   },
  // });
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
      console.log("登录成功：", loginRes);

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
            // 换取成功后 暂存这些数据 留作后续操作
            openid.value = cts.data.openid; //openid 用户唯一标识
            unionid.value = cts.data.unionid; //unionid 开放平台唯一标识
            session_key.value = cts.data.session_key; //session_key  会话密钥
            // getUserInfo();
            signup();
          },
        });
      } else {

        console.log('登录失败！' + loginRes.errMsg);
      }
    },
  });
}
</script>
<style></style>
