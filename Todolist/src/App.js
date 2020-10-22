import React from 'react';
import Create from './component/Create';
import List from './component/List';
import Status from './component/Status';
function App() {
  return (
    <div id="todoapp">
      <div className="title">
        <h1>todo</h1>
      </div>
      <div className="content">
        <Create></Create>
        <List></List>
        <Status></Status>
      </div>
    </div>
  );
}

export default App;
