import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    min-height: 580px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    transform: translate(-50%, 35%);
    input{
      outline: none;
    }
  `

  export const AuthBox = styled.form`
    transition: 0.4s ease;
    @media screen and (max-height: 817px){
      top: -4em;
    }
    @media screen and (max-height: 700px){
      top: -6em;
    }
    @media screen and (max-height: 649px){
      top: -8em;
    }
    @media screen and (max-height: 600px){
      top: -10em;
    }
    @media screen and (max-height: 567px){
      top: -12em;
    }
    @media screen and (max-width: 597px){
      width: 100vw;
      height: 100vh;
      top: -12vh;
    }
    position: relative;
    user-select: none;
    overflow: hidden;
    background: #36393f;
    z-index: 50;
    color: #72767d;
    width: 538px;
    padding: 32px;
    font-size: 18px;
    -webkit-box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
    border-radius: 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #72767d;
    h3{
      color: white;
      font-weight: 600;
    }
    .marginBottom8{
      margin-bottom: 8px;
    }
    .colorHeaderSecondary{
      font-size: 16px;
      line-height: 20px;
      color: #b9bbbe;
    }
    .block-e{
      width: 100%;
      text-align: left;
    }
    .marginTop20{
      margin-top: 20px;
    }
    .marginBottom20{
      margin-bottom: 20px;
    }
    .colorStandard{
      color: #8e9297;
      user-select: none;
      display: flex;
    }
    .defaultMarginh3{
      margin-bottom: 8px;
    }
    .input{
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      font-size: 16px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      border-radius: 3px;
      color: #dcddde;
      background-color: #0000001a;
      border: 1px solid #0000004d;
      -webkit-transition: border-color .2s ease-in-out;
      transition: border-color .2s ease-in-out;
    }
    .inputWrapper{
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
    .inputWrapper input{
      border: none;
      background-color: transparent;
      padding: 10px;
      height: 40px;
    }
    .input-c{
      font-size: 16px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      border-radius: 3px;
      color: #dcddde;
      background-color: #0000001a;
      border: 1px solid #0000004d;
      -webkit-transition: border-color .2s ease-in-out;
      transition: border-color .2s ease-in-out;
    }
    .link{
      color: #04a6e6;
      font-size: 15px;
      margin: 20px 0px 8px;
      cursor: pointer;
    }
    .errorMessage{
      font-size: 12px;
      font-weight: 500;
      font-style: italic;
      text-transform: none;
      display: flex;
      margin-top: 4px;
    }
    .error{
      color: #e24145 !important;
    }
    .errorE #input-email{
      border-color: #e24145 !important;
    }
    .errorE #input-senha{
      border-color: #e24145 !important;
    }
    .errorSeparator{
      padding-left: 4px;
      padding-right: 4px;
      color: #e24145 !important;
      margin-top: 3px;
    }
    .link:hover{
      text-decoration: underline;
    }
    span{
      font-size: 13px;
      line-height: 16px;
      display: flex;
      margin-top: 10px;
    }
    span .link{
        margin: 0px;
        display: flex;
        font-size: 13px;
        margin-left: 5px;
    }
    .btnBlue{
      background-color: #5865f2;
      color: white;
      font-size: 16px;
      width: 100%;
      -webkit-transition: background-color .17s ease,color .17s ease;
      transition: background-color .17s ease,color .17s ease
      border: none;
      outline: none;
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border: none;
      border-radius: 3px;
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
      padding: 15px 16px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      margin-top: 20px;
      cursor: pointer;
    }
    .btnBlue:hover{
      background-color: #4752c4;
    }
    animation: toY 0.4s;
    @keyframes toY{
      0%{
        margin-top: -120px;
      }
      100%{
        margin-top: 0px;
      }
    }
  `

  export const CenteringWrapper = styled.div`
    width: 100%;
    text-align: center;
  `

  export const MainLogin = styled.div`
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: start;
      .focusInput{
        border-color: #04a6e6;
      }
  `

  export const MainRegister = styled.div`
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: start;
      .focusInput{
        border-color: #04a6e6;
      }
      .centerText{
        text-align: center;
        position: relative;
        font-weight: 600;
        width: 100%;
        font-size: 24px;
        line-height: 30px;
      }
      height: 330px;
  `

  export const Svg = styled.svg`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 597px){
      display: none;
    }
  `

  export const FormForgotPassword = styled.div`
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
      left: 0px;
      position: absolute;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: start;
      .focusInput{
        border-color: #04a6e6;
      }
      .centerText{
        text-align: center;
        position: relative;
        font-weight: 600;
        width: 100%;
        font-size: 24px;
        line-height: 30px;
      }
      height: 310px;
      border-radius: 5px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      z-index: 4;
  `