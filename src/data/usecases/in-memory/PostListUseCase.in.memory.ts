/* eslint-disable @typescript-eslint/require-await */
import {
  IPostList,
  PostModel,
} from '../../../domain/models/Post.model';
import {mockPosts} from '../../../presentation/components/organisms/PostList/post-list.spec';

export class PostListUseCaseInMemory implements IPostList {
  posts: PostModel[] = mockPosts();

  async list(): Promise<PostModel[]> {
    return this.posts;
  }
}
