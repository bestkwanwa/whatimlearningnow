import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './router';
import { Layout } from 'antd';
import Header from './component/Header';
import Footer from './component/Footer';
// 保证覆盖
import './static/css/index.css';
function App() {
  return (
    <Layout className='page'>
      <h1 style={{textAlign:'center'}}>本项目仅作学习用途，感谢cnodejs.org提供的api。请移步cnodejs.org获得完整的社区体验！</h1>
      <Header></Header>
      <Layout.Content>
        <div className='wrap'>
          <Switch>
            {routes.map((item, index) => {
              return <Route
                key={index}
                path={item.path}
                exact={item.exact}
                render={(props) => {
                  props.username = 'elvis'
                  return item.render(props)
                }}
              ></Route>
            })}
          </Switch>
        </div>
      </Layout.Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;

