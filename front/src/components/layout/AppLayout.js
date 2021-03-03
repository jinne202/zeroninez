import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import RightNav from './RightNav';
import Link from 'next/link'
import { useRouter } from "next/router";

import logo from '../../../static/img/logo.png';
import whiteLogo from '../../../static/img/logoWhite.png';

const znzLogo = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.71 98.84"><defs></defs><title>자산 16</title><g id="레이어_2" data-name="레이어 2"><g id="Layer_1" data-name="Layer 1"><rect class="cls-1" x="22.07" y="23" width="12.67" height="5.05" rx="2.53"/><rect class="cls-1" x="22.07" y="0.61" width="12.67" height="5.05" rx="2.53"/><rect class="cls-1" x="22.07" y="11.81" width="12.67" height="5.05" rx="2.53"/><rect class="cls-1" x="25.67" y="36.57" width="5.58" height="4.32" rx="1.95" transform="translate(-10.27 67.19) rotate(-90)"/><path d="M12.7,38.42H12A9.51,9.51,0,0,0,2.41,48V63.69a2.69,2.69,0,0,0,2.39,2.7,2.61,2.61,0,0,0,2.86-2.57V47.19a2.63,2.63,0,0,1,2.65-2.61H14a2.63,2.63,0,0,1,2.65,2.61v16.5A2.69,2.69,0,0,0,19,66.39a2.61,2.61,0,0,0,2.86-2.57V48A9.42,9.42,0,0,0,12.7,38.42Z"/><path d="M44.4,38.42h-.72A9.51,9.51,0,0,0,34.11,48V63.69a2.69,2.69,0,0,0,2.39,2.7,2.61,2.61,0,0,0,2.86-2.57V47.19A2.63,2.63,0,0,1,42,44.58h3.66a2.63,2.63,0,0,1,2.65,2.61v16.5a2.69,2.69,0,0,0,2.39,2.7,2.61,2.61,0,0,0,2.86-2.57V48A9.42,9.42,0,0,0,44.4,38.42Z"/><rect class="cls-1" x="62.4" y="60.91" width="12.67" height="4.96" rx="2.37"/><rect class="cls-1" x="62.4" y="38.94" width="12.67" height="4.96" rx="2.37"/><rect class="cls-1" x="62.4" y="49.93" width="12.67" height="4.96" rx="2.37"/><path d="M16.29,4A2.39,2.39,0,0,0,14.11.61H5A2.39,2.39,0,0,0,2.59,3v.28A2.39,2.39,0,0,0,5,5.67H5A2.38,2.38,0,0,1,7.18,9L.21,24.7a2.39,2.39,0,0,0,2.18,3.36h9.34a2.39,2.39,0,0,0,2.38-2.39v-.28A2.39,2.39,0,0,0,11.73,23H11.5a2.38,2.38,0,0,1-2.18-3.35Z"/><path d="M36.5,74.75a2.38,2.38,0,0,0-2.18-3.35H25.18a2.38,2.38,0,0,0-2.38,2.38v.29a2.37,2.37,0,0,0,2.38,2.38h0a2.39,2.39,0,0,1,2.18,3.36l-7,15.68a2.38,2.38,0,0,0,2.18,3.35h9.34a2.38,2.38,0,0,0,2.39-2.38v-.29a2.39,2.39,0,0,0-2.39-2.38h-.22a2.39,2.39,0,0,1-2.18-3.36Z"/><path d="M53.35,4A2.39,2.39,0,0,0,51.17.61H42A2.39,2.39,0,0,0,39.65,3v.28A2.39,2.39,0,0,0,42,5.67h0A2.38,2.38,0,0,1,44.24,9l-1.93,4.35a2.32,2.32,0,0,0,0,1.93l5,11.34a2.38,2.38,0,0,0,2.18,1.42h1.64a2.39,2.39,0,0,0,2.18-3.36l-4.18-9.4a2.4,2.4,0,0,1,0-1.93Z"/><path d="M68.85,0h-.23a9.85,9.85,0,0,0-9.86,9.86v9a9.85,9.85,0,0,0,9.86,9.86h.23a9.85,9.85,0,0,0,9.86-9.86V9.86A9.85,9.85,0,0,0,68.85,0ZM73,19.78a3,3,0,0,1-3,3H67.49a3,3,0,0,1-3-3V8.89a3,3,0,0,1,3-3H70a3,3,0,0,1,3,3Z"/></g></g></svg>

