import { Forum } from 'next/font/google';
import "./globals.css";
import { Metadata } from 'next';

const forum = Forum({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Imperial Grand Hotel",
  description: "A website showcasing a hotel management system with booking and service features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./Favicon.svg" />
      </head>
      <body
        className={forum.className}
      >
        {children}
      </body>
    </html>
  );
};
