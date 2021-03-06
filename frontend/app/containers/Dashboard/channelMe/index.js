/**
 *
 * `@me`
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
 
import { Helmet } from 'react-helmet';

import GlobalStyle from '../../../global-styles';

import styled from 'styled-components';

import * as s from './style';

import { Channel } from "./channel";

export function ChannelsMe(props){
    return(
    <div>
        <s.base>
            <s.scroller>
                <s.content>
                    <s.sidebar>
                        <s.privateChannels>
                            <div className="searchBar">
                                <button className="searchBarComponent">
                                    <span>
                                        Encontre ou comece uma conversa
                                    </span>
                                </button>
                            </div>
                            <Channel
                            ativo={
                                location.pathname.split("/")[1] === "channels" 
                                && location.pathname.split("/")[2] == "@me"
                                && location.pathname.split("/")[3] === undefined
                            }
                            title={`Amigos`}
                            >
                            </Channel>
                            <s.privateChannelsHeader>
                                <span className="headerText">
                                    Mensagens diretas
                                </span>
                                <div className="privateChannelRecipientsInviteButtonIcon">
                                    <svg x="0" y="0" className="privateChannelRecipientsInviteButtonIcon" aria-hidden="false" width="24" height="24" viewBox="0 0 18 18">
                                        <polygon fillRule="nonzero" fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon>
                                    </svg>
                                </div>
                            </s.privateChannelsHeader>
                            <Channel
                            status={`online`}
                            _id="0"
                            type={`md`}
                            title={`usuario`}
                            >
                            </Channel>
                        </s.privateChannels>
                        <s.panels>
                            <div className="wrapper"/>
                            <div className="container">
                                <div className="avatarWrapper">
                                    <div className="avatar">
                                    <svg width="40" height="32" viewBox="0 0 40 32" className="mask-1l8v16 svg-2V3M55" aria-hidden="true">
                                        <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                                            <div className="avatarStack"><img src="https://cdn.discordapp.com/avatars/552573579565334548/9a3aae336aa7b13b9ae793a56af617a2.png?size=128" alt=" " className="avatar-VxgULZ" aria-hidden="true"/></div>
                                        </foreignObject>
                                        <rect className="status ocupado" width="10" height="10" x="22" y="22" mask="url(#svg-mask-status-dnd)"></rect>
                                        </svg>
                                    </div>
                                </div>
                                <div className="nameTag">
                                    <div className="colorStandard">
                                        <div className="size14 usernameContainer">
                                            {props.user.username}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <button>
                                    <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z" fill="#95989b"></path>
                                    <path d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z" fill="#95989b"></path>
                                    <path d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z" fill="#95989b"></path>
                                    <path d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z" className="strikethrough-1n4ekb" fill="#ed4245"></path>
                                    </svg>
                                    </button>
                                    <button>
                                    <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z" fill="#95989b"></path></svg></svg>
                                    </button>
                                    <button><svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24"><path fill="#95989b" fillRule="evenodd" clipRule="evenodd" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path></svg></button>
                                </div>
                            </div>
                        </s.panels>
                    </s.sidebar>
                </s.content>
            </s.scroller>
            
        </s.base>
    </div>
    )
}