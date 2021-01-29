import React from 'react';
import styled from 'styled-components';

const MainPage = () => {
    return (
        <>
        <MainSection>
            <TextWrapper>
                <MainText>
                    덕 - 업 - 일 - 취 - 월 - 장
                </MainText>
                <SubText>
                    열정을 담아 거듭나는 모든 <br/>크리에이터를 응원합니다.
                </SubText>
                <NumberAnimation>
                    0 - 9
                </NumberAnimation>
            </TextWrapper>
        </MainSection>
        <SecondSection>
            <SecondTitle>Turn your creativity <br/>into reality</SecondTitle>
            <SecondParagraph>
            제로나인즈는 사회적 가치를 추구하는 프로젝트와 크리에이터를 위한 최적의 디자인, 디지털 솔루션을 만들고 있습니다.<br/>사용자경험디자인, 서비스디자인, 브랜드컨설팅, 정보시각디자인, 영상편집, 문화상품제작, 웹사이트제작, 어플리케이션개발, 시스템 운영<br/>등의 서비스를 제공하고 있습니다.
            </SecondParagraph>
            <ListWrapper>
                <CardWrapper>
                    <CardTitle>디자인 컨설팅</CardTitle>
                    <CardContents>
                        <ul>
                            <li>• 디자인사고에 기반한 강력하고 창의적인 해결안</li>
                            <li>• 컨버전스 환경에서 최적의 디지털 미디어 디자인안</li>
                            <li>• 소셜섹터에 꼭 필요한 전략적 디자인</li>
                        </ul>
                        <ViewBtn>→ 포트폴리오 보기</ViewBtn>
                    </CardContents>
                </CardWrapper>
                <CardWrapper>
                    <CardTitle>브랜딩 & 컨텐츠개발</CardTitle>
                    <CardContents>
                        <ul>
                            <li>• 조직의 철학과 가치에 기반한 브랜드 정체성 정립</li>
                            <li>• 커뮤니케이션 전략을 포함한 포괄적 브랜딩</li>
                            <li>• 비주얼 요소 구성과 각종 인쇄물 기획 및 디자인</li>
                        </ul>
                        <ViewBtn>→ 포트폴리오 보기</ViewBtn>
                    </CardContents>
                </CardWrapper>
                <CardWrapper>
                    <CardTitle>디자인구현 기술</CardTitle>
                    <CardContents>
                        <ul>
                            <li>• 고객의 목적과 목표에 딱 맞는 기술설계 및 제작</li>
                            <li>• 웹사이트, 어플리케이션 구현개발</li>
                            <li>• 데이터, 서버사이드 최적화 구현</li>
                        </ul>
                        <ViewBtn>→ 포트폴리오 보기</ViewBtn>
                    </CardContents>
                </CardWrapper>
            </ListWrapper>
        </SecondSection>
        <ThirdSection>
            <ThirdTitle>함께 성장을 꿈꾸는<br/>크리에이터를 위한 커뮤니티</ThirdTitle>
            <ThirdCardListWrapper>
                <CommunityCard>
                    <CommunityTitle>hi-holix.com<span>holixboom community</span></CommunityTitle>
                </CommunityCard>
                <CommunityCard>
                    <CommunityTitle>holixstore.com<span>eCommerce</span></CommunityTitle>
                </CommunityCard>
                <CommunityCard>
                    <CommunityTitle>holixrounge.com<span>Workshop</span></CommunityTitle>
                </CommunityCard>
                <CommunityCard>
                    <CommunityTitle>mingle.com<span>SNG Based PR Platform</span></CommunityTitle>
                </CommunityCard>
                <CommunityCard>
                    <CommunityTitle>cobalt social sector<span>Local-Culture Dev.</span></CommunityTitle>
                </CommunityCard>
            </ThirdCardListWrapper>
            <ThirdParagraph>
            제로나인즈는 더 나은 세상을 만들기 위해 노력하는 수많은 사람들과 함께 성장해요.<br/>소셜섹터 실무자의 역량을 높이고, 사회적 가치를 확대하는 자체 플랫폼을 기획하고 운영하고 있습니다.
            </ThirdParagraph>
        </ThirdSection>
        </>
    )
}

const MainSection = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    width : 100%;
    height : 100vh;
`

const TextWrapper = styled.div`
    margin : 0 0 0 245px;
    padding : 322px 0 0 0;
`

const MainText = styled.p`
    font-size : 48px;
    font-weight : 600;
    line-height : 65px;
    margin : 0 0 38px 0;
`

const SubText = styled.p`
    font-size : 48px;
    font-weight : 600;
    line-height : 65px;
`

const NumberAnimation = styled.div`
    font-size : 24px;
    font-weight : 700;
    margin : 146px 0 0 0;
`

const SecondSection = styled.div`
    margin : 0 245px;
    padding : 123px 0 0 0;
`

const SecondTitle = styled.p`
    font-family: 'Rajdhani', sans-serif;
    font-size : 64px;
    font-weight : 600;
    line-height : 107%;
`

const SecondParagraph = styled.p`
    font-size : 24px;
    font-weight : 700;
    margin : 117px 0 0 0;
    line-height : 35px;
    letter-spacing : -2%;
`

const ListWrapper = styled.div`
    margin : 148px 0 0 0;
    display : flex;
    justify-content : space-between;
`

const CardWrapper = styled.div`
`

const CardTitle = styled.p`
    font-size : 36px;
    font-weight : 600;
`

const CardContents = styled.div`
    margin : 53px 0 0 0;

    & > ul > li {
        font-size : 18px;
    }
`

const ViewBtn = styled.div`
    font-size : 18px;
    margin : 50px 0 0 0;
    cursor : pointer;
`

const ThirdSection = styled.div`
    margin : 269px 245px 0;
`

const ThirdTitle = styled.p`
    font-size : 48px;
    line-height : 65px;
    font-weight : 600;
`

const ThirdCardListWrapper = styled.div`
    margin : 100px 0 0 0;
    display : flex;
    justify-content : space-between;
`

const CommunityCard = styled.div`
    width : 263px;
    height : 263px;
    display : block;
    position : relative;
    background-color : #eee;
`

const CommunityTitle = styled.p`
    position : absolute;
    top : 18px;
    left : 18px;
    font-size : 24px;
    font-weight : 500;
    color : #00FFB2;

    & > span {
        display : block;
        font-size : 18px;
        color : #000000;
        font-weight : 500;
    }
`

const ThirdParagraph = styled.p`
    font-size : 24px;
    font-weight : 600;
    line-height : 45px;;
    margin : 119px 0 0 0;
`

export default MainPage;