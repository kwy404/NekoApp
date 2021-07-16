import {
  AuthBox,
  CenteringWrapper,
  MainLogin,
  Svg,
  Wrapper,
  MainRegister,
  FormForgotPassword
} from "./style";
import React, { Component, useState } from "react";
import { userLogin } from "../App/socketFunc";

import { Helmet } from 'react-helmet';

export function FormForgot(props) {
  const [email, setEmail] = useState(``);
  const [errorE, setErrorE] = useState(false);
  const focusEmail = () => {
    email.trim().length == 0 ? setErrorE(true) : setErrorE(false)
    document
    .querySelector(`#input-email`)
    .setAttribute(`class`, `input focusInput`)
  }
  const errorEmail = (e) => {
    email.trim().length == 0 ? setErrorE(true) : setErrorE(false)
    setEmail(e)
  }
  const submitForm = (e) => {
    if(email.trim().length == 0){
      email.trim().length == 0 ? setErrorE(true) : setErrorE(false)
    }
    e.preventDefault()
  }
  return (
    <div>
      <Helmet
        defaultTitle={`NekoApp - Esqueci a senha`}
        >
      </Helmet>
      <AuthBox
      onSubmit={(e) => submitForm(e)}>
        <FormForgotPassword
        style={{ 
          marginTop: `-8em`
        }}
        >
          <h3 className="title marginBottom8">Esqueceu a senha?</h3>
          <div className={`block-e marginTop20 ${(
            errorE ? 'errorE' : '')}
            `}>
            <h5 className={`colorStandard defaultMarginh3 ${(
            errorE ? `error` : ``)}`}>
              E-mail 
              { errorE &&
              <span style={{
                margin: `0px`
              }}>
                <span className="errorSeparator">-</span>
                <span className="errorMessage error">
                    Este campo é obrigatório
                </span>
              </span>
              }
              </h5>
            <div id="input-email" className="input">
              <div className="inputWrapper">
                <input
                  onFocus={() =>
                    focusEmail()
                  }
                  onBlur={() =>
                    document
                      .querySelector(`#input-email`)
                      .setAttribute(`class`, `input`)
                  }
                  value={email}
                  onChange={event => {
                    errorEmail(event.target.value)
                  }}
                  className="inputDefault input-c"
                />
              </div>
            </div>
          </div>
          <div 
          onClick={() => props.voidFunc()}
          className="link">Lembrei a senha!</div>
          <button className="marginBottom8 btnBlue block-e">OK</button>
        </FormForgotPassword>
      </AuthBox>
    </div>
  );
}
