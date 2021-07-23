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
      notifications: this.props.user.notifications || [],
      friends: []
    }
  }
  componentDidMount(){
    online()
    const react = this
    socket.on('friends', data => {
      react.setState({friends: data})
    })
    socket.on('friendsSuge', data => {
      react.setState({ amigosSugeridos: data })
    })
    socket.on('newFriend', data => {
      if(!react.state.friends.find(e => e.username == data.friend.friend.username)){
        const old = [...react.state.friends, data.friend.friend]
        react.setState({friends, old})
      }
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
          { this.state.amigosSugeridos.filter(e => this.state.friends.find(b => b.username !== e.username)).length > 0 &&
            <ul>
            <h1>Amigos sugeridos</h1>
            { this.state.amigosSugeridos.filter(e => this.state.friends.find(b => b.username !== e.username),(item, i) =>
                  <li
                  key={user._id}
                  >{user.username}
                  <button
                  onClick={() => this.addFriend(user._id)}
                  >
                    Add
                  </button>
                  </li>
            )}
            </ul>
          }
          <h1>Amigos { this.state.friends.length} </h1>
          <ul>
          { this.state.friends.map((friend, i) =>
                <li
                >
                {friend.username}
                {
                !friend.isFriend && !friend.sendByMe &&
                <div>
                  <button>Aceitar</button>
                  <button>Recusar</button>
                </div>
                }
                {
                !friend.isFriend && friend.sendByMe &&
                <div>
                  <button>Cancelar</button>
                </div>
                }
                {
                friend.isFriend && !friend.sendByMe &&
                <button>Remover</button>
                }
                </li>
          )}
          </ul>
        </div>
     </div>
   );
  }
 }
 