import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {routes} from './router';
function App() {
  console.log(routes);
  return (
    <div>
      <Switch>
        {routes.map((item,index)=>{
          return <Route
            key={index}
            path={item.path}
            exact={item.exact}
            render={(props)=>{
              props.username='elvis'
              return item.render(props)
            }}
          ></Route>
        })}
      </Switch>
    </div>
  );
}

export default App;

