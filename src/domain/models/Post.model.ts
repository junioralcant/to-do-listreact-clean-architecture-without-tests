export type PostModel = {
  id: string;
  title: string;
  body: string;
};

export interface IPostList {
  list(): Promise<PostModel[]>;
}
