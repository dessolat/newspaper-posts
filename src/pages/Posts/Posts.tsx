import { useSearchParams } from 'react-router-dom';

import PostList from 'components/Posts/PostList/PostList';
import NewPostFetchDivider from 'components/Posts/NewPostFetchDivider';

import usePosts from 'hooks/usePosts';

import Loader from 'UI/Loader/Loader';
import Button from 'UI/Buttons/Button/Button';

import cl from './Posts.module.css';

const Posts = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { posts, isLoading, error } = usePosts(searchParams.get('page') || '1');

  const getRender = () => {
    // Error render
    if (error) return <h1 className={cl.error}>{error}</h1>;

    // Loader render
    if (isLoading && posts.length === 0) return <Loader />;

    // Empty posts render
    if (posts.length === 0) return <h1>There are no posts.</h1>;

    const currentPage = Number(searchParams.get('page') || 1);

    function handleBottomPage() {
      setSearchParams(
        prev => {
          prev.set('page', (Number(searchParams.get('page') || 1) + 1).toString());

          return prev;
        },
        { replace: true }
      );
    }
    // Main render
    return (
      <div className={cl.postsWrapper}>
        <h1 className={cl.title}>Current posts:</h1>
        <PostList posts={posts} />
        {isLoading && posts.length > 0 && <Loader />}

				{/* Div for detecting intersection with screen bottom */}
        {currentPage < 5 && <NewPostFetchDivider onIntersect={handleBottomPage} />}

				{/* Render more btn after page >= 5 */}
        {currentPage >= 5 && (
          <Button onClick={handleBottomPage} style={{ margin: '1rem 0' }}>
            Загрузить ещё
          </Button>
        )}
      </div>
    );
  };

  return (
    <section>
      <div className='container'>{getRender()}</div>
    </section>
  );
};
export default Posts;
