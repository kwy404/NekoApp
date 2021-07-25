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
 
export function Channel(props){
     return(
     <div>
         <GlobalStyle />
         <s.channel>
             <div className="layout">
                <div className="avatar">
                { props.type === undefined &&
                <svg className="linkButtonIcon" aria-hidden="false" width="16" height="16" viewBox="0 0 24 24">
                <g fill="none" fillRule="evenodd">
                    <path fill="currentColor" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path>
                    <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
                </g>
                </svg>
                }
                { 
                props.type &&
                <div>
                    <svg width="40" height="32" viewBox="0 0 40 32" className="mask-1l8v16 svg-2V3M55" aria-hidden="true">
                    <mask id="62baef89-14fb-42bd-a02f-bd1368ab5660" width="32" height="32">
                        <circle cx="16" cy="16" r="16" fill="white"></circle>
                        <rect color="black" x="19" y="19" width="16" height="16" rx="8" ry="8"></rect>
                    </mask>
                    <foreignObject x="0" y="0" width="32" height="32" mask="url(#62baef89-14fb-42bd-a02f-bd1368ab5660)">
                        <div className="avatarStack"><img src="https://cdn.discordapp.com/avatars/544226820925685770/ce9b4f5d7d8dfeb8a368aca3c48d4711.png?size=128" alt=" " className="avatar" aria-hidden="true"/></div>
                    </foreignObject>
                    {
                        props.status !== undefined && props.status === "ausente" &&
                        <svg x="14.5" y="17" width="25" height="15" viewBox="0 0 25 15" className="cursorDefault">
                        <mask id="d80e7b34-eaa9-46c9-b868-4791835edda5">
                            <rect x="7.5" y="5" width="10" height="10" rx="5" ry="5" fill="white"></rect>
                            <rect x="6.25" y="3.75" width="7.5" height="7.5" rx="3.75" ry="3.75" fill="black"></rect>
                            <polygon points="-2.16506,-2.5 2.16506,0 -2.16506,2.5" fill="black" transform="scale(0) translate(13.125 10)" 
                            ></polygon>
                            <circle fill="black" cx="12.5" cy="10" r="0"></circle>
                        </mask>
                        <rect fill="hsl(38, calc(var(--saturation-factor, 1) * 95.7%), 54.1%)" width="25" height="15" mask="url(#d80e7b34-eaa9-46c9-b868-4791835edda5)"></rect>
                        </svg>
                    }
                    {
                    props.status !== undefined && props.status === "online" &&
                        <svg width="40" height="32" viewBox="0 0 40 32" className="mask-1l8v16 svg-2V3M55" aria-hidden="true">
                        <mask id="9b911ee6-d35a-40f9-b322-88b5c427f846" width="32" height="32">
                            <circle cx="16" cy="16" r="16" fill="white"></circle>
                            <rect color="black" x="19" y="19" width="16" height="16" rx="8" ry="8"></rect>
                        </mask>
                        <foreignObject x="0" y="0" width="32" height="32" mask="url(#9b911ee6-d35a-40f9-b322-88b5c427f846)">
                            <div className="avatarStack-2Dr8S9"><img src="https://cdn.discordapp.com/avatars/776083372787236864/5ab92e3b5e16a9be602206ef99a0b2f7.png?size=128" alt=" " className="avatar-VxgULZ" aria-hidden="true"/></div>
                        </foreignObject>
                        <svg x="14.5" y="17" width="25" height="15" viewBox="0 0 25 15" className="cursorDefault">
                            <mask id="56d23edf-ff0d-4964-bda6-c98cd343e42b">
                                <rect x="7.5" y="5" width="10" height="10" rx="5" ry="5" fill="white"></rect>
                                <rect x="12.5" y="10" width="0" height="0" rx="0" ry="0" fill="black"></rect>
                                <polygon points="-2.16506,-2.5 2.16506,0 -2.16506,2.5" fill="black" transform="scale(0) translate(13.125 10)"></polygon>
                                <circle fill="black" cx="12.5" cy="10" r="0"></circle>
                            </mask>
                            <rect fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" width="25" height="15" mask="url(#56d23edf-ff0d-4964-bda6-c98cd343e42b)"></rect>
                        </svg>
                        <rect x="22" y="22" width="10" height="10" fill="transparent" aria-hidden="true" className="pointerEvents-2zdfdO"></rect>
                        </svg>
                    }
                    <rect x="22" y="22" width="10" height="10" fill="transparent" aria-hidden="true" className="pointerEvents"></rect>
                    </svg>
                </div>
                }
                { 
                props.status !== undefined && props.status === `ocupado` &&
                <svg x="14.5" y="17" width="25" height="15" viewBox="0 0 25 15" className="cursorDefault">
                <mask id="7784e200-1853-4493-8ec0-feb4f195b7e2">
                    <rect x="7.5" y="5" width="10" height="10" rx="5" ry="5" fill="white"></rect>
                    <rect x="8.75" y="8.75" width="7.5" height="2.5" rx="1.25" ry="1.25" fill="black"></rect>
                    <polygon points="-2.16506,-2.5 2.16506,0 -2.16506,2.5" fill="black" transform="scale(0) translate(13.125 10)"></polygon>
                    <circle fill="black" cx="12.5" cy="10" r="0"></circle>
                </mask>
                <rect fill="hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)" width="25" height="15" mask="url(#7784e200-1853-4493-8ec0-feb4f195b7e2)"></rect>
                </svg>
                }
                </div>
                <div className="content">
                    <div className="nameAndDecorators">
                        <div className="name">
                            { props.title }
                        </div>
                    </div>
                </div>
             </div>
         </s.channel>
     </div>
     )
 }