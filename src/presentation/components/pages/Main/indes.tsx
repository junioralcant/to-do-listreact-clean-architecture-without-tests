import {PostListUseCase} from '../../../../data/usecases/PostListUseCase/PostList.usecase';
import {PostList} from '../../organisms/PostList';

export function Main() {
  const postListUseCase = new PostListUseCase();
  return <PostList postListUseCase={postListUseCase} />;
}
