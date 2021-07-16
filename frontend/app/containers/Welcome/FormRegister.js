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

export function FormRegister(props) {
  return (
    <div>
      <MainRegister className="CenteringWrapper">
        <h3 className="title marginBottom8 centerText">Criar uma conta</h3>
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
        <button className="marginBottom8 btnBlue block-e">Entrar</button>
        <span>
          <div className="link" onClick={() => props.voidFunc()}>Já tem uma conta?</div>
        </span>
      </MainRegister>
    </div>
  );
}
