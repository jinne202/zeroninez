import React from 'react';
import styled from 'styled-components';

import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillBehanceSquare, AiFillMediumSquare, AiFillTwitterSquare } from "react-icons/ai";


const LeftSide = () => {
    return (
        <LeftSideWrapper>
            <Title>A Project With ZERONINEZ </Title>
            <ContactSection>
                <ContactTitle>CONTACT US</ContactTitle>
                <ContactDesc>zeroninez_team@naver.com</ContactDesc>
                <ContactDesc>02 . 3144 . 0099</ContactDesc>
            </ContactSection>
            <SNSSection>
                <SNSTitle>FOLLOW</SNSTitle>
                <SNSDesc>
                    <IconWrapper>
                        <AiFillFacebook/>
                    </IconWrapper>
                    <IconWrapper>
                        <AiFillInstagram/>
                    </IconWrapper>
                    <IconWrapper>
                        <AiFillYoutube/>
                    </IconWrapper>
                    <IconWrapper>
                        <AiFillBehanceSquare/>
                    </IconWrapper>
                    <IconWrapper>
                        <AiFillMediumSquare/>
                    </IconWrapper>
                    <IconWrapper>
                        <AiFillTwitterSquare/>
                    </IconWrapper>
                </SNSDesc>
            </SNSSection>
        </LeftSideWrapper>
    )
}

const LeftSideWrapper = styled.div`
    color : white;
    position : fixed;
    top : 300px;
    left : 12%;

    @media (min-width: 1025px) and (max-width: 1600px) {
        top : 170px;
    }

    @media (min-width: 421px) and (max-width: 1024px) {
        top : 170px;
        left : 8%;
    }

    @media (max-width : 420px) {
        position : relative;
        width : 100%;
        display : block;
        left : 0;
        top : 0;
    }
`

const Title = styled.p`
    font-size : 24px;
    font-weight : 700;


    @media (min-width: 769px) and (max-width: 1024px) {
        font-size : 24px;
        width : 200px;
    }

    @media (min-width: 421px) and (max-width: 768px) {
        font-size : 18px;
        width : 150px;
    }
`

const ContactSection = styled.div`
    margin : 80px 0 0 0;
`

const ContactTitle = styled.p`
    font-size : 14px;
    margin : 0 0 40px 0;
    font-weight : 400;

    @media (min-width: 769px) and (max-width: 1024px) {
        font-size : 12px;
    }

    @media (min-width: 421px) and (max-width: 768px) {
        font-size : 10px;
    }
`

const ContactDesc= styled.p`
    font-size : 18px;

    @media (min-width: 769px) and (max-width: 1024px) {
        font-size : 14px;
    }

    @media (min-width: 421px) and (max-width: 768px) {
        font-size : 12px;
    }
`

const SNSSection = styled.div`
    margin : 110px 0 0 0;
`

const SNSTitle = styled.p`
    font-size : 14px;
    margin : 0 0 40px 0;
    font-weight : 400;    
    
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size : 12px;
    }

    @media (min-width: 421px) and (max-width: 768px) {
        font-size : 10px;
    }
`

const SNSDesc = styled.div`
    width : 210px;

    @media (min-width: 421px) and (max-width: 1024px) {
        width : 150px;
    }
`

const IconWrapper = styled.div`
    margin : 0 40px 30px 0;
    opacity : 0.7;
    cursor : pointer;
    font-size : 30px;
    color : white;
    display : inline-block;

    &:hover {
        opacity : 1;
    }

    @media (min-width: 421px) and (max-width: 1024px) {
        font-size : 22px;
        margin : 0 20px 15px 0;
    }
`


export default LeftSide;