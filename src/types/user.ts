export interface User {
  openid: string;
  unionid: string;
  name: string;
  avatar: string;
  type: number; // 0-普通用户 1-月度会员 2-季度会员 3-年度会员 4-永久会员
}