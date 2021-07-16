import {
  AuthBox,
  CenteringWrapper,
  MainLogin,
  Svg,
  Wrapper,
  FormForgotPassword,
} from "./style";
import React, { Component, useState } from "react";
import { userLogin } from "../App/socketFunc";

export function FormForgot(props) {
  return (
    <div>
      <FormForgotPassword className="CenteringWrapper">
        <h3 className="title marginBottom8 centerText">Esqueceu a senha?</h3>
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
        <button className="marginBottom8 btnBlue block-e">Entrar</button>
        <span>
          <div className="link" onClick={() => props.voidFunc()}>Lembrei a senha!</div>
        </span>
      </FormForgotPassword>
    </div>
  );
}
