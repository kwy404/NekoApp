import {
  AuthBox,
  CenteringWrapper,
  MainLogin,
  Svg,
  Wrapper,
  MainRegister,
} from "./style";
import React, { Component, useState } from "react";
import { userLogin } from "../App/socketFunc";

import { Helmet } from 'react-helmet';

import axios from 'axios'

const config = require('../../socket/config');

export function FormRegister(props) {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [username, setUsername] = useState(``);
  const [errorE, setErrorE] = useState(false);
  const [errorP, setErrorP] = useState(false);
  const [errorU, setErrorU] = useState(false);
  const [messageError, setMessageError] = useState(``);
  const focusUsername = () => {
    username.trim().length == 0 ? setErrorU(true) : setErrorU(false)
    document
    .querySelector(`#input-user`)
    .addClass(`focusInput`)
  }
  const focusEmail = () => {
    email.trim().length == 0 ? setErrorE(true) : setErrorE(false)
    document
    .querySelector(`#input-email`)
    .addClass(`focusInput`)
  }
  const focusPassword = () => {
    password.trim().length == 0 ? setErrorP(true) : setErrorP(false)
    document
    .querySelector(`#input-senha`)
    .addClass(`focusInput`)
  }
  const errorEmail = (e) => {
    email.trim().length == 0 ? setErrorE(true) : setErrorE(false)
    setMessageError(null)
    setEmail(e)
  }
  const errorPassword = (e) => {
    password.trim().length == 0 ? setErrorP(true) : setErrorP(false)
    setMessageError(null)
    setPassword(e)
  }
  const errorUsername = (e) => {
    username.trim().length == 0 ? setErrorU(true) : setErrorU(false)
    setMessageError(null)
    setUsername(e)
  }
  const submitForm = async (e) => {
    e.preventDefault()
    let error = false
    if(email.trim().length == 0){
      error = true
      email.trim().length == 0 ? setErrorE(true) : setErrorE(false)
      setMessageError(null)
      if(password.trim().length == 0){
        password.trim().length == 0 ? setErrorP(true) : setErrorP(false)
        error = true
        setMessageError(null)
      }
      if(username.trim().length == 0){
        password.trim().length == 0 ? setErrorU(true) : setErrorU(false)
        error = true
        setMessageError(null)
      }
    } else if(password.trim().length == 0){
      if(username.trim().length == 0){
        password.trim().length == 0 ? setErrorU(true) : setErrorU(false)
        error = true
        setMessageError(null)
      }
      password.trim().length == 0 ? setErrorP(true) : setErrorP(false)
      error = true
      setMessageError(null)
    }
    if(!error){
      //Axios post
      const user = await axios.post(`${config.configSite.api}/api/v1/register?email=${email}&password=${password}&username=${username}`)
      if(user.data.username){
        window.localStorage.setItem(`token`, user.data.token )
        console.log(user.data)
        props.estouLogado()()(user.data)
      } else{
        if(user.data.message){
          if(user.data.message.includes(`E-mail`)){
            setErrorE(true)
            setErrorU(true)
            setErrorP(true)
            setMessageError(user.data.message)
          } else if(user.data.message.includes(`usuário`)){
            setErrorE(true)
            setErrorU(true)
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
        defaultTitle={`NekoApp - Criando uma conta`}
        >
      </Helmet>
      <AuthBox
      style={{
        height: `480px`
      }}
      onSubmit={(e) => submitForm(e)}>
        <MainRegister>
          <h3 className="title marginBottom8 centerText">Criar uma conta!</h3>
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
                    { messageError || `Este campo é obrigatório` }
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
                    .removeClass(`focusInput`)
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
              { messageError || `Este campo é obrigatório` }
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
                    .removeClass(`focusInput`)
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
            <div className={`block-e marginTop20 ${(
            errorU ? 'errorE' : '')}
            `}>
            <h5 className={`colorStandard defaultMarginh3 ${(
            errorU ? `error` : ``)}`}>
              Usuário
            { errorU && 
            <span style={{
              margin: `0px`
            }}>
              <span className="errorSeparator">-</span>
              <span className="errorMessage error">
                  {messageError || `Este campo é obrigatório`}
              </span>
            </span>
            }
            </h5>
            <div id="input-user" className="input">
              <div className="inputWrapper">
                <input
                  onFocus={() =>
                    focusUsername()
                  }
                  onBlur={() =>
                    document
                    .querySelector(`#input-user`)
                    .removeClass(`focusInput`)
                  }
                  type={`text`}
                  value={username}
                  onChange={event => {
                    errorUsername(event.target.value)
                  }}
                  className="inputDefault input-c"
                />
              </div>
            </div>
          </div>
          <button className="marginBottom8 btnBlue block-e">Registrar</button>
          <span>
            <div className="link" onClick={() => props.voidFunc()}>Já tenho uma conta.</div>
          </span>
        </MainRegister>
      </AuthBox>
    </div>
  );
}
