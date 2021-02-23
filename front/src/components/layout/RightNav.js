import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import styled, { css } from 'styled-components';

const RightNav = ({ open }) => {

    const router = useRouter();

  return (
    <RightNavWrapper active={router.pathname == "/projectSubmit" ? true : false} open={open}>
        <ul>
            <Link href="/project">
                <li>프로젝트 (5)</li>
            </Link>
            <li>제로나인즈 스토리</li>
            <li>연락처 및 오시는 길</li>
            <Link href="/projectSubmit">
                <li>프로젝트 의뢰하기</li>
            </Link>
        </ul>
    </RightNavWrapper>
  )
}

const RightNavWrapper = styled.div`
    position : fixed;
    height : 100vh;
    width : 60%;
    display : block;
    background : #2E2E2E;
    right : -60%;
    top : 0;
    z-index : 5;
    transition: all 0.4s;
    

    ${props =>
    props.open === true &&
    css`
        right : 0;
    `}

    & > ul {
        margin : 230px 0 0 80px;
    
        @media (max-width: 768px) {
            margin : 230px 0 0 50px;
        }
    }

    & > ul > li {
        font-size : 36px;
        font-weight : 300;
        margin : 0 0 30px 0;
        color : #00FFB2;

        cursor : pointer;

        @media (max-width: 399px) {
            font-size : 24px;
        }
    }

    ${props => props.active === true &&
        css`
            background : #eee;
        `
    }

    @media (max-width : 399px) {
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
                background : #eee;
            `
        }
    }
`


export default RightNav;