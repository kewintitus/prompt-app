import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { useSession } from 'next-auth/react';

export const metadata = {
  title: 'Promptapp',
  description: 'Discover and share AI prompts',
};

// const session = useSession();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
