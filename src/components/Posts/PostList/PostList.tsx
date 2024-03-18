import { Post } from 'interfaces';
import PostListItem from '../PostListItem/PostListItem';

import cl from './PostList.module.css';

type Props = { posts: Post[] };

const PostList = ({ posts }: Props) => {
  return (
    <ul className={cl.list}>
      {posts.map(post => (
        <PostListItem key={post.id} post={post} />
      ))}
    </ul>
  );
};
export default PostList;
