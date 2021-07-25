import styled from 'styled-components';

export const base = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    overflow: hidden;
    flex-direction: column;
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
`

export const content = styled.div`
    position: fixed;
    height: calc(100%);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    min-width: 0;
    min-height: 0;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
`

export const sidebar = styled.div`
    flex-direction: column;
    min-height: 0;
    position: relative;
    width: 230px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    background: var(--background-secondary);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    overflow: hidden;
`

export const privateChannels = styled.nav`
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: var(--background-secondary);
    .searchBar{
        .header{
            position: relative;
            font-family: var(--font-display);
            font-weight: 500;
            padding: 0 16px;
            height: 48px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            z-index: 3;
            -webkit-transition: background-color .1s linear;
            transition: background-color .1s linear;
            color: var(--header-primary);
            -webkit-box-shadow: var(--elevation-low);
            box-shadow: var(--elevation-low);
            .name{
                font-weight: 600;
                font-size: 15px;
                line-height: 20px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
            }
        }
        z-index: 2;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        padding: 0 10px;
        height: 48px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-shadow: var(--elevation-low);
        box-shadow: var(--elevation-low);
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        .searchBarComponent{
            width: 100%;
            height: 28px;
            overflow: hidden;
            border-radius: 4px;
            background-color: var(--background-tertiary);
            -webkit-box-shadow: none;
            box-shadow: none;
            color: var(--text-muted);
            text-align: center;
            text-overflow: ellipsis;
            font-size: 13px;
            font-weight: 500;
            line-height: 24px;
            white-space: nowrap;
            cursor: pointer;
            font-family: var(--font-primary);
            text-rendering: optimizeLegibility;
            span{
                padding: 8px;
            }
        }
    }
`

export const channel = styled.div`
    position: relative;
    max-width: 214px;
    margin-left: 8px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    padding: 1px 0;
    border-radius: 4px;
    -webkit-transition: none;
    transition: none;
    color: var(--channels-default);
    .layout{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 4px;
        height: 42px;
        padding: 0 8px;
        .avatar{
            .avatarStack{
                display: grid;
                width: 100%;
                height: 100%;
            }
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: 32px;
            height: 32px;
            margin-right: 12px;
            .linkButtonIcon{
                width: 24px;
                height: 24px;
            }
        }
        .content{
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            .nameAndDecorators{
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: start;
                -ms-flex-pack: start;
                justify-content: flex-start;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                min-width: 0;
                -webkit-box-flex: 1;
                -ms-flex: 1 1 auto;
                flex: 1 1 auto;
                .name{
                    font-size: 16px;
                    line-height: 20px;
                    font-weight: 500;
                    -webkit-box-flex: 0;
                    -ms-flex: 0 1 auto;
                    flex: 0 1 auto;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
        }
        margin-top: 7px;
        cursor: pointer;
        :hover{
            color: var(--interactive-hover);
            background-color: var(--background-modifier-hover);
        }
    }
`

export const privateChannelsHeader = styled.h2`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 18px 8px 4px 18px;
    height: 40px;
    .headerText{
        color: var(--interactive-normal);
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-transform: uppercase;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: .25px;
        font-family: var(--font-display);
        font-weight: 600;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        color: var(--channels-default);
        :hover{
            color: rgba(255,255,255,0.9);
        }
    }
    .privateChannelRecipientsInviteButtonIcon{
        -webkit-box-flex: 0;
        -ms-flex: 0;
        flex: 0;
        width: 16px;
        height: 16px;
        margin-left: 0;
        margin-right: 2px;
        position: relative;
        height: 24px;
        width: auto;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        margin: -1px 8px;
        cursor: pointer;
        svg{
            color: var(--interactive-normal);
            :hover{
                color: white;
            }
            -webkit-box-flex: 0;
            -ms-flex: 0;
            flex: 0;
            width: 16px;
            height: 16px;
            margin-left: 0;
            margin-right: 2px;
            display: block;
            width: 18px;
            height: 18px;
            -webkit-app-region: no-drag;
            color: var(--text-muted);
        }
    }
`

export const scroller = styled.div`
    overflow: hidden scroll;
    padding-right: 0px;
    background-color: var(--background-secondary);
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-height: 0;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: var(--background-secondary);
`

export const panels = styled.section`
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    background-color: var(--background-secondary-alt);
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    overflow: hidden;
    .wrapper{
        position: relative;
        overflow: visible;
    }
    .container{
        -ms-flex-negative: 0;
        flex-shrink: 0;
        height: 52px;
        font-size: 14px;
        font-weight: 500;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 0 8px;
        margin-bottom: 1px;
        .flex-1{
            flex: 0 1 auto;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            button{
                cursor: pointer;
                float: left;
                line-height: 0;
                width: 32px;
                height: 32px;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                border-radius: 4px;
                position: relative;
                color: var(--interactive-normal);
                width: auto;
                background: transparent;
                color: currentColor;
                border: 0;
                padding: 0;
                margin: 0;
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
                background: none;
                border: none;
                border-radius: 3px;
                font-size: 14px;
                font-weight: 500;
                line-height: 16px;
                padding: 2px 10px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                position: relative;
                left: 7px;
            }
        }
        .nameTag{
            cursor: pointer;
            -webkit-user-select: text;
            -moz-user-select: text;
            -ms-user-select: text;
            user-select: text;
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            margin-right: 4px;
            min-width: 0;
            .colorStandard{
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-size: 14px;
                line-height: 18px;
                color: var(--text-normal);
                .size14{
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    color: var(--header-primary);
                    line-height: 18px;
                    font-weight: 600;
                    font-size: 13px;
                    line-height: 18px;
                }
            }
        }
        .avatarWrapper{
            cursor: pointer;
            margin-right: 8px;
            .avatar{
                width: 32px;
                height: 32px;
                svg{
                    position: absolute;
                    pointer-events: none;
                    position: relative;
                    display: block;
                    height: 100%;
                    width: auto;
                    rect{
                        width: 10px;
                        height: 10px;
                        x: 22;
                        y: 22;
                        mask: url(#svg-mask-status-dnd);
                        rx: 15;
                    }
                    .ocupado{
                        fill: #ed4245;
                    }
                    .avatarStack{
                        display: grid;
                        width: 100%;
                        height: 100%;
                        img{
                            text-indent: -9999px;
                            display: block;
                            -o-object-fit: cover;
                            object-fit: cover;
                            pointer-events: none;
                            width: 100%;
                            height: 100%;
                            grid-area: 1/1;
                            cursor: pointer;
                            border-radius: 50%;
                        }
                    }
                }
            }
        }
    }
`