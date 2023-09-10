/* eslint-disable @typescript-eslint/require-await */
import {render, screen, waitFor} from '@testing-library/react';
import {PostList, PostListProps} from '.';
import {PostModel} from '../../../../domain/models/Post.model';
import {PostListUseCaseInMemory} from '../../../../data/usecases/in-memory/PostListUseCase.in.memory';

export function mockPosts(): PostModel[] {
  return [
    {
      id: '1',
      title: 'Create a login form using formik in react js',
      body: 'Todays article will demonstrate how to develop a login form in react js using formik.',
    },
    {
      id: '2',
      title: 'How to parse or read CSV files in ReactJS',
      body: 'In this article, I will teach you how to parse or read CSV files in ReactJS in the simplest way possible.',
    },
  ];
}

function makeSut({
  postListUseCase = new PostListUseCaseInMemory(),
}: Partial<PostListProps> = {}) {
  render(<PostList postListUseCase={postListUseCase} />);

  return {
    postListUseCase,
  };
}

describe('PostList', () => {
  it('Should hide title initial state', async () => {
    makeSut();

    await waitFor(() => screen.getAllByTestId('post'));

    const posts = screen.getAllByTestId('post');

    expect(posts.length).toBe(2);
    expect(
      screen.getByText('Create a login form using formik in react js')
    ).toBeTruthy();
    expect(
      screen.getByText(
        'Todays article will demonstrate how to develop a login form in react js using formik.'
      )
    ).toBeTruthy();

    expect(
      screen.getByText('How to parse or read CSV files in ReactJS')
    ).toBeTruthy();
    expect(
      screen.getByText(
        'In this article, I will teach you how to parse or read CSV files in ReactJS in the simplest way possible.'
      )
    ).toBeTruthy();
  });
});
