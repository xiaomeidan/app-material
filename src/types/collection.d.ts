export interface Collection {
  collectionDescribe: string; //合集描述
  collectionTitle: string; // 合集标题
  collectionType: 'i' | 'w' | 'v'; //	合集类型
  collectionUrl: string; //	合集图片连接地址
  id: string;
}