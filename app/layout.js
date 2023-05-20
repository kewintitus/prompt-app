import './../styles/globals.css';

export const metadata = {
  title: 'Promptapp',
  description: 'Discover and share AI prompts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="main">
        <div className="gradient"></div>
      </div>
      <main>
        <body>{children}</body>
      </main>
    </html>
  );
}
