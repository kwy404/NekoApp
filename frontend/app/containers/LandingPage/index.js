/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

 import React, { Component, useState } from 'react';
 import { Helmet } from 'react-helmet';
 import styled from 'styled-components';

 import { Link } from 'react-router-dom';

 import GlobalStyle from '../../global-styles';

 export function LandingPage() {
   return (
     <div>
        <Helmet
        defaultTitle={`NekoApp - DISCORD | Seu Lugar para Papear e Ficar De Boa`}
        >
        </Helmet>
        <div>
            <h1>Landing page</h1>
            <Link to={{
          pathname: "/app",
          hash: "#login",
          state: { fromLandingPage: true }
        }}>Go to Login page</Link>
        </div>
     </div>
   );
 }
 