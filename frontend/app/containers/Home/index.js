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
 
 import GlobalStyle from '../../global-styles';
 import { socket } from '../../socket';
 
 import { Layout, Menu, Breadcrumb } from 'antd';
 import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
 
 const { SubMenu } = Menu;
 const { Header, Content, Sider } = Layout;
 

 
import { userLogin, nInfo } from "../App/socketFunc"
import { Dashboard } from '../Dashboard';
import { Welcome } from '../Welcome';
import axios from 'axios'

const config = require('../../socket/config');


//Validar login
userLogin() 

 export function HomePage() {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const [sendApi, setSendApi] = useState(false);
  const socketOn = () => {
    socket.on('user', user => {
      setUser(user)
      setLogged(true)
      nInfo(`Logged with ${user.username}`)
    })
    socket.on(`logError`, data => {
      console.log(data)
    })
  }
  const estouLogado = usuario => {
    setLogged(true)
    setUser(usuario)
  }
  const validarToken = async () => {
    if(!sendApi){
      setSendApi(true)
      const user = await axios.post(`${config.configSite.api}/api/v1/validationToken?token=${window.localStorage.getItem('token')}`)
      if(user.data.username){
        estouLogado(user.data)
      }
    }
    
  }
  validarToken()
   return (
     <div>
        <Helmet
        defaultTitle={`NekoApp - Início`}
        >
        <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        <div>
        { logged ? <Dashboard user={user}/>
        : <Welcome estouLogado={() => estouLogado}/>
        }
        </div>
     </div>
   );
 }
 