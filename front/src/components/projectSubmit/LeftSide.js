import React from 'react';
import styled from 'styled-components';

import SNSFacebook from '../../../static/img/SNSFacebook.png';
import SNSInstagran from '../../../static/img/SNSInstagram.png';
import SNSYoutube from '../../../static/img/SNSYoutube.png';
import SNSBehance from '../../../static/img/SNSBehance.png';
import SNSMedium from '../../../static/img/SNSMedium.png';
import SNSTwitter from '../../../static/img/SNSTwitter.png';

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
`

const Title = styled.p`
    font-size : 24px;
    font-weight : 700;
`

const ContactSection = styled.div`
    margin : 80px 0 0 0;
`

const ContactTitle = styled.p`
    font-size : 14px;
    margin : 0 0 40px 0;
    font-weight : 400;
`

const ContactDesc= styled.p`
    font-size : 18px;
`

const SNSSection = styled.div`
    margin : 110px 0 0 0;
`

const SNSTitle = styled.p`
    font-size : 14px;
    margin : 0 0 40px 0;
    font-weight : 400;                        
`

const SNSDesc = styled.div`
    width : 210px;
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
`


export default LeftSide;