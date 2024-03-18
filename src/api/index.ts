import { Post } from '../interfaces';

export const getPosts = async (currentPage: string, isFirstFetch: boolean) => {
  const url = !isFirstFetch
    ? `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`
    : `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${+currentPage * 10}`;

  return (await fetch(url).then(response => response.json())) as Post[];
};

export const getPostById = async (id: number) => {
	return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.json())
}