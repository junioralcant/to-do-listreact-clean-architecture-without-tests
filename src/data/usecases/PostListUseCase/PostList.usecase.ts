import axios from 'axios';
import {
  IPostList,
  PostModel,
} from '../../../domain/models/Post.model';

export class PostListUseCase implements IPostList {
  async list(): Promise<PostModel[]> {
    const {data} = await axios.get<PostModel[]>(
      'http://localhost:3333/posts'
    );

    console.log(data);

    return data;
  }
}
