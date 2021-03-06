import {
  AuthBox,
  CenteringWrapper,
  MainLogin,
  Svg,
  Wrapper,
  MainRegister,
} from "./style";

import axios from 'axios'

const config = require('../../socket/config');



import { Helmet } from 'react-helmet';
import React, { Component, useState } from "react";
import { socket } from '../../socket';

export function FormLogin(props) {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [errorE, setErrorE] = useState(false);
  const [errorP, setErrorP] = useState(false);
  const [messageError, setMessageError] = useState(``)
  const [interval, setIn] = useState(false);

  const focusEmail = () => {
    email.trim().length == 0 ? setErrorE(true) : setErrorE(false)
    document
    .querySelector(`#input-email`)
    .setAttribute(`class`, `input focusInput`)
    setMessageError(null)
  }
  const focusPassword = () => {
    password.trim().length == 0 ? setErrorP(true) : setErrorP(false)
    document
    .querySelector(`#input-senha`)
    .setAttribute(`class`, `input focusInput`)
    setMessageError(null)
  }
  const errorEmail = (e) => {
    email.trim().length == 0 ? setErrorE(true) : setErrorE(false)
    setEmail(e)
    setMessageError(null)
  }
  const errorPassword = (e) => {
    password.trim().length == 0 ? setErrorP(true) : setErrorP(false)
    setPassword(e)
    setMessageError(null)
  }
  const submitForm = async (e) => {
    e.preventDefault()
    let error = false
    if(email.trim().length == 0){
      error = true
      email.trim().length == 0 ? setErrorE(true) : setErrorE(false)
      if(password.trim().length == 0){
        password.trim().length == 0 ? setErrorP(true) : setErrorP(false)
        error = true
      }
    } else if(password.trim().length == 0){
      password.trim().length == 0 ? setErrorP(true) : setErrorP(false)
      error = true
    }
    if(!error){
      //Axios post
      const user = await axios.post(`${config.configSite.api}/api/v1/login?email=${email}&password=${password}`)
      if(user.data.username){
        window.localStorage.setItem(`token`, user.data.token )
        props.estouLogado()()(user.data)
      } else{
        if(user.data.message){
          if(user.data.message){
            setErrorE(true)
            setErrorP(true)
            setMessageError(user.data.message)
          }
      }
    }
    }
    
  }
  return (
    <div>
      <Helmet
        defaultTitle={`NekoApp - Login`}
      >
      </Helmet>
      <AuthBox
      onSubmit={(e) => submitForm(e)}>
        <MainLogin >
          <h3 className="title marginBottom8">Boas-vindas de volta!</h3>
          <div className="colorHeaderSecondary">
            Estamos muito animados em te ver novamente!
          </div>
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
                {messageError || `Este campo ?? obrigat??rio`}
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
          <div className={`block-e marginTop20 ${(
            errorP ? 'errorE' : '')}
            `}>
            <h5 className={`colorStandard defaultMarginh3 ${(
            errorP ? `error` : ``)}`}>
              Senha
            { errorP &&
            <span style={{
              margin: `0px`
            }}>
              <span className="errorSeparator">-</span>
              <span className="errorMessage error">
                  {messageError || `Este campo ?? obrigat??rio`}
              </span>
            </span>
            }
            </h5>
            <div id="input-senha" className="input">
              <div className="inputWrapper">
                <input
                  onFocus={() =>
                    focusPassword()
                  }
                  onBlur={() =>
                    document
                      .querySelector(`#input-senha`)
                      .setAttribute(`class`, `input`)
                  }
                  type={`password`}
                  value={password}
                  onChange={event => {
                    errorPassword(event.target.value)
                  }}
                  className="inputDefault input-c"
                />
              </div>
            </div>
          </div>
          <div 
          onClick={() => props.forgotFunc()}
          className="link">Esqueceu sua senha?</div>
          <button className="marginBottom8 btnBlue block-e">Entrar</button>
          <span>
            Precisando de uma conta?
            <div className="link" onClick={() => props.voidFunc()}>Registre-se</div>
          </span>
        </MainLogin>
      </AuthBox>
    </div>
  );
}
