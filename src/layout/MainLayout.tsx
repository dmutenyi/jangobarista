import React from 'react';
import { Footer, Header } from '../components';

const MainLayout = (props: any) => {
  const { children } = props;

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
};

export default MainLayout;
