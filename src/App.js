import React from 'react';
import { Route } from 'react-router-dom';

import { SideBar, Footer, Content, HeaderMenu } from './components';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <SideBar />
        <div className="content">
          <HeaderMenu/>
          <Route exact path="/" component={ Content } />
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