const AppLayout = ({ children }) => {

    const [open, setOpen] = useState(false);
    const router = useRouter();
    console.log(open);


    const handleOpen = () => {
        setOpen(!open)
    }
 
    // useEffect(() => {
    //     let scrollPosition = 0;
    //     const body = document.querySelector('body');
    //     if(open === true) {
    //         scrollPosition = window.scrollY;
    //         body.style.position = 'fixed';
    //         body.style.top = `-${scrollPosition}px`;
    //         body.style.width = '100%';
    //         body.style.overflowY = 'scroll';
    //     } else {
    //         scrollPosition = window.scrollY;
    //         body.style.removeProperty('position');
    //         body.style.removeProperty('top');
    //         body.style.removeProperty('width');
    //         window.scrollTo(0, scrollPosition);
    //     }
    // }, [open])

    const [header, setHeader] = useState(false);
    const listenScrollEvent = (event) => {
        const { scrollHeight } = document.body;
        const scrollNow = window.scrollY;

        // console.log(scrollHeight - scrollNow);
        if (scrollHeight - scrollNow < 80) {
            return setHeader(true);
        } else {
            return setHeader(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    console.log(header, "header");

    return (
        <>
        <LayoutWrapper>
            <Link href="/">
                <LogoWrapper active={router.pathname == "/projectSubmit" ? true : false} open={open} header={header}>
                    {znzLogo}
                </LogoWrapper>
            </Link>
            <MenuBtn open={open} onClick={handleOpen}>
                <HamburgerMenu active={router.pathname == "/projectSubmit" ? true : false} open={open} header={header}></HamburgerMenu>
            </MenuBtn>
        </LayoutWrapper>
        <RightNav open={open}/>
        <ContentsWrapper>
            {children}
        </ContentsWrapper>
        </>
    )
}

const LayoutWrapper = styled.div`
    display : flex;
    justify-content : space-between;
    width : 100%;
`

const LogoWrapper = styled.div`
    cursor : pointer;
    position : fixed;
    top : 45px;
    left : 54px;
    width : 75px;
    z-index : 1000;

    & > svg {
        fill : black;
        transition: all 300ms;
    }

    ${props => props.active === true &&
        css`
            & > svg {
                fill : white;
            }
        `
    }

    ${props => props.header === true &&
        css`
            & > svg {
                fill : white;
            }
        `
    }

    @media (min-width: 631px) and (max-width: 1024px) {
        width : 50px;
        top : 55px;
        left : 8%;

        ${props => props.open === true && props.active === false &&
            css`
                & > svg {
                    fill : white;
                }
            `
        }

        ${props => props.open === true && props.active === true &&
            css`
                & > svg {
                    fill : black;
                }
            `
        }
    }

    @media (max-width: 630px) {
        top : 50px;
        left : 8%;
        width : 50px;

        ${props => props.open === true && props.active === false &&
            css`
                & > svg {
                    fill : white;
                }
            `
        }

        ${props => props.open === true && props.active === true &&
            css`
                & > svg {
                    fill : black;
                }
            `
        }
    }
`

const MenuBtn = styled.div`
    width: 60px;
    height: 60px;
    cursor: pointer;
    top : 55px;
    position : fixed;
    z-index : 1000;
    right : 54px;

    @media (min-width: 421px) and (max-width: 1024px) {
        top : 55px;
        right : 8%;
    }

    @media (max-width : 420px) {
        top : 55px;
        right : 8%;
    }
`

const HamburgerMenu = styled.div`
    position: relative;
    transform: translateY(25px);
    background: black;
    width: 25px;
    height: 2px;
    margin : 0 0 0 34px;
    transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);

    ${props => props.header === true &&
        css`
            background : white;
        `
    }

    ${props =>
    props.open === true &&
    css`
        background: transparent;
    `}

    &:after {
        width: 25px;
        height: 2px;
        content: "";
        position: absolute;
        left: 0;
        top: 8px;
        background: black;
        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);

        ${props =>
        props.open === true &&
        css`
            top: 0;
            transform: rotate(45deg);
            transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
            background : white;
        `}

        ${props => props.header === true &&
            css`
                background : white;
            `
        }
    }

    &:before {
        width: 25px;
        height: 2px;
        content: "";
        position: absolute;
        left: 0;
        bottom: 8px;
        background: black;
        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);

        ${props =>
        props.open === true &&
        css`
            bottom: 0;
            transform: rotate(-45deg);
            transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
            background : white;
        `}

        ${props => props.header === true &&
            css`
                background : white;
            `
        }
    }

    ${props => props.active === true &&
        css`
            background : white;
            &:after {
                background : white;

                ${props =>
                    props.open === true &&
                    css`
                        background: black;
                `}
            }
            &:before {
                background : white;

                ${props =>
                    props.open === true &&
                    css`
                        background: black;
                `}
            }
            ${props =>
                props.open === true &&
                css`
                    background: transparent;
            `}
        `
    }
`

const ContentsWrapper = styled.div`
`

export default AppLayout;
