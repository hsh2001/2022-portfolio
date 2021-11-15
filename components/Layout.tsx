import Head from 'next/head';

import Reset from '../styles/Reset';

import { Footer } from './Footer';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>flutter 프론트엔드 개발자, 권오성.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Reset />

      <main>{children}</main>
      <Footer />
    </>
  );
};
