/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState } from 'react';


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
import axios from 'axios'

const config = require('../../socket/config');

var userE = {}

export default function App() {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const [interval, setIn] = useState(false);
  const [sendApi, setApi] = useState(false);
  
  const verificar = () => {
    (() => {
      if(!interval){
        setIn(true)
        const verificaTimer = setInterval(() => {
          socket.wv.emit("message", {
            c: 'v',
            d: {
              token: window.localStorage.getItem(`token`) || null
            }
          })
        }, 2000);
        socket.wv.on('validation', userS => {
          if(userS.error){
            clearInterval(verificaTimer)
            socket.wc.disconnect();
            socket.wg.disconnect();
            socket.wv.disconnect();
          } else{
            if(userE.username === undefined ||
              userS.notifications && userS.notifications.length > userE.notifications.length ||
              userS.friends && userS.friends.length > userE.friends.length
              ){
              userE = userS
              setLogged(true)
            }
          }
        })
      }
    })()
  }

  const logout = () => {
    setLogged(false)
    setUser({})
    window.localStorage.setItem(`token`, null)
    socket.wc.disconnect();
    socket.wg.disconnect();
    socket.wv.disconnect();
  }

  const estouLogado = usuario => {
    setUser(usuario)
    setLogged(true)
    socket.wc.connect();
    socket.wg.connect();
    socket.wv.connect();
  }

  verificar()

  return (
    <div>
      <Helmet
        defaultTitle={`NekoApp`}
      >
        <meta name="description" content="" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={LandingPage} />

        <Route exact path="/app" component={() => 
        <HomePage 
        route="@me"
        user={userE}
        setApi={setApi}
        sendApi={sendApi}
        logout={logout}
        estouLogado={estouLogado}
        logged={logged}/>
        }/>

        <Route exact path="/channels/@me" component={() => 
        <HomePage 
        route="@me"
        sendApi={sendApi}
        estouLogado={estouLogado}
        logout={logout}
        user={userE}
        setApi={setApi}
        logged={logged}/>
        }/>

        <Route exact path="/channel/:server/:channel" component={() => 
        <HomePage 
        logged={logged}
        user={userE}
        setApi={setApi}
        sendApi={sendApi}
        estouLogado={estouLogado}
        logout={logout}
        route="channel"/>
        }/>

        <Route exact path="/channels/@me/:userId" component={() => 
        <HomePage 
        logged={logged}
        user={userE}
        setApi={setApi}
        sendApi={sendApi}
        estouLogado={estouLogado}
        logout={logout}
        route="@me"/>
        }/>
        
        <Route exact path="/channels/@me" component={() => 
        <HomePage
        user={userE}
        setApi={setApi}
        sendApi={sendApi}
        estouLogado={estouLogado}
        logged={logged}
        logout={logout}
        route="@me"/>
        }/>

        <Route path="" 
        component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
