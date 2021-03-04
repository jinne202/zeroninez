import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import styled, { css } from 'styled-components';

const RightNav = ({ open }) => {

    const router = useRouter();

  return (
    <RightNavMenu>
        <Overlay open={open}></Overlay>
        <RightNavWrapper active={router.pathname == "/projectSubmit" ? true : false} open={open}>
            <ListWrapper>
                <Link href="/project">
                    <ListLink active={router.pathname == "/projectSubmit" ? true : false}>프로젝트 (5)</ListLink>
                </Link>
                <a href="https://zeroninez.tistory.com/" target="_blank">
                <ListLink active={router.pathname == "/projectSubmit" ? true : false}>제로나인즈 스토리</ListLink>
                </a>
                <ListLink active={router.pathname == "/projectSubmit" ? true : false}>연락처 및 오시는 길</ListLink>
                <Link href="/projectSubmit">
                    <ListLink active={router.pathname == "/projectSubmit" ? true : false}>프로젝트 의뢰하기</ListLink>
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
    

    ${props =>
    props.open === true &&
    css`
        right : 0;
    `}

    ${props => props.active === true &&
        css`
            background : #fff;
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
    margin : 30vh 0 0 40px;

    @media (min-width: 421px) and (max-width: 1024px) {
        margin : 30vh 0 0 8%;
    }

    @media (max-width: 420px) {
        margin : 30vh 0 0 8%;
    }
`

const ListLink = styled.li`
    font-size : 36px;
    font-weight : 300;
    margin : 0 0 30px 0;
    color : #ffffff;

    cursor : pointer;

    @media (min-width: 1024px) and (max-width: 1600px) {
        font-size : 30px;
    }

    @media (max-width: 420px) {
        font-size : 24px;
    }

    ${props => props.active === true &&
        css`
            color : black;
        `
    }
`


export default RightNav;