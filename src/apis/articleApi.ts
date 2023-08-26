export interface Article {
  cover?: string; //封面
  title: string; //标题
  content: string; //简介
  author?: string; //作者
  views?: number; //浏览量
  favor?: number; //点赞量
  share?: number; //转发量
  comment?: string[]; //评论
}
