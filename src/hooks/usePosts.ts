import { useEffect, useRef, useState } from 'react';
import { getPosts } from '../api';
import { Post } from '../interfaces';

const usePosts = (currentPage = '1') => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

	const firstFetchRef = useRef(true)

  useEffect(() => {
    // Getting posts function
    (async () => {
      try {
        setLoading(true);

        const posts = await getPosts(currentPage, firstFetchRef.current);

        setError(null);
        setPosts(prev => prev ? prev.concat(posts) : posts);

				if (firstFetchRef.current) firstFetchRef.current = false
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [currentPage]);

  return { posts, isLoading, error };
};

export default usePosts;
