import { Philosopher, Roboto } from 'next/font/google';
import './globals.scss';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
});
const philosopher = Philosopher({
  variable: '--font-philosopher',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.className} ${philosopher.variable}`}>{children}</body>
    </html>
  );
}
