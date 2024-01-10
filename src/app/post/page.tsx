import React from 'react';
import { PostForm } from './PostForm';
import { PostHeader } from './PostHeader';
import { PostContainer } from './PostContainer';

export default function Post() {
  return (
    <main>
      <PostContainer>
        <PostHeader />
        <PostForm />
      </PostContainer>
    </main>
  );
}
