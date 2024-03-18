import { Link } from 'react-router-dom';
import { Post } from 'interfaces';

import cl from './PostListItem.module.css'

type Props = { post: Post };

const PostListItem = ({ post }: Props) => {
  return (
    <li key={post.id} className={cl.post}>
      <Link to={`/${post.id}`}>
				<p className={cl.postTitle}>{post.id}. {post.title}</p>
				<p className={cl.postBody}>{post.body}</p>
			</Link>
    </li>
  );
};
export default PostListItem;
