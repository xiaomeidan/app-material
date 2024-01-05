export interface User {
  openId: string;
  unionId: string;
  name: string;
  avatar: string;
  type: number; // 0-普通用户 1-月度会员 2-季度会员 3-年度会员 4-永久会员
  memberDate: string; // 会员到期日
  freeUpload: number; // 免费上传次数
}