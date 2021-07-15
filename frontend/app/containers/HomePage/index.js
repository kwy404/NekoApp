/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

 import React from 'react';
 import { Helmet } from 'react-helmet';
 import styled from 'styled-components';
 
 import GlobalStyle from '../../global-styles';
 import { socket } from '../../socket';
 
 import { Layout, Menu, Breadcrumb } from 'antd';
 import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
 
 const { SubMenu } = Menu;
 const { Header, Content, Sider } = Layout;
 
 export function HomePage() {
   return (
     <div>
        <Helmet
        defaultTitle={`NekoApp - Início`}
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        
     </div>
   );
 }
 