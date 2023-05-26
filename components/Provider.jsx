'use client';

import React from 'react';

import { SessionProvider, useSession } from 'next-auth/react';

const Provider = ({ children, session }) => {
  // const session = useSession();
  console.log(session);
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
