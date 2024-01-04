<template>
  <button @click="login">微信登</button>
  openId {{ openid }}<br />
  unionid {{ unionid }} <br />session_key {{ session_key }}
</template>

<script setup lang="ts">
import { ref } from "vue";
import { saveUser } from "@/api/user";

const openid = ref("");
const unionid = ref("");
const session_key = ref("");

function getUserInfo() {
  uni.getUserProfile({
    desc: "weixin",
    success: (res) => {
      console.log(res, "授权成功");
    },
    fail: (err) => {
      console.log(err, "失败授权");
    },
  });
}

async function signup() {
  if (!openid.value && !unionid.value) {
    return;
  }
  await saveUser({ openId: openid.value, unionId: unionid.value });
}

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
        console.log("登录失败！" + loginRes.errMsg);
      }
    },
  });
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
