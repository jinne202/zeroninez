import React from 'react';
import styled from 'styled-components';

import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const SNSFooter = () => {
    return (
        <SNSFooterWrapper>
            <SNSWrapper>
                <SNSList>
                    <AiFillFacebook/>
                    <p>페이스북</p>
                </SNSList>
                <SNSList>
                    <AiFillInstagram/>
                    <p>인스타그램</p>
                </SNSList>
                <SNSList>
                    <AiFillYoutube/>
                    <p>유튜브</p>
                </SNSList>
            </SNSWrapper>
            <ComponyInfo>
                <ul>
                    <li>회사소개서</li>
                    <li>채용소식</li>
                    <li>개인정보 처리방침</li>
                    <li>zeronienz_team@naver.com</li>
                </ul>
                <CompanyMent>
                    <p>
                        덕 - 업 - 일 - 취 - 월 - 장
                    </p>
                    <p>
                        열정을 담아 거듭나는 모든 크리에이터를 응원합니다.
                    </p>
                </CompanyMent>
            </ComponyInfo>
        </SNSFooterWrapper>
    )
}

const SNSFooterWrapper = styled.div`
    margin : 0 12%;
`

const SNSWrapper = styled.div`
    display : flex;

    @media (max-width: 630px) {
        display : block;
        margin : 0 0 40px 0;
    }
`

const SNSList = styled.div`
    display : flex;
    margin : 0 40px 0 0;
    font-size : 30px;
    color : black;

    @media (max-width: 630px) {
        font-size : 24px;
        margin : 0 0 20px 0;
    }

    & > p {
        font-size : 18px;
        margin : 0 0 0 10px;

        @media (max-width: 630px) {
            font-size : 14px;
        }
    }
`

const ComponyInfo = styled.div`
    display : flex;
    justify-content : space-between;
    margin : 30px 0 0 0;
    padding : 0 0 60px 0;

    & > ul {
        display : flex;

        @media (max-width: 800px) {
            display : block;
        }
    }

    & > ul > li {
        font-size : 18px;
        margin : 0 25px 0 0;
        font-weight : 600;

        @media (max-width: 1600px) {
            font-size : 14px;
        }
    }

    & > ul > li:last-child {
        font-weight : 500;
    }

    @media (max-width: 1600px) {
        display : block;    
    }
`

const CompanyMent = styled.div`
    display : flex;
    font-size : 18px;
    
    @media (max-width: 1600px) {
        font-size : 14px;
        display : block;
        margin : 30px 0 0 0;
    }

     & > p {
         margin : 0 0 0 25px;

         @media (max-width: 1600px) {
            margin : 5px 0 0 0;
        }
     }
`

export default SNSFooter;