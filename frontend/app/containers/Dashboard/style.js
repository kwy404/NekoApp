import styled from "styled-components";

export const appMount = styled.div`
    ol, ul {
        list-style: none;
    }
    position: fixed;
    width: 100%;
    height: 100%;
    :root{
        --font-primary: Whitney,"Helvetica Neue",Helvetica,Arial,sans-serif;
        --font-display: Ginto,"Helvetica Neue",Helvetica,Arial,sans-serif;
        --font-code: Consolas,"Andale Mono WT","Andale Mono","Lucida Console","Lucida Sans Typewriter","DejaVu Sans Mono","Bitstream Vera Sans Mono","Liberation Mono","Nimbus Mono L",Monaco,"Courier New",Courier,monospace;
        --font-korean: Whitney,"Apple SD Gothic Neo","NanumBarunGothic","맑은 고딕","Malgun Gothic",Gulim,굴림,Dotum,돋움,"Helvetica Neue",Helvetica,Arial,sans-serif;
        --font-japanese: Whitney,Hiragino Sans,"ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN","メイリオ",Meiryo,Osaka,"MS PGothic","Helvetica Neue",Helvetica,Arial,sans-serif;
        --font-chinese-simplified: Whitney,"Microsoft YaHei New",微软雅黑,"Microsoft Yahei","Microsoft JhengHei",宋体,SimSun,"Helvetica Neue",Helvetica,Arial,sans-serif;
        --font-chinese-traditional: Whitney,"Microsoft JhengHei",微軟正黑體,"Microsoft JhengHei UI","Microsoft YaHei",微軟雅黑,宋体,SimSun,"Helvetica Neue",Helvetica,Arial,sans-serif;
    }
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
`

export const app = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--background-tertiary);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`

export const bg = styled.div`
    background-color: var(--background-tertiary);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`

export const layers = styled.div`
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    .layer{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
`

export const baseLayer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: var(--background-primary);
`

export const container = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    .guild{
        position: relative;
        width: 72px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
    }
`

export const wrapper = styled.nav`
    height: 100%;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 72px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    position: relative;
    background-color: var(--background-tertiary);
`

export const tree = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
`

export const unreadMentionsIndicatorTop = styled.div`
    top: 0 !important;
    padding-top: 8px !important;
    position: absolute !important;
    left: 0 !important;
    right: 0 !important;
    z-index: 10 !important;
    overflow: hidden !important;
    padding: 8px !important;
    height: 40px !important;
    pointer-events: none !important;
    width: 72px !important;
    -webkit-box-sizing: border-box !important;
    box-sizing: border-box !important;
    
`

export const bar = styled.div`
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex!important ;
    -webkit-box-align: center !important;
    -ms-flex-align: center !important ;
    align-items: center !important;
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
    position: relative !important;
    font-size: 12px !important;
    line-height: 16px !important;
    font-family: var(--font-display) ;
    font-weight: 600 !important;
    color: #fff !important;
    height: 24px !important;
    cursor: pointer !important;
    text-transform: uppercase !important;
    border-radius: 12px !important;
    pointer-events: auto !important;
    -webkit-box-shadow: 0 2px 6px rgb(0 0 0 / 24%) !important;
    box-shadow: 0 2px 6px rgb(0 0 0 / 24%) !important;
    -webkit-app-region: no-drag !important;
    background-color: var(--background-accent) !important;
    opacity: .9 !important;
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
    position: relative !important;
    font-size: 12px !important;
    line-height: 16px !important;
    font-family: var(--font-display) !important;
    font-weight: 600 !important;
    color: #fff !important;
    height: 24px !important;
    cursor: pointer !important;
    text-transform: uppercase !important;
    border-radius: 12px !important;
    pointer-events: auto !important;
    -webkit-box-shadow: 0 2px 6px rgb(0 0 0 / 24%) !important;
    box-shadow: 0 2px 6px rgb(0 0 0 / 24%) !important;
    -webkit-app-region: no-drag !important;
    :hover{
        opacity: 1 !important;
    }
    :before{
        top: -8px !important;
        position: absolute !important;
        top: 0 !important;
        left: -8px !important;
        right: -8px !important;
        bottom: 0 !important;
        content: "" !important;
    }
`

export const scroller = styled.div`
    overflow: hidden scroll
    padding-right: 0px !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
    padding: 12px 0 0 !important;
    background-color: var(--background-tertiary) !important;
    contain: layout size !important;
    position: relative !important;
    -webkit-box-sizing: border-box !important;
    box-sizing: border-box !important;
    min-height: 0 !important;
    -webkit-box-flex: 1 !important;
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
`

export const tutorialContainer = styled.div`
    position: relative;
    .listItem{
        position: relative;
        margin: -2px -5px 8px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 72px;
        .pill{
            position: absolute;
            top: 0;
            left: -3px;
            position: relative;
            overflow: hidden;
            width: 8px;
            height: 48px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            contain: layout size;
            span{
                position: absolute;
                display: block;
                width: 8px;
                border-radius: 0 4px 4px 0;
                margin-left: -4px;
                background-color: var(--header-primary);
            }
        }
        .listItemWrapper{
            .wrapper25{
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                position: relative;
                width: 48px;
                height: 48px;
                cursor: pointer;
                .childWrapper{
                    color: #fff;
                    background-color: var(--brand-experiment);
                    -webkit-transition: background-color .15s ease-out,color .15s ease-out;
                    transition: background-color .15s ease-out,color .15s ease-out;
                    color: var(--text-normal);
                    height: 55px;
                }
                .svg1{
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 48px;
                    height: 48px;
                }
                .homeIcon{
                    display: block;
                    width: 28px;
                    height: 20px;
                    position: relative;
                    top: 14px;
                    opacity: 1;
                    left: 10px;
                    path{
                        fill: white;
                    }
                }
            }
        }
    }
`

export const listItem = styled.div`
    position: relative;
    margin: 0 0 8px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 72px;
    .guildSeparator{
        height: 2px;
        width: 32px;
        border-radius: 1px;
        background-color: var(--background-modifier-accent);
    }
    .blobContainer{
        .wrapper{
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            position: relative;
            width: 48px;
            height: 48px;
            cursor: pointer;
            svg{
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                position: absolute;
                top: 0;
                left: 0;
                width: 48px;
                height: 48px;
            }
        }
    }
`