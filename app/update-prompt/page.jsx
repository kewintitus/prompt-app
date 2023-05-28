'use client';

import { useEffect, useState } from 'react';
// import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form';

const UpdatePrompt = () => {
  const router = useRouter();
  //   const { data: session } = useSession();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: '', tag: '' });

  //   const editPrompt = () => {};

  useEffect(() => {
    const getPromptDetails = async () => {
      console.log(promptId);
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();

      setPost({ prompt: data.prompt, tag: data.tag });
    };
    if (promptId) getPromptDetails();
  }, [promptId]);

  const editPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!promptId) return alert('PromptID not found');
    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      console.log(response);

      if (response.ok) {
        console.log(post);
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={editPrompt}
      // handleSubmit={createPrompt}
    />
  );
};

export default UpdatePrompt;
