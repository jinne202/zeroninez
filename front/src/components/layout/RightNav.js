import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import styled, { css } from 'styled-components';

const starSvg = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 0L18.3374 4.72859L23.8168 2.86475L23.7374 8.65192L29.2658 10.3647L25.8 15L29.2658 19.6353L23.7374 21.3481L23.8168 27.1353L18.3374 25.2714L15 30L11.6626 25.2714L6.18322 27.1353L6.26262 21.3481L0.734152 19.6353L4.2 15L0.734152 10.3647L6.26262 8.65192L6.18322 2.86475L11.6626 4.72859L15 0Z" fill="#00E19E"/>
</svg>

const RightNav = ({ open }) => {

    const router = useRouter();

    return (
    <RightNavMenu>
        <Overlay open={open}></Overlay>
        <RightNavWrapper active={router.pathname == "/projectSubmit" ? true : false} open={open}>
            <ListWrapper active={router.pathname == "/projectSubmit" ? true : false}>
                <Link href="/">
                    <ListLink active={router.pathname == "/" ? true : false}>홈<span>{starSvg}</span></ListLink>
                </Link>
                <Link href="/project">
                    <ListLink active={router.pathname == "/project" ? true : false}>프로젝트 (5)<span>{starSvg}</span></ListLink>
                </Link>
                <a href="https://zeroninez.tistory.com/" target="_blank">
                <ListLink>제로나인즈 스토리</ListLink>
                </a>
                <ListLink>연락처 및 오시는 길</ListLink>
                <Link href="/projectSubmit">
                    <ListLink active={router.pathname == "/projectSubmit" ? true : false}>프로젝트 의뢰하기<span>{starSvg}</span></ListLink>
                </Link>
            </ListWrapper>
        </RightNavWrapper>
    </RightNavMenu>
  )
}

const RightNavMenu = styled.div`
`

const Overlay = styled.div`
    
    transition: all 0.4s;

    ${props =>
    props.open === true &&
    css`
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 4;
    `}
`

const RightNavWrapper = styled.div`
    position : fixed;
    height : 100vh;
    width : 30%;
    display : block;
    background : #2E2E2E;
    right : -30%;
    top : 0;
    z-index : 5;
    transition: all 0.4s;

    & > ul > a {
        color : #fff;
    }

    & > ul > a:hover {
        color : #00E19E;
    }
    

    ${props =>
    props.open === true &&
    css`
        right : 0;
    `}

    ${props => props.active === true &&
        css`
            background : #fff;

            & > ul > a {
                color : #000;
            }
        `
    }

    @media (max-width : 1024px) {
        position : fixed;
        height : 100vh;
        width : 100%;
        display : block;
        background : #2E2E2E;
        right : -100%;
        top : 0;
        z-index : 5;
        transition: all 0.4s;

        ${props =>
            props.open === true &&
            css`
                right : 0;
        `}

        
        ${props => props.active === true &&
            css`
                background : #fff;
            
                & > ul > li {
                    color : black;
                }
            `
        }
    }
`

const ListWrapper = styled.ul`
    margin : 27vh 0 0 40px;
    color : #ffffff;

    & > li:hover {
        color : #00E19E;
    }

    @media (min-width: 421px) and (max-width: 1024px) {
        margin : 30vh 0 0 8%;
    }

    @media (max-width: 420px) {
        margin : 30vh 0 0 8%;
    }

    ${props => props.active === true &&
        css`
            color : black;
        `
    }
`

const ListLink = styled.li`
    font-size : 36px;
    font-weight : 300;
    margin : 0 0 30px 0;

    cursor : pointer;

    @media (min-width: 1024px) and (max-width: 1600px) {
        font-size : 30px;
    }

    @media (max-width: 420px) {
        font-size : 24px;
    }

    & > span {
        margin : 0 0 0 10px;
        position : relative;
        opacity : 0;
    }

    & > span > svg {
        width : 20px;
        height : 20px;
        position : absolute;
        margin : 14px 0 0 0;
    }

    ${props => props.active === true &&
        css`
            font-weight : 400;
            color : #00E19E;

            & > span {
                opacity : 1;
            }
        `
    }
`


export default RightNav;