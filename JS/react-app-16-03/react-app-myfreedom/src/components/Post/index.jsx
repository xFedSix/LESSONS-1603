 import React from 'react';

import { POST_DATA } from './constants';

import './styles.scss';

const Post = () => {
  return (
    <div className='post'>
      <h1 className='post__title'>{POST_DATA.title}</h1>
      <p className='post__subtitle'>{POST_DATA.subtitle}</p>
    </div>
  );
};

export default Post;
