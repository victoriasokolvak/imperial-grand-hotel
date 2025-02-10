import { Forum, Poppins } from 'next/font/google';
import "./globals.css";
import { Metadata } from 'next';

const forum = Forum({
  weight: '400',
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: '300',
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'></link>
      </head>
      <body
        className={`${forum.className} ${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
};
