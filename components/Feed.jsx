'use client';
import React, { useEffect, useState } from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return <div className="mt-16 prompt_layout">{data.map(() => {})}</div>;
};

const Feed = () => {
  const [searchText, setSearchText] = useState();
  const handleSearchChange = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
    };
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center" action="">
        <input
          type="text"
          placeholder="Search for prompts, tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={[]} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
