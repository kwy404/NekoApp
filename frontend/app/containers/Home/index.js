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
 
 import { Dashboard } from '../Dashboard';
 import { Welcome } from '../Welcome';
 import axios from 'axios'

 const config = require('../../socket/config');

 export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
    }
  }
  componentDidMount(){
    // this.validarToken()
  }
  render(){
   return (
     <div>
        <Helmet
        defaultTitle={`NekoApp - Início`}
        >
        </Helmet>
        <div>
        { this.props.logged ? <Dashboard
        route={this.props.route}
        logout={this.props.logout}
        user={this.props.user}/>
        : <Welcome estouLogado={() => this.props.estouLogado}/>
        }
        </div>
     </div>
   );
  }
 }
 