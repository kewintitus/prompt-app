'use client';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/Profile';

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState();

  const router = useRouter();

  const handleEdit = (post) => {
    console.log(post);
    router.push(`/update-prompt?id=${post[0]._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfirmed = confirm('Are  you sure to delete this prompt');

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post[0]._id.toString()}`, {
          method: 'DELETE',
        });

        const filteredPosts = posts.filter((p) => p._id !== post[0]._id);

        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, []);

  return (
    <Profile
      name="My"
      desc="Welcome to your personalised profile page"
      data={posts}
      handleEdit={() => {
        handleEdit(posts);
      }}
      handleDelete={() => {
        handleDelete(posts);
      }}
    />
  );
};

export default MyProfile;
