import { sendQuest } from "@/api/request";

export function getBaseInfo(params: { unionId: string; vipNum: number; vipType: }) {
  return sendQuest({
    url: "mcs/vipLog/save",
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