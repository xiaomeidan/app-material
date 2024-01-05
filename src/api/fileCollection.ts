import { sendQuest } from "@/api/request";
import type { Collection } from "@/types/collection";

export function getCollection(params: {
  collectionType: "i" | "w" | "v";
  pageIndex: number;
  pageSize: number;
}): Promise<Collection[]> {
  return sendQuest({ 
    method: 'post',
    url: 'mcs/fileCollection/queryConllectionList',
    data: params
  });
}

export function createCollection(params: {
  collectionDescribe: string;
  collectionTitle: string;
  collectionType: "i" | "w" | "v";
  collectionUrl: string;
}) {
  return sendQuest({ 
    method: 'post',
    url: 'mcs/fileCollection/save',
    data: params
  });
}

export function createMaterial(params: {
  fileBq: string; // 文件标签，用#分割
  fileHj: string;
  fileMd5: string;
  fileSuffix: string;
  fileUrl: string;
  sfjx: 0 | 1; // 是否精选默认为0 0-非精选，1-为精选
  title: string;
  unionId: string;
  upFileType: 'i' | 'w' | 'v' | 'c';
  upUserType: 0 | 1; // 0-普通用户上传 1-管理员上传
}) {
  return sendQuest({ 
    method: 'post',
    url: 'mcs/fileCollection/saveConllectionFileInfo',
    data: params
  });
}