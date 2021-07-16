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

export function FormLogin(props) {
  return (
    <div>
      <MainLogin>
        <h3 className="title marginBottom8">Boas-vindas de volta!</h3>
        <div className="colorHeaderSecondary">
          Estamos muito animados em te ver novamente!
        </div>
        <div className="block-e marginTop20">
          <h5 className="colorStandard defaultMarginh3">E-mail</h5>
          <div id="input-email" className="input">
            <div className="inputWrapper">
              <input
                onFocus={() =>
                  document
                    .querySelector(`#input-email`)
                    .setAttribute(`class`, `input focusInput`)
                }
                onBlur={() =>
                  document
                    .querySelector(`#input-email`)
                    .setAttribute(`class`, `input`)
                }
                className="inputDefault input-c"
              />
            </div>
          </div>
        </div>
        <div className="block-e marginTop20">
          <h5 className="colorStandard defaultMarginh3">Senha</h5>
          <div id="input-senha" className="input">
            <div className="inputWrapper">
              <input
                onFocus={() =>
                  document
                    .querySelector(`#input-senha`)
                    .setAttribute(`class`, `input focusInput`)
                }
                onBlur={() =>
                  document
                    .querySelector(`#input-senha`)
                    .setAttribute(`class`, `input`)
                }
                className="inputDefault input-c"
              />
            </div>
          </div>
        </div>
        <div className="link">Esqueceu sua senha?</div>
        <button className="marginBottom8 btnBlue block-e">Entrar</button>
        <span>
          Precisando de uma conta?
          <div className="link" onClick={() => props.voidFunc()}>Registre-se</div>
        </span>
      </MainLogin>
    </div>
  );
}
