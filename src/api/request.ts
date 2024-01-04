const BASE_URL = "http://47.92.52.15/";

export function sendQuest(method: "POST" | "GET", url: string, data?: any) {
  uni.request({
    url: BASE_URL + url,
    method,
    data,
    timeout: 60000,
    header: {
      Authorization: uni.getStorageSync("token") ? uni.getStorageSync("token") : "",
    },
    dataType: "json",
  });
}
