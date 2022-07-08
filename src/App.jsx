import { Layout } from 'antd';
import 'antd/dist/antd.min.css';
import React from 'react';
import './App.css';
import Home from './components/Home';
const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <Layout className='layout'>
      <Header className='header'>Inventory App</Header>
      <Content>
        <Home />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
