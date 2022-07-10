import { Layout } from 'antd';
import 'antd/dist/antd.min.css';
import React from 'react';
import './App.css';
import Home from './components/Home/Home';
const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout className='layout'>
      <Header className='header'>Inventory App</Header>
      <Content>
        <Home />
      </Content>
    </Layout>
  );
};

export default App;
