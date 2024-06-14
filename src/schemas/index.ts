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


export type UserDetail =  {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  balance: number;
}

 export type User = {
  id: number;
  email: string;
  password: string;
  role: number;
  UserDetail: UserDetail[];
}
