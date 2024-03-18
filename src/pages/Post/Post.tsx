import { useParams } from 'react-router-dom';

import usePostById from 'hooks/usePostById';

import Loader from 'UI/Loader/Loader';

import cl from './Post.module.css';

const Post = () => {
  const { id } = useParams();

  const { post, isLoading, error } = usePostById(Number(id));

  const getRender = () => {
    // Error render
    if (error) return <h1 className={cl.error}>{error}</h1>;

    // Loader render
    if (isLoading) return <Loader />;

    // Empty post render
    if (post === null) return <p>There is no post.</p>;

    // Main render
    return (
      <div className={cl.postWrapper}>
        <h3 className={cl.header}>
          <span>ID: {post.id}</span>
          <span>UserID: {post.userId}</span>
        </h3>
				<h1 className={cl.title}>Title: {post.title}</h1>
				<p className={cl.body}>Body: {post.body}</p>
      </div>
    );
  };

  console.log(post);

  return (
    <section>
      <div className='container'>{getRender()}</div>
    </section>
  );
};
export default Post;
