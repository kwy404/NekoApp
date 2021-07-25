import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    --font-primary: Whitney,"Helvetica Neue",Helvetica,Arial,sans-serif;
    --font-display: Ginto,"Helvetica Neue",Helvetica,Arial,sans-serif;
    --font-code: Consolas,"Andale Mono WT","Andale Mono","Lucida Console","Lucida Sans Typewriter","DejaVu Sans Mono","Bitstream Vera Sans Mono","Liberation Mono","Nimbus Mono L",Monaco,"Courier New",Courier,monospace;
    --font-korean: Whitney,"Apple SD Gothic Neo","NanumBarunGothic","맑은 고딕","Malgun Gothic",Gulim,굴림,Dotum,돋움,"Helvetica Neue",Helvetica,Arial,sans-serif;
    --font-japanese: Whitney,Hiragino Sans,"ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN","メイリオ",Meiryo,Osaka,"MS PGothic","Helvetica Neue",Helvetica,Arial,sans-serif;
    --font-chinese-simplified: Whitney,"Microsoft YaHei New",微软雅黑,"Microsoft Yahei","Microsoft JhengHei",宋体,SimSun,"Helvetica Neue",Helvetica,Arial,sans-serif;
    --font-chinese-traditional: Whitney,"Microsoft JhengHei",微軟正黑體,"Microsoft JhengHei UI","Microsoft YaHei",微軟雅黑,宋体,SimSun,"Helvetica Neue",Helvetica,Arial,sans-serif;
    --header-primary: #fff;
    --header-secondary: #b9bbbe;
    --text-normal: #dcddde;
    --text-muted: #72767d;
    --text-link: hsl(197,calc(var(--saturation-factor, 1)*100%),47.8%);
    --text-link-low-saturation: hsl(197,calc(var(--saturation-factor, 1)*100%),52.9%);
    --text-positive: hsl(139,calc(var(--saturation-factor, 1)*66.8%),58.6%);
    --text-warning: hsl(38,calc(var(--saturation-factor, 1)*95.7%),54.1%);
    --text-danger: hsl(359,calc(var(--saturation-factor, 1)*82.6%),59.4%);
    --interactive-normal: #b9bbbe;
    --interactive-hover: #dcddde;
    --interactive-active: #fff;
    --interactive-muted: #4f545c;
    --background-primary: #36393f;
    --background-secondary: #2f3136;
    --background-secondary-alt: #292b2f;
    --background-tertiary: #202225;
    --background-accent: #4f545c;
    --background-floating: #18191c;
    --background-mobile-primary: #36393f;
    --background-mobile-secondary: #2f3136;
    --background-modifier-hover: rgba(79,84,92,0.16);
    --background-modifier-active: rgba(79,84,92,0.24);
    --background-modifier-selected: rgba(79,84,92,0.32);
    --background-modifier-accent: hsla(0,0%,100%,0.06);
    --info-positive-text: #fff;
    --info-warning-text: #fff;
    --info-danger-text: #fff;
    --info-help-background: hsla(197,calc(var(--saturation-factor, 1)*100%),47.8%,0.1);
    --info-help-foreground: hsl(197,calc(var(--saturation-factor, 1)*100%),47.8%);
    --info-help-text: #fff;
    --status-warning-text: #000;
    --scrollbar-thin-thumb: #202225;
    --scrollbar-thin-track: transparent;
    --scrollbar-auto-thumb: #202225;
    --scrollbar-auto-track: hsl(210,calc(var(--saturation-factor, 1)*9.8%),20%);
    --scrollbar-auto-scrollbar-color-thumb: #202225;
    --scrollbar-auto-scrollbar-color-track: #2f3136;
    --elevation-stroke: 0 0 0 1px rgba(4,4,5,0.15);
    --elevation-low: 0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05);
    --elevation-medium: 0 4px 4px rgba(0,0,0,0.16);
    --elevation-high: 0 8px 16px rgba(0,0,0,0.24);
    --logo-primary: #fff;
    --control-brand-foreground: hsl(235,calc(var(--saturation-factor, 1)*86.1%),77.5%);
    --control-brand-foreground-new: hsl(235,calc(var(--saturation-factor, 1)*86.1%),77.5%);
    --background-mentioned: hsla(38,calc(var(--saturation-factor, 1)*95.7%),54.1%,0.1);
    --background-mentioned-hover: hsla(38,calc(var(--saturation-factor, 1)*95.7%),54.1%,0.08);
    --background-message-hover: rgba(4,4,5,0.07);
    --channels-default: #8e9297;
    --guild-header-text-shadow: 0 1px 1px rgba(0,0,0,0.4);
    --channeltextarea-background: #40444b;
    --activity-card-background: #202225;
    --textbox-markdown-syntax: #8e9297;
    --deprecated-card-bg: rgba(32,34,37,0.6);
    --deprecated-card-editable-bg: rgba(32,34,37,0.3);
    --deprecated-store-bg: #36393f;
    --deprecated-quickswitcher-input-background: #72767d;
    --deprecated-quickswitcher-input-placeholder: hsla(0,0%,100%,0.3);
    --deprecated-text-input-bg: rgba(0,0,0,0.1);
    --deprecated-text-input-border: rgba(0,0,0,0.3);
    --deprecated-text-input-border-hover: #040405;
    --deprecated-text-input-border-disabled: #202225;
    --deprecated-text-input-prefix: #dcddde;
    --brand-experiment-100: hsl(240,calc(var(--saturation-factor, 1)*77.8%),98.2%);
    --brand-experiment-130: hsl(236,calc(var(--saturation-factor, 1)*87.5%),96.9%);
    --brand-experiment-160: hsl(235,calc(var(--saturation-factor, 1)*84.6%),94.9%);
    --brand-experiment-200: hsl(236,calc(var(--saturation-factor, 1)*83.3%),92.9%);
    --brand-experiment-230: hsl(236,calc(var(--saturation-factor, 1)*87%),91%);
    --brand-experiment-260: hsl(235,calc(var(--saturation-factor, 1)*86.2%),88.6%);
    --brand-experiment-300: hsl(235,calc(var(--saturation-factor, 1)*86.1%),85.9%);
    --brand-experiment-330: hsl(235,calc(var(--saturation-factor, 1)*85.1%),81.6%);
    --brand-experiment-360: hsl(235,calc(var(--saturation-factor, 1)*86.1%),77.5%);
    --brand-experiment-400: hsl(235,calc(var(--saturation-factor, 1)*86.1%),71.8%);
    --brand-experiment-430: hsl(235,calc(var(--saturation-factor, 1)*85.7%),69.8%);
    --brand-experiment-460: hsl(235,calc(var(--saturation-factor, 1)*85.5%),67.5%);
    --brand-experiment: hsl(235,calc(var(--saturation-factor, 1)*85.6%),64.7%);
    --brand-experiment-500: hsl(235,calc(var(--saturation-factor, 1)*85.6%),64.7%);
    --brand-experiment-530: hsl(235,calc(var(--saturation-factor, 1)*66.7%),58.8%);
    --brand-experiment-560: hsl(235,calc(var(--saturation-factor, 1)*51.4%),52.4%);
    --brand-experiment-600: hsl(235,calc(var(--saturation-factor, 1)*46.7%),44.1%);
    --brand-experiment-630: hsl(235,calc(var(--saturation-factor, 1)*46.7%),38.2%);
    --brand-experiment-660: hsl(235,calc(var(--saturation-factor, 1)*47.1%),33.3%);
    --brand-experiment-700: hsl(235,calc(var(--saturation-factor, 1)*47%),25.9%);
    --brand-experiment-730: hsl(235,calc(var(--saturation-factor, 1)*46.8%),24.3%);
    --brand-experiment-760: hsl(234,calc(var(--saturation-factor, 1)*46.9%),22.2%);
    --brand-experiment-800: hsl(235,calc(var(--saturation-factor, 1)*47.5%),19.4%);
    --brand-experiment-830: hsl(235,calc(var(--saturation-factor, 1)*47.4%),14.9%);
    --brand-experiment-860: hsl(235,calc(var(--saturation-factor, 1)*46.9%),9.6%);
    --brand-experiment-900: hsl(233,calc(var(--saturation-factor, 1)*50%),3.1%);
    --brand-experiment-05a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.05);
    --brand-experiment-10a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.1);
    --brand-experiment-15a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.15);
    --brand-experiment-20a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.2);
    --brand-experiment-25a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.25);
    --brand-experiment-30a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.3);
    --brand-experiment-35a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.35);
    --brand-experiment-40a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.4);
    --brand-experiment-45a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.45);
    --brand-experiment-50a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.5);
    --brand-experiment-55a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.55);
    --brand-experiment-60a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.6);
    --brand-experiment-65a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.65);
    --brand-experiment-70a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.7);
    --brand-experiment-75a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.75);
    --brand-experiment-80a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.8);
    --brand-experiment-85a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.85);
    --brand-experiment-90a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.9);
    --brand-experiment-95a: hsla(235,calc(var(--saturation-factor, 1)*85.6%),64.7%,0.95);
    --brightness: calc(1.5 - var(--saturation-factor, 1)*0.5);
    --contrast: var(--saturation-factor,1);
    --header-primary: #fff;
    --header-secondary: #b9bbbe;
    --text-normal: #dcddde;
    --text-muted: #72767d;
    --text-link: hsl(197,calc(var(--saturation-factor, 1)*100%),47.8%);
    --text-link-low-saturation: hsl(197,calc(var(--saturation-factor, 1)*100%),52.9%);
    --text-positive: hsl(139,calc(var(--saturation-factor, 1)*66.8%),58.6%);
    --text-warning: hsl(38,calc(var(--saturation-factor, 1)*95.7%),54.1%);
    --text-danger: hsl(359,calc(var(--saturation-factor, 1)*82.6%),59.4%);
    --interactive-normal: #b9bbbe;
    --interactive-hover: #dcddde;
    --interactive-active: #fff;
    --interactive-muted: #4f545c;
    --background-primary: #36393f;
    --background-secondary: #2f3136;
    --background-secondary-alt: #292b2f;
    --background-tertiary: #202225;
    --background-accent: #4f545c;
    --background-floating: #18191c;
    --background-mobile-primary: #36393f;
    --background-mobile-secondary: #2f3136;
    --background-modifier-hover: rgba(79,84,92,0.16);
    --background-modifier-active: rgba(79,84,92,0.24);
    --background-modifier-selected: rgba(79,84,92,0.32);
    --background-modifier-accent: hsla(0,0%,100%,0.06);
    --info-positive-text: #fff;
    --info-warning-text: #fff;
    --info-danger-text: #fff;
    --info-help-background: hsla(197,calc(var(--saturation-factor, 1)*100%),47.8%,0.1);
    --info-help-foreground: hsl(197,calc(var(--saturation-factor, 1)*100%),47.8%);
    --info-help-text: #fff;
    --status-warning-text: #000;
    --scrollbar-thin-thumb: #202225;
    --scrollbar-thin-track: transparent;
    --scrollbar-auto-thumb: #202225;
    --scrollbar-auto-track: hsl(210,calc(var(--saturation-factor, 1)*9.8%),20%);
    --scrollbar-auto-scrollbar-color-thumb: #202225;
    --scrollbar-auto-scrollbar-color-track: #2f3136;
    --elevation-stroke: 0 0 0 1px rgba(4,4,5,0.15);
    --elevation-low: 0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05);
    --elevation-medium: 0 4px 4px rgba(0,0,0,0.16);
    --elevation-high: 0 8px 16px rgba(0,0,0,0.24);
    --logo-primary: #fff;
    --control-brand-foreground: hsl(235,calc(var(--saturation-factor, 1)*86.1%),77.5%);
    --control-brand-foreground-new: hsl(235,calc(var(--saturation-factor, 1)*86.1%),77.5%);
    --background-mentioned: hsla(38,calc(var(--saturation-factor, 1)*95.7%),54.1%,0.1);
    --background-mentioned-hover: hsla(38,calc(var(--saturation-factor, 1)*95.7%),54.1%,0.08);
    --background-message-hover: rgba(4,4,5,0.07);
    --channels-default: #8e9297;
    --guild-header-text-shadow: 0 1px 1px rgba(0,0,0,0.4);
    --channeltextarea-background: #40444b;
    --activity-card-background: #202225;
    --textbox-markdown-syntax: #8e9297;
    --deprecated-card-bg: rgba(32,34,37,0.6);
    --deprecated-card-editable-bg: rgba(32,34,37,0.3);
    --deprecated-store-bg: #36393f;
    --deprecated-quickswitcher-input-background: #72767d;
    --deprecated-quickswitcher-input-placeholder: hsla(0,0%,100%,0.3);
    --deprecated-text-input-bg: rgba(0,0,0,0.1);
    --deprecated-text-input-border: rgba(0,0,0,0.3);
    --deprecated-text-input-border-hover: #040405;
    --deprecated-text-input-border-disabled: #202225;
    --deprecated-text-input-prefix: #dcddde;
    --info-positive-background: hsla(139,calc(var(--saturation-factor, 1)*47.3%),43.9%,0.1);
    --info-positive-foreground: hsl(139,calc(var(--saturation-factor, 1)*47.3%),43.9%);
    --info-warning-background: hsla(38,calc(var(--saturation-factor, 1)*95.7%),54.1%,0.1);
    --info-warning-foreground: hsl(38,calc(var(--saturation-factor, 1)*95.7%),54.1%);
    --info-danger-background: hsla(359,calc(var(--saturation-factor, 1)*82.6%),59.4%,0.1);
    --info-danger-foreground: hsl(359,calc(var(--saturation-factor, 1)*82.6%),59.4%);
    --status-positive-background: hsl(139,calc(var(--saturation-factor, 1)*47.3%),43.9%);
    --status-positive-text: #fff;
    --status-warning-background: hsl(38,calc(var(--saturation-factor, 1)*95.7%),54.1%);
    --status-danger-background: hsl(359,calc(var(--saturation-factor, 1)*82.6%),59.4%);
    --status-danger-text: #fff;
    --focus-primary: hsl(197,calc(var(--saturation-factor, 1)*100%),47.8%);
  }
  ol, ul {
    list-style: none;
  }
  button, input{
    outline: none;
    border: none;
  }
  
  background-color: var(--background-tertiary);
  text-rendering: optimizeLegibility;
  position: absolute;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  ::placeholder, body, button, input, select, textarea {
    font-family: var(--font-primary);
    text-rendering: optimizeLegibility;
  }
  ::-webkit-input-placeholder, body, button, input, select, textarea {
    font-family: var(--font-primary);
    text-rendering: optimizeLegibility;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    overflow: hidden;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  canvas{
    position: fixed;
    z-index: 0;
    top: 0px;
    left: 0px;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
