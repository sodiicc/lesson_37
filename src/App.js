import { Col, Layout, Menu, Space } from 'antd';
import './App.css';
import Users from './components/Users';
import styles from './styles/app.module.scss'
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Link, Route, Routes } from 'react-router-dom';
import User from './components/User';
import About from './components/About';
import RouterComponent from './RouterComponent';

function App() {
  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    // backgroundColor: '#7dbcea',
  }
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    // lineHeight: '120px',
    color: '#000',
    backgroundColor: 'white',
  }
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
  }
  const navItems = [
    'Home',
    'Users',
    'Contacts',
    'About'
  ]
  return (
    <div className="App">
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        <Layout>
          <Header style={headerStyle}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={navItems.map((item) => {
                const key = item;
                return {
                  key,
                  label: <Link to={item.toLowerCase()}>{item}</Link>,
                };
              })}
            />
          </Header>
          <Content style={contentStyle} >
            <RouterComponent />
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Space>
    </div>
  );
}

export default App;
