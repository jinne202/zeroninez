import React from 'react';
import styled from 'styled-components';

import SNSFacebook from '../../../static/img/SNSFacebook.png';
import SNSInstagran from '../../../static/img/SNSInstagram.png';
import SNSYoutube from '../../../static/img/SNSYoutube.png';
import SNSBehance from '../../../static/img/SNSBehance.png';
import SNSMedium from '../../../static/img/SNSMedium.png';
import SNSTwitter from '../../../static/img/SNSTwitter.png';


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
                    <img src={SNSFacebook} alt="페이스북"/>
                    <img src={SNSInstagran} alt="인스타그램"/>
                    <img src={SNSYoutube} alt="유튜브"/>
                    <img src={SNSBehance} alt="비핸스"/>
                    <img src={SNSMedium} alt="미디엄"/>
                    <img src={SNSTwitter} alt="트위터"/>
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

    & > img {
        margin : 0 40px 30px 0;
        opacity : 0.3;
        cursor : pointer

        &:hover {
            opacity : 1;
        }
    }
`


export default LeftSide;