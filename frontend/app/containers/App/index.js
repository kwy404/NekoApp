/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import { HomePage } from '../HomePage';
import { Dashboard } from '../Dashboard';

import 'antd/dist/antd.css';

import { userLogin } from "./socketFunc"
import { socket } from '../../socket';

//Validar login
userLogin()

export default function App() {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const socketOn = () => {
    socket.on('user', user => {
      setUser(user)
      setLogged(true)
    })
  }
  socketOn()
  return (
    <div>
      <Helmet
        defaultTitle={`NekoApp`}
      >
        <meta name="description" content="" />
      </Helmet>
      <Switch>
        <Route exact path="/" 
        component={() => 
        !logged ? HomePage : <Dashboard user={user}/>
        }
        user={user}
        />
        <Route path="" 
        component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
