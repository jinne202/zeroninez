import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import RightNav from './RightNav';
import Link from 'next/link'
import { useRouter } from "next/router";

import logo from '../../../static/img/logo.png';
import whiteLogo from '../../../static/img/logoWhite.png';

const AppLayout = () => {

    const [open, setOpen] = useState(false);
    const router = useRouter();
    console.log(open);

    const logoClolor = router.pathname == "/projectSubmit" ? whiteLogo : logo

    return (
        <>
        <LayoutWrapper>
            <Link href="/">
                <LogoWrapper>
                    <img src={logoClolor} alt="로고"/>
                </LogoWrapper>
            </Link>
            <MenuBtn open={open} onClick={() => setOpen(!open)}>
                <HamburgerMenu active={router.pathname == "/projectSubmit" ? true : false} open={open}></HamburgerMenu>
            </MenuBtn>
        </LayoutWrapper>
        <RightNav open={open}/>
        </>
    )
}

const LayoutWrapper = styled.div`
    display : flex;
    justify-content : space-between;
    width : 100%;
`

const LogoWrapper = styled.div`
    padding : 45px 0 0 54px;
    cursor : pointer;
    position : fixed;
    width : 120px;
    z-index : 10;

    & > img {
        width : 100%;
    }

    @media (min-width: 400px) and (max-width: 630px) {
        margin : 10px 0 0 10px;
        width : 110px;
    }

    @media (max-width : 399px) {
        margin : 10 0 0 -10px ;
        width : 100px;
    }
`

const MenuBtn = styled.div`
    width: 60px;
    height: 60px;
    cursor: pointer;
    margin : 55px 34px 0 0;
    position : fixed;
    z-index : 10;
    right : 34px;

    @media (max-width: 630px) {
        margin : 55px 5px 0 0;
        right : 5px;
    }
`

const HamburgerMenu = styled.div`
    position: relative;
    transform: translateY(25px);
    background: black;
    transition: all 0ms 300ms;
    width: 25px;
    height: 2px;
    margin : 0 0 0 15px;

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

export default AppLayout;
