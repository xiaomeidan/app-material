interface Opt {
  url: string;
  method: "POST" | "GET";
}

const BASE_URL = "http://47.92.52.15/";
export function sendQuest(opt: Opt) {
  let { url, method } = opt;

  uni.request({
    url: BASE_URL + url,
    method,
    timeout: 60000,
    header: {
      Authorization: uni.getStorageSync("token") ? uni.getStorageSync("token") : "",
    },
    dataType: "json",
  });
}
