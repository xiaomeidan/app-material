import { sendQuest } from "@/api/request";

export function saveUser(params: { openId: string; unionId: string; }) {
  return sendQuest("POST", "mcs/user/save", params);
}
