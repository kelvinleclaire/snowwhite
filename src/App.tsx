import React, { FC, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './components/Layout/Layout';
import Content from './components/Content/content';
import NavMenu from './components/NavMenu/NavMenu';
import Pagefooter from './components/Footer/pagefooter';


const App: FC = () => {
  const [headerStyle, setHeaderStyle] = useState(true);

  const onContentScroll = (isBig: boolean) => {
    setHeaderStyle(isBig);
  }
  return (
    <Layout>
      <NavMenu isBig={headerStyle} />
      <Content onScroll={(isBig: boolean) => onContentScroll(isBig)} />
      <Pagefooter />
    </Layout>
  );
};


export default App;
