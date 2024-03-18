import { useEffect, useState } from 'react';
import { getPostById } from '../api';
import { Post } from '../interfaces';

const usePostById = (id: number) => {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Getting post by id function
    (async () => {
      try {
        setLoading(true);

        const post = await getPostById(id);

        setError(null);
        setPost(post);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { post, isLoading, error };
};

export default usePostById;
