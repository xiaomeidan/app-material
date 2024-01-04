import { sendQuest } from "@/api/request";

export function getCollection(params: {
  collectionType: "i" | "w" | "v";
  pageIndex: number;
  pageSize: number;
}) {
  return sendQuest("POST", "mcs/fileCollection/queryConllectionList", params);
}
