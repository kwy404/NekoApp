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
import { HomePage } from '../Home';
import { Dashboard } from '../Dashboard';

import { socket } from '../../socket';
import { userLogin } from "../App/socketFunc"

import 'antd/dist/antd.css';


export default function App() {
  const socketOn = () => {
    socket.on('token', token => {
      window.localStorage.setItem(`token`, token)
      userLogin()
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
        component={HomePage}
        />
        <Route path="" 
        component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
