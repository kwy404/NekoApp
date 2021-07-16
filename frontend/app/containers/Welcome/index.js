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

import { Background } from "./Background";

import { FormRegister } from "./FormRegister";

import { FormLogin } from "./FormLogin";

import { FormForgot } from "./FormForgot";

import { canvasAnima } from "./canvas";

export function Welcome() {
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
   const submitForm = (e) => {
    console.log(`forgot:`, forgot, `step:`, step)
    e.preventDefault()
   }
   canvasAnima()
   return (
     <div style={{
       position: `fixed`,
       width: `100%`,
       height: `100%`,
       top: `0px`,
       left: `0px`,
       background: `#151515`
     }}>
        <Helmet
        defaultTitle={`NekoApp - Login`}
        >
        </Helmet>
        <div>
        <Background/>
        <div id="canvasB"></div>
        <Wrapper>
          <div>
            <div>
              <AuthBox onSubmit={(e) => submitForm(e)}>
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
 