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
    .ativoHome .wrapper{
        background-color: var(--brand-experiment) !important;
        border-radius: 100%;
        animation: animation 0.4s ease;
    }
    .ativoHome .pill .item{
        height: 40px !important;
    }
    .isHome{
        transition: 0.4s ease;
        background-color: var(--background-primary);
        animation: animationBack 0.4s ease;
    }
    @keyframes animation {
        0%{
            border-radius: 0%;
        }
        100%{
            border-radius: 100%;
        }
    }
    @keyframes animationBack {
        0%{
            border-radius: 100%;
        }
        100%{
            border-radius: 0%;
        }
    }
    overflow: hidden scroll
    padding-right: 0px !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
    padding: 12px 0 0 !important;
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
            .item{
                transition: height 0.4s ease;
                opacity: 1;
                height: 10px;
                transform: none;
            }
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
                    -webkit-transition: all .15s ease-out,color .15s ease-out;
                    transition: all .15s ease-out,color .15s ease-out;
                    color: var(--text-normal);
                    height: 55px;
                    border-radius: 0%;
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