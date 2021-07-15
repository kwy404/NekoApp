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

 
import { userLogin } from "../App/socketFunc";
 
 export function Welcome() {
  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);
  const logar = () => {
    if(username && password){
      socket.emit(`login`, {
        username,
        password
      })
    }
  }
   return (
     <div>
        <Helmet
        defaultTitle={`NekoApp - Início`}
        >
        <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        <div>
          <h1>Welcome page</h1>
          <input 
          onChange={event => setUsername(event.target.value)}
          placeholder="username"></input>
          <input 
          onChange={event => setPassword(event.target.value)}
          placeholder="password"></input>
          <button
          onClick={() => logar()}
          >Entrar</button>
        </div>
     </div>
   );
 }
 