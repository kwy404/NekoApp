import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import * as s from './style';

export function Icon(props) {
return (
<div>
   <s.listItem>
      <div className="blobContainer">
         <div className="wrapper">
            <svg width="48" height="48" viewBox="0 0 48 48" className="svg-1X37T1" overflow="visible">
               <defs>
                  <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" id="b770ef38-425e-4fb3-9f9b-4a2a4d55ef29-blob_mask"></path>
                  <rect id="b770ef38-425e-4fb3-9f9b-4a2a4d55ef29-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
                  <rect id="b770ef38-425e-4fb3-9f9b-4a2a4d55ef29-lower_badge_masks" x="28" y="28" width="24" height="24" rx="12" ry="12" transform="translate(20 20)"></rect>
               </defs>
               <mask id="b770ef38-425e-4fb3-9f9b-4a2a4d55ef29" fill="black" x="0" y="0" width="48" height="48">
                  <use href="#b770ef38-425e-4fb3-9f9b-4a2a4d55ef29-blob_mask" fill="white"></use>
                  <use href="#b770ef38-425e-4fb3-9f9b-4a2a4d55ef29-upper_badge_masks" fill="black"></use>
                  <use href="#b770ef38-425e-4fb3-9f9b-4a2a4d55ef29-lower_badge_masks" fill="black"></use>
               </mask>
               <mask id="b770ef38-425e-4fb3-9f9b-4a2a4d55ef29-stroke_mask">
                  <rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
                  <use href="#b770ef38-425e-4fb3-9f9b-4a2a4d55ef29-upper_badge_masks" fill="black"></use>
                  <use href="#b770ef38-425e-4fb3-9f9b-4a2a4d55ef29-lower_badge_masks" fill="black"></use>
               </mask>
               <foreignObject mask="url(#b770ef38-425e-4fb3-9f9b-4a2a4d55ef29)" x="0" y="0" width="48" height="48">
               <Link to={{
                  pathname: `/channel/${props.idServer}/${props.idChannel}`,
                  state: { fromLandingPage: true }
                }}>
                  <div className="wrapper-1BJsBx" role="treeitem" data-list-item-id="guildsnav___789888698673922078" tabIndex="-1"
                    aria-label=" Ballerini">
                     { 
                     props.image &&
                     <img className="icon-27yU2q" src={props.image} alt="" width="48" height="48" aria-hidden="true"/>
                     }
                     { 
                     !props.image &&
                     <h1>
                        S
                     </h1>
                     }
                  </div>
                </Link>
               </foreignObject>
            </svg>
         </div>
      </div>
   </s.listItem>
</div>
)
}