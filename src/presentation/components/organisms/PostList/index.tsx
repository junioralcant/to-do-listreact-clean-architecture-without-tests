/* eslint-disable @typescript-eslint/no-floating-promises */
import {useEffect, useState} from 'react';
import {
  IPostList,
  PostModel,
} from '../../../../domain/models/Post.model';

export type PostListProps = {
  postListUseCase: IPostList;
};

export function PostList({postListUseCase}: PostListProps) {
  const [posts, setPosts] = useState<PostModel[]>();

  useEffect(() => {
    async function loadPosts() {
      const result = await postListUseCase.list();
      setPosts(result);
    }

    loadPosts();
  }, [postListUseCase]);

  return posts?.map((post) => (
    <div data-testid="post" key={post.id}>
      <h1>{post.title}</h1>
      <span>{post.body}</span>
    </div>
  ));
}
