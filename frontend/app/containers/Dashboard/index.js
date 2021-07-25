/**
 *
 * Dashboard
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import * as s from './style';
import { Icon } from "./icon";
import { LeftBar } from "./leftBar";

import GlobalStyle from '../../global-styles';
import { socket } from '../../socket';
import { sendSocket, online } from "../App/socketFunc"
 
import { ChannelsMe } from "./channelMe";
import { ChannelServer } from "./channelServer";

//  import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, ReconciliationTwoTone } from '@ant-design/icons';
 
//  const { SubMenu } = Menu;
//  const { Header, Content, Sider } = Layout;
 
const token = window.localStorage.getItem("token") ? window.localStorage.getItem("token") : null

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
      {
        route: `@me`,
        component: ChannelsMe
      },
      {
        route: `channel`,
        component: ChannelServer
      }
      ],
      amigosSugeridos: [],
      notifications: this.props.user.notifications || [],
      friends: [],
      component: ChannelsMe
    }
  }
  foundRoute = route => {
    const found = this.state.routes.find(e => e.route === route)
    if(found){
      this.setState({component: found.component})
    } else{
      this.setState({component: this.state.routes[0].component})
    }
  }
  componentDidMount(){
    this.foundRoute(this.props.route)
    online()
    const react = this
    socket.wg.on('friends', data => {
      react.setState({friends: data})
    })
    socket.wg.on('friendsSuge', data => {
      react.setState({ amigosSugeridos: data })
    })
    socket.wg.on('newFriend', data => {
      if(!react.state.friends.find(e => e.username == data.friend.friend.username)){
        const old = [...react.state.friends, data.friend.friend]
        react.setState({friends, old})
      }
    })
    socket.wg.on('notification', data => {
      const old = [...react.state.notifications, data.notificationFriend]
      if(!react.state.notifications.find(e => e.info == data.notificationFriend.info)){
        react.setState({notifications: old})
      }
    })
  }
  addFriend(friendId){
    socket.wg.emit('message', {
        c: "freq",
        d: {
            token: token ? token : null,
            friendId
        }
    });
  }
  render(){
   return (
     <div>
        <Helmet
        defaultTitle={`NekoApp`}
        >
        </Helmet>
        <div>
          <s.appMount>
            <s.app>
              <s.bg/>
              <s.layers>
                <s.baseLayer className="layer">
                  <s.container>
                    <LeftBar></LeftBar>
                    <this.state.component
                    user={
                      this.props.user
                    }
                    ></this.state.component>
                  </s.container>
                </s.baseLayer>
              </s.layers>
            </s.app>
          </s.appMount>
        </div>
     </div>
   );
  }
 }
 