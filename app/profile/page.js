'use client';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import Profile from '@components/Profile';

const Profile = () => {
  return (
    <Profile
      name="My"
      desc="Welcome to your personalised profile page"
      data={[]}
      handleEdit={''}
      handleDelete={''}
    />
  );
};

export default Profile;
