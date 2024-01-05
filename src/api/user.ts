import { sendQuest } from "@/api/request";

export function getBaseInfo(params: { openId: string; unionId: string; }): Promise<{
  hydqr: string;
  imgurl: string;
  mfcs: string;
  openId: string;
  unionId: string;
  yhlx: string;
  yhnc: string;
}> {
  return sendQuest({
    url: "mcs/user/save",
    method: 'post',
    data: params,
    hideLoading: true
  });
}

export function editBaseInfo(params: { unionId: string; imgUrl?: string; yhnc?: string }) {
  return sendQuest({
    url: "mcs/user/update",
    method: 'post',
    data: params,
  });
}