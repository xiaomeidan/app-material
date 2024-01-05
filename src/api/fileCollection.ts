import { sendQuest } from "@/api/request";

export function getCollection(params: {
  collectionType: "i" | "w" | "v";
  pageIndex: number;
  pageSize: number;
}) {
  return sendQuest({ 
    method: 'post',
    url: 'mcs/fileCollection/queryConllectionList',
    data: params
  });
}
