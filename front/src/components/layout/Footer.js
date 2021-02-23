import React from 'react';
import styled from 'styled-components';

const ButtonSVG = <svg width="381" height="381" viewBox="0 0 381 381" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M190.5 0L211.957 55.0287L249.368 9.32373L252.769 68.2896L302.473 36.3823L287.487 93.5132L344.618 78.5269L312.71 128.231L371.676 131.632L325.971 169.043L381 190.5L325.971 211.957L371.676 249.368L312.71 252.769L344.618 302.473L287.487 287.487L302.473 344.618L252.769 312.71L249.368 371.676L211.957 325.971L190.5 381L169.043 325.971L131.632 371.676L128.231 312.71L78.5269 344.618L93.5132 287.487L36.3823 302.473L68.2896 252.769L9.32373 249.368L55.0287 211.957L0 190.5L55.0287 169.043L9.32373 131.632L68.2896 128.231L36.3823 78.5269L93.5132 93.5132L78.5269 36.3823L128.231 68.2896L131.632 9.32373L169.043 55.0287L190.5 0Z" fill="#00FFB2"/>
</svg>

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterInnerContainer>
                <FooterText>
                    <FooterTitle>
                        LET’S TALK <br/> YOUR CREATIVITY
                    </FooterTitle>
                    <FooterSubTitle>
                        가치있는 생각들을 응원합니다.<br/> 함께 해결해요.
                    </FooterSubTitle>
                </FooterText>
                <FooterButton>
                    {ButtonSVG}
                    <BtnText>프로젝트<br/>문의하기</BtnText>
                </FooterButton>
            </FooterInnerContainer>
            <CopyRightSection>
                COPYRIGHT 2021 ZERONINEZ. ALL RIGHTS RESERVED.
            </CopyRightSection>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    height : 100vh;
    width : 100%;
    background-color : #2E2E2E;
    display : block;
    font-family: 'Noto Sans KR', sans-serif;
    position: fixed;
    bottom: 0;
`

const FooterInnerContainer = styled.div`
    padding : 35vh 0 0 0;
    margin : 0 12%;
    display : flex;

    @media (max-width: 1080px) {
        display : block;
        padding : 23vh 0 0 0;
    }
`

const FooterTitle = styled.p`
    font-family: 'Rajdhani', sans-serif;
    font-size : 144px;
    font-weight : 600;
    line-height : 103%;
    color : #00FFB2;
    margin : 0;

    @media (max-width: 1440px) {
        font-size : 100px;
    }

    @media (min-width: 631px) and (max-width: 1440px) {
        font-size : 80px;
    }

    @media (max-width : 630px) {
        font-size : 40px;
    }
`

const FooterSubTitle = styled.p`
    font-size : 48px;
    color : #00FFB2;
    line-height : 65px;

    @media (max-width: 1440px) {
        font-size : 30px;
    }

    @media (min-width: 631px) and (max-width: 1440px) {
        font-size : 18px;
    }

    @media (max-width : 630px) {
        font-size : 21px;
        line-height : 28px;
        margin : 30px 0 0 0;
    }
`

const FooterText = styled.div`

`

const FooterButton = styled.div`
    margin : 0 0 0 100px;
    position : relative;
    cursor : pointer;

    @media (min-width: 1025px) and (max-width: 1440px) {
        margin : 0 0 0 0;

        & > svg {
            width : 250px;
            height : 250px;
        }
    }

    @media (min-width: 631px) and (max-width: 1024px) {
        margin : 10vh 0 0 0;
    }

    @media (max-width: 630px) {
        margin : 10vh 0 0 0;
        & > svg {
            width : 150px;
            height : 150px;
        }
    }
`

const BtnText = styled.p`
    position : absolute;
    top : 150px;
    left : 130px;
    font-size : 30px;
    line-height : 41px;
    margin : 0;

    @media (max-width: 1440px) {
        top : 90px;
        left : 80px;
        font-size : 24px;
        line-height : 30px;
    }

    @media (max-width: 630px) {
        top : 48px;
        left : 43px;
        font-size : 18px;
        line-height : 24px;
    }

`

const CopyRightSection = styled.p`
    text-align : center;
    font-size : 14px;
    color : white;
    position : absolute;
    bottom : 30px;
    width : 100%;

    @media (max-width: 630px) {
        font-size :10px
    }
`

export default Footer;