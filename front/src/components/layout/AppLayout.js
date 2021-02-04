import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import RightNav from './RightNav';

import logo from '../../../static/img/logo.png';

const AppLayout = () => {

    const [open, setOpen] = useState(false);

    console.log(open);

    return (
        <>
        <LayoutWrapper>
            <LogoWrapper>
                <img src={logo} alt="로고"/>
            </LogoWrapper>
            <MenuBtn open={open} onClick={() => setOpen(!open)}>
                <HamburgerMenu open={open}></HamburgerMenu>
            </MenuBtn>
        </LayoutWrapper>
        <RightNav open={open}/>
        </>
    )
}

const LayoutWrapper = styled.div`
    display : flex;
    justify-content : space-between;
    position : fixed;
    width : 100%;
    z-index : 10;
`

const LogoWrapper = styled.div`
    margin : 45px 0 0 54px;
`

const MenuBtn = styled.div`
    width: 60px;
    height: 60px;
    cursor: pointer;
    margin : 55px 34px 0 0;
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
`

export default AppLayout;

