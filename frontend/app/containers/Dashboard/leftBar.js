import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import * as s from './style';
import { Icon } from "./icon";

export function LeftBar(props) {
return (
<div>
   <s.wrapper>
      <s.tree>
         <s.unreadMentionsIndicatorTop>
            <s.bar 
            style={{
            transform: `translateY(-180%)`
            }}
            >
            <span>
            0
            </span>
            </s.bar>
         </s.unreadMentionsIndicatorTop>
         <s.scroller>
            <Link to={{
                  pathname: `/channels/@me`
            }}>
            <s.tutorialContainer>
               <div className="listItem">
                  <div className="pill">
                     <span 
                     style={{
                     opacity: 1,
                     height: `40px`,
                     transform: `none`
                     }}
                     className="item">
                     </span>
                  </div>
                  <div className="listItemWrapper">
                     <div className="wrapper25">
                        <svg width="48" height="48" viewBox="0 0 48 48" className="svg-1" overflow="visible">
                           <defs>
                              <path d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z" id="f67e61ce-3b4b-405f-8d5e-d8619775b712-blob_mask"></path>
                           </defs>
                           <mask id="f67e61ce-3b4b-405f-8d5e-d8619775b712" fill="black" x="0" y="0" width="48" height="48">
                              <use href="#f67e61ce-3b4b-405f-8d5e-d8619775b712-blob_mask" fill="white"></use>
                           </mask>
                           <foreignObject mask="url(#f67e61ce-3b4b-405f-8d5e-d8619775b712)" x="0" y="0" width="48" height="48">
                              <div className="wrapper" role="listitem" data-list-item-id="guildsnav___home" tabIndex="-1" 
                                 aria-label="Início">
                                 <div className="childWrapper">
                                    <svg className="homeIcon" aria-hidden="false" width="28" height="20" viewBox="0 0 28 20">
                                       <path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"></path>
                                    </svg>
                                 </div>
                              </div>
                           </foreignObject>
                        </svg>
                     </div>
                  </div>
               </div>
            </s.tutorialContainer>
            </Link>
            <s.listItem>
               <div className="guildSeparator">
               </div>
            </s.listItem>
            <div aria-label="Servidores">
               <Icon
                  idServer="0"
                  idChannel="0"
                  image="https://cdn.discordapp.com/icons/789888698673922078/cc517e8296fb634628ba5a1492e6d8b4.png?size=128"
                  />
            </div>
         </s.scroller>
      </s.tree>
   </s.wrapper>
</div>
)
}