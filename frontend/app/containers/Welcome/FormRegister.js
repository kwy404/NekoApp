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

export function FormRegister(props) {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [errorE, setErrorE] = useState(false);
  const [errorP, setErrorP] = useState(false);
  const focusEmail = () => {
    email.trim().length == 0 ? setErrorE(true) : setErrorE(false)
    document
    .querySelector(`#input-email`)
    .setAttribute(`class`, `input focusInput`)
  }
  const focusPassword = () => {
    password.trim().length == 0 ? setErrorP(true) : setErrorP(false)
    document
    .querySelector(`#input-senha`)
    .setAttribute(`class`, `input focusInput`)
  }
  const errorEmail = (e) => {
    email.trim().length == 0 ? setErrorE(true) : setErrorE(false)
    setEmail(e)
  }
  const errorPassword = (e) => {
    password.trim().length == 0 ? setErrorP(true) : setErrorP(false)
    setPassword(e)
  }
  const submitForm = (e) => {
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
    if(error){
      return
    }
    e.preventDefault()
  }
  return (
    <div>
      <Helmet
        defaultTitle={`NekoApp - Criando uma conta`}
        >
      </Helmet>
      <AuthBox
      onSubmit={(e) => submitForm()}>
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
                  Este campo é obrigatório
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
          <button className="marginBottom8 btnBlue block-e">Registrar</button>
          <span>
            <div className="link" onClick={() => props.voidFunc()}>Já tenho uma conta.</div>
          </span>
        </MainRegister>
      </AuthBox>
    </div>
  );
}
