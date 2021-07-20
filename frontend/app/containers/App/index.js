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
import { LandingPage } from '../LandingPage';

import { socket } from '../../socket';
import { userLogin } from "../App/socketFunc"

import 'antd/dist/antd.css';


export default function App() {
  
  return (
    <div>
      <Helmet
        defaultTitle={`NekoApp`}
      >
        <meta name="description" content="" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/app" component={HomePage} />
        <Route path="" 
        component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
