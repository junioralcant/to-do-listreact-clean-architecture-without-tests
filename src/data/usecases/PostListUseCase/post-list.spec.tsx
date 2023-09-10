import axios from 'axios';
import {mockPosts} from '../../../presentation/components/organisms/PostList/post-list.spec';
import {PostListUseCase} from './PostList.usecase';
import {vi} from 'vitest';

type SutType = {
  sut: PostListUseCase;
};

function makeSut(): SutType {
  const sut = new PostListUseCase();
  return {
    sut,
  };
}

describe('PostListUseCase', () => {
  it('Should return PostListUseCase with correct values', async () => {
    const postMock = mockPosts();

    const mockAxios = vi
      .spyOn(axios, 'get')
      .mockResolvedValueOnce({data: postMock});

    const {sut} = makeSut();

    const response = await sut.list();

    expect(response).toEqual(postMock);
    expect(mockAxios).toHaveBeenCalledWith(
      'http://localhost:3030/posts'
    );
    expect(mockAxios).toHaveBeenCalledTimes(1);
  });
});
