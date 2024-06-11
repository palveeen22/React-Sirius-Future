export type Comment = {
  id: number;
  email: string;
  body: string;
};

export type CommentDetail = Comment & {
  postId: number;
  name: string;
};


export type TLogin = {
  email: string;
  password: string;
}