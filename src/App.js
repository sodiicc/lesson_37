import { Col, Layout, Space } from 'antd';
import './App.css';
import Users from './components/Users';
import styles from './styles/app.module.scss'
import { Content, Footer, Header } from 'antd/es/layout/layout';

function App() {
  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
  }
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    // lineHeight: '120px',
    color: '#fff',
    backgroundColor: 'white',
  }
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
  }
  return (
    <div className="App">
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
        // size={[0, 48]}
      >
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle} >

            <Users />
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Space>
      {/* <header className={styles.header}>Best React App
        <Col span={8} className={styles['col-8']}>col-8</Col></header>
      <footer className={styles.footer}>Footer</footer> */}
    </div>
  );
}

export default App;
