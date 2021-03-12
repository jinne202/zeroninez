import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import AppLayout from '../../components/layout/AppLayout';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Jump from 'react-reveal/Jump'
import Slide from 'react-reveal/Slide';

import billys from '../../../static/img/billys.png';
import billysSub1 from '../../../static/img/billysSub1.png';
import billysSub2 from '../../../static/img/billysSub2.png';
import billysSub3 from '../../../static/img/billysSub3.png';
import billysSub4 from '../../../static/img/billysSub4.png';
import billysSub5 from '../../../static/img/billysSub5.png';
import billysSub6 from '../../../static/img/billysSub6.png';
import billysSub7 from '../../../static/img/billysSub7.png';
import billysSub8 from '../../../static/img/billysSub8.png';
import tirareNext from '../../../static/img/tirareNext.jpeg';

const billysPage = () => {

    // const [header, setHeader] = useState(false);
    // const listenScrollEvent = (event) => {

    //     if (window.scrollY > 1000) {
    //         return setHeader(true);
    //     } else {
    //         return setHeader(false);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", listenScrollEvent);
    //     return () => window.removeEventListener("scroll", listenScrollEvent);
    // }, []);

    // console.log(header, "header");

    return (
        <>
            <AppLayout/>
            <ProjectWrapper>
            <ProjectHeaderWrapper>
                <img src={billys} alt="메인이미지"/>
            </ProjectHeaderWrapper>
            <ProjectBodyWrapper>
                <ProjectDesc>
                    <ProjectTitle>빌리스쿠키</ProjectTitle>
                    <ProjectExplain>
                        <ProejctSummaryCard>
                            <SummaryTitle>
                                CLIENT
                            </SummaryTitle>
                            <SummaryDesc>
                                클라이언트이름
                            </SummaryDesc>
                        </ProejctSummaryCard>
                        <ProejctSummaryCard>
                            <SummaryTitle>
                                RELEASE DATE
                            </SummaryTitle>
                            <SummaryDesc>
                                2020.0n
                            </SummaryDesc>
                        </ProejctSummaryCard>
                        <ProejctSummaryCard>
                            <SummaryTitle>
                                TYPE
                            </SummaryTitle>
                            <SummaryDesc>
                                패키지디자인
                            </SummaryDesc>
                        </ProejctSummaryCard>
                    </ProjectExplain>
                    <ProjectParagraph>
                    빌리스 쿠키는 ‘누구나 주인공이 되는 쿠키’ 라는 의미를 가지고 Billy 라는 60년대의 미국가족의 스토리를 가지고 구성되었습니다. 브랜드 일러스트는 당시 시대가 느껴지는 레트로한 감성의 스타일과 컨셉을 취하며, 일러스트를 통해 빌리의 가족이 쿠키와 함께하는 일상을 보여줍니다. 일러스트 곳곳에는 쌀쿠키와 함께 재료로 쓰인 식재료들이 곳곳에 숨어있어 일러스트를 감상하는 재미도 있습니다. "이제 당신이 이 쿠키의 주인공이 될 차례입니다." 사랑하는 사람, 가족들, 친구, 특별한 사람 또는 나 자신을 위해서 준비한 이 쿠키를 세상에서 하나뿐인 의미가 담긴 특별한 쿠키로 만들어보세요. 빌리의 쿠키는 언제나 건강하고 정성이 담긴 제품과 소비자 경험을 선사하고자 노력합니다.
                    </ProjectParagraph>
                </ProjectDesc>
                <SubContainer>
                <Fade bottom distance="100px">
                    <img src={billysSub1} alt="상세이미지1"/>
                </Fade>
                <Fade bottom distance="100px">
                    <img src={billysSub2} alt="상세이미지2"/>
                </Fade>
                <Fade bottom distance="100px">
                <img src={billysSub3} alt="상세이미지3"/>
                </Fade>
                <Fade bottom distance="100px">
                <img src={billysSub4} alt="상세이미지4"/>
                </Fade>
                <Fade bottom distance="100px">
                <img src={billysSub5} alt="상세이미지5"/>
                </Fade>
                <Fade bottom distance="100px">
                <img src={billysSub6} alt="상세이미지6"/>
                </Fade>
                <Fade bottom distance="100px">
                <img src={billysSub7} alt="상세이미지7"/>
                </Fade>
                <Fade bottom distance="100px">
                <img src={billysSub8} alt="상세이미지8"/>
                </Fade>
                </SubContainer>
                <NextProjectWrapper>
                    <NextProjectTitle>
                        <span>Next Project</span>
                        Mingle
                    </NextProjectTitle>
                    <NextProjectBlack>
                    </NextProjectBlack>
                    <img src={tirareNext} alt=""/>
                </NextProjectWrapper>
            </ProjectBodyWrapper>
            </ProjectWrapper>
        </>
    )
}

