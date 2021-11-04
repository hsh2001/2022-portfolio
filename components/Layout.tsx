import Head from 'next/head';

import Reset from '../styles/Reset';

import { Footer } from './Footer';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>소프트웨어 엔지니어, 황승현.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Reset />

      <main>{children}</main>
      <Footer />
    </>
  );
};
