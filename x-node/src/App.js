import React from 'react';
import { Affix, Layout } from 'antd';
import Header from './component/Header';
import { Route, Switch } from 'react-router-dom';
import { routes } from './router';
const { Content, Sider, Footer } = Layout
function App() {
  return (
    <Layout>
      <Affix offsetTop={0}>
        <Header></Header>
      </Affix>
      <div className='wrap'>
        <Switch>
          {routes.map((item, index) => {
            return <Route
              key={index}
              path={item.path}
              exact={item.exact}
              render={() => {
                return item.render()
              }}
            ></Route>
          })}
        </Switch>

      </div>
    </Layout>
  );
}

export default App;
