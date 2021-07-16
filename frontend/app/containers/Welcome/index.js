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
import { AuthBox, CenteringWrapper, MainLogin, Svg, Wrapper, MainRegister } from './style';

import GlobalStyle from '../../global-styles';
import { socket } from '../../socket';
  
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
  
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
  
import { userLogin } from "../App/socketFunc";

import { Background } from "./Background";

import { FormRegister } from "./FormRegister";

import { FormLogin } from "./FormLogin";

import { FormForgot } from "./FormForgot";
  

export function Welcome() {
  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);
  const [step, setStep] = useState(0);
  const [forgot, setForgot] = useState(0);
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
        <Background/>
        <Wrapper>
          <div>
            <div>
              <AuthBox>
                <CenteringWrapper>
                  { 
                  forgot == 1 &&
                  <FormForgot voidFunc={() => setForgot(0)}/>
                  }
                  { step == 0 &&
                    <FormLogin 
                    forgotFunc={() => setForgot(1)}
                    voidFunc={() => setStep(1)}/>
                  }
                  { step == 1 &&
                    <FormRegister voidFunc={() => setStep(0)}/>
                  }
                </CenteringWrapper>
              </AuthBox>
            </div>
          </div>
        </Wrapper>
        </div>
     </div>
   );
 }
 