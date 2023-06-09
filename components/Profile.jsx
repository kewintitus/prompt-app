import React from 'react';
import PromptCard from './PromptCard';

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full ">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
        <p className="desc text-left">{desc}</p>
        <div className="mt-10 prompt_layout">
          {data?.map((post) => {
            console.log(post);
            return (
              <PromptCard
                key={post._id}
                post={post}
                handleEdit={handleEdit && handleEdit}
                handleDelete={handleDelete && handleDelete}
              />
            );
          })}
        </div>
      </h1>
    </section>
  );
};

export default Profile;