const ProjectWrapper = styled.div`
    margin : 0 0 0 0;
    position : relative;
    top : 0;
`

const ProjectHeaderWrapper = styled.div`
    width : 100%;
    position : fixed;
    height : 100vh;
    display : block;
    top : 0;
    z-index : 2;
    
    & > img {
        width : 100%;
    }
`

const ProjectBodyWrapper = styled.div`
    position : relative;
    width : 100%;
    z-index : 2;
    margin : 100vh 0 0 0;
    background-color : white;

    @media (max-width : 420px) {
        margin : 200px 0 0 0;
    }
`

const ProjectDesc = styled.div`
    width : 60%;
    margin : 0 20%;
    padding : 100px 0;


    @media (max-width : 420px) {
        width : 80%;
        margin : 0 10%;
    }
`

const ProjectTitle = styled.p`
    font-size : 36px;
    font-weight : 700;
    margin : 0 0 70px 0;
`

const ProjectExplain = styled.div`
    width : 100%;
    margin : 30px 0;
    display : flex;
    justify-content : space-between;

    @media (max-width : 420px) {
        display : block;
    }
`

const ProejctSummaryCard = styled.div`
    width : 32%;

    @media (max-width : 420px) {
        width : 100%;
    }
`

const SummaryTitle = styled.div`
    font-size : 16px;
    font-weight : 600;
    padding : 15px 0 5px;
`

const SummaryDesc = styled.div`
    font-size : 16px;
    padding : 5px 0 15px;
`

const ProjectParagraph = styled.div`
    font-size : 16px;
    line-height : 170%;
    margin : 50px 0 0 0;

    @media (max-width : 420px) {
        font-size : 12px;
        width : 100%;
    }
`

const SubContainer = styled.div`
    width : 100%;

    & > img {
        width : 100%;
        margin : 0;
        padding : 0;
        display : block;
    }
`

const NextProjectWrapper = styled.div`
    width : 100%;
    background-color : blue;
    height : 60vh;
    position : relative;
    cursor : pointer;

    & > img {
        width : 100%;
        height : 100%;
        object-fit  : cover;
    }

    @media (max-width : 420px) {
        height : 40vh;
    }
`

const NextProjectTitle = styled.div`
    position : absolute;
    left : 60px;
    color : white;
    z-index : 1;
    top : 22vh;
    font-size : 36px;
    font-weight : 700;

    & > span {
        font-size : 24px;
        display : block;
        margin : 0 0 10px 0;
    }

    @media (max-width : 420px) {
        font-size : 30px;
        top : 13vh;
        left : 35px;

        & > span {
            font-size : 16px;
        }
    }
`

const NextProjectBlack = styled.div`
    position : absolute;
    width : 100%;
    height : 60vh;
    background-color : black;
    transition: 0.2s ease-in all;
    -moz-transition: 0.2s ease-in all;
    -webkit-transition: 0.2s ease-in all;

    &:hover {
        opacity : 0.2;
    }

    @media (max-width : 420px) {
        height : 40vh;
    }
`

export default billysPage;