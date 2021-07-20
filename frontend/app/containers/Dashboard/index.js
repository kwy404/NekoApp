/**
 *
 * Dashboard
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

 import React, { useState } from 'react';
 import { Helmet } from 'react-helmet';
 import styled from 'styled-components';
 
 import GlobalStyle from '../../global-styles';
 import { socket } from '../../socket';
 import { LeftPanel } from './style';
 
//  import { Layout, Menu, Breadcrumb } from 'antd';
 import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
 
//  const { SubMenu } = Menu;
//  const { Header, Content, Sider } = Layout;
 
 export function Dashboard(props) {
   const [user, setUser] = useState(props.user);

   return (
     <div>
        <Helmet
        defaultTitle={`NekoApp - Dashboard`}
        >
        </Helmet>
        <div>
          
        </div>
     </div>
   );
 }
 