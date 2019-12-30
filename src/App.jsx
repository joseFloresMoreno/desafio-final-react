import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PrivateRoute } from './components/private-route/PrivateRoute';
import store from './store';

import './App.css';
import Home from './containers/home/Home';
import PostDetail from './containers/post-detail/PostDetail';
import Login from './containers/login/Login';
import PrivateHome from './containers/private-home/PrivateHome';
import PrivateHomeUser from './containers/private-home-user/PrivateHomeUser';
import NotFound from './containers/not-found/NotFound';
import PrivateSavePost from './containers/private-save-post/PrivateSavePost';
import Header from './components/header/Header';


function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post/detail/:id" component={PostDetail} />
            <Route path="/login" component={Login}/>
            <PrivateRoute exact path="/private/home" component={PrivateHome} />
            <PrivateRoute exact path="/private/home/user" component={PrivateHomeUser} />
            <PrivateRoute path="/private/home/post/create" component={PrivateSavePost} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
