import React, { useEffect } from 'react';
import { PostRow } from './PostRow';
import { useSelector, useDispatch } from 'react-redux';
import { loadPosts } from '../../redux/actions/postsActions';

export const PostsList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
    console.log('loading posts...');
  }, [dispatch])

  const { posts, filterWord } = useSelector((state) => state.posts);

  const filteredList = posts.filter(post=> post.name.toLocaleLowerCase().includes(filterWord.toLocaleLowerCase()))

  return (
    <div className='row'>
      <ul className='list-group'>
        {filteredList.map(({ id, name, description }) => (
          <PostRow key={id} id={id} name={name} description={description} />
        ))}
      </ul>
    </div>
  );
};
