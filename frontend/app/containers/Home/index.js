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

//Validar login
userLogin() 

 export function HomePage() {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const socketOn = () => {
    socket.on('user', user => {
      setUser(user)
      setLogged(true)
      nInfo(`Logado como ${user.username}`)
    })
  }
  socketOn()
   return (
     <div>
        <Helmet
        defaultTitle={`NekoApp - Início`}
        >
        <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        <div>
        { logged ? <Dashboard user={user}/>
        : <Welcome/>
        }
        </div>
     </div>
   );
 }
 