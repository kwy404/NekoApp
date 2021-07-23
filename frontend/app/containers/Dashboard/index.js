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

 import GlobalStyle from '../../global-styles';
 import { socket } from '../../socket';
 import { sendSocket, online } from "../App/socketFunc"
 import { LeftPanel } from './style';
 
//  import { Layout, Menu, Breadcrumb } from 'antd';
 import { UserOutlined, LaptopOutlined, NotificationOutlined, ReconciliationTwoTone } from '@ant-design/icons';
 
//  const { SubMenu } = Menu;
//  const { Header, Content, Sider } = Layout;
 
const token = window.localStorage.getItem("token") ? window.localStorage.getItem("token") : null
export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amigosSugeridos: [],
      notifications: this.props.user.notifications || []
    }
  }
  componentDidMount(){
    online()
    const react = this
    socket.on('message', msg => {
      //console.log(msg)
    })
    socket.on('friendsSuge', data => {
      react.setState({ amigosSugeridos: data })
    })
    socket.on('notification', data => {
      const old = [...react.state.notifications, data.notificationFriend]
      if(!react.state.notifications.find(e => e.info == data.notificationFriend.info) && data.type === undefined){
        react.setState({notifications: old})
      }
      if(data.type !== undefined){
        const old = [...react.state.notifications]
        const found = old.find(e => e.info == data.notificationFriend.info)
        const index = old.indexOf(found)
        old.splice(index, 1)
        react.setState({notifications: old})
      }
    })
  }
  addFriend(friendId){
    socket.emit('message', {
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
        defaultTitle={`NekoApp - Dashboard`}
        >
        </Helmet>
        <div>
          <ul>
          { this.state.amigosSugeridos.map((user, i) =>
                <li
                key={user._id}
                >{user.username}
                <button
                onClick={() => this.addFriend(user._id)}
                >Add</button>
                </li>
          )}
          </ul>
          <ul>
          { this.state.notifications.map((notification, i) =>
                <li
                key={notification.info}
                >
                {notification.message}
                <button>Aceitar</button>
                <button>Remover</button>
                </li>
          )}
          </ul>
        </div>
     </div>
   );
  }
 }
 