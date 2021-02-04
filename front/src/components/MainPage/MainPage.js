import React from 'react';
import styled from 'styled-components';
import SNSFooter from '../layout/SNSFooter';

const MainPage = () => {
    return (
        <MainPageWrapper>
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
            </ThirdCardListWrapper>
            <ThirdParagraph>
            제로나인즈는 더 나은 세상을 만들기 위해 노력하는 수많은 사람들과 함께 성장해요.<br/>소셜섹터 실무자의 역량을 높이고, 사회적 가치를 확대하는 자체 플랫폼을 기획하고 운영하고 있습니다.
            </ThirdParagraph>
        </ThirdSection>
        <FourthSection>
            <FourthWrapper>
                <FourthTitle>
                    제로나인즈의 라이프스타일 . <span>Lifestyle blog</span>
                </FourthTitle>
                <FourthParagraph>
                무한한 가능성의 제로다움. 맺음과 연결의 나인다움. 채움의 미학.<br/>모든 제로나인즈 맴버들은 오너쉽과 겸손, 자유와 책임,<br/>열정과 재미라는 핵심 가치를 기반으로 일합니다.<br/>함께 성장하고 동시에 모두가 재미있게 일하는 조직이 되기 위해<br/>다양한 시도와 문화를 이어가고 있습니다.
                </FourthParagraph>
                <FourthBtn>
                    → 과연 그럴까? 제.나.즈.다움.
                </FourthBtn>
            </FourthWrapper>
        </FourthSection>
        <FifthSection>
            <FifthTitle>
                제로나인즈의 시선 . <span>Insight blog</span>
            </FifthTitle>
            <FifthSectionWrapper>
            <FifthParagraph>최신의 소식과 제로나인즈의 시각으로 인사이트를 제공합니다.</FifthParagraph>
            <FifthBtn>
                → 더 많이 살펴볼까?
            </FifthBtn>
            </FifthSectionWrapper>
            <FifthSectionCardWrapper>
                <FifthSectonCard></FifthSectonCard>
                <FifthSectonCard></FifthSectonCard>
                <FifthSectonCard></FifthSectonCard>
            </FifthSectionCardWrapper>
        </FifthSection>
        <SixthSection>
            <SixthTitle>
                혁신도시 세종 - 빅파워 서울에서 작업합니다.
            </SixthTitle>
            <SixthSectionCardWrapper>
                <SixthSectionCard>
                    <SixthCardText>
                    SEOJONG OFFICE (본사) <br/> 세종 조치원읍 세종로2639, U동 410호<br/>0507-1370-9590
                    </SixthCardText>
                    <SixthMapBtn>지도보기</SixthMapBtn>
                </SixthSectionCard>
                <SixthSectionCard>
                    <SixthCardText>
                        SEOUl OFFICE <br/>서울 마포구 잔다리로 28, 7f<br/>02-1234-4567
                    </SixthCardText>
                    <SixthMapBtn>지도보기</SixthMapBtn>
                </SixthSectionCard>
                <SixthSectionCard>
                <SixthCardText>
                SEOUL BRANCH<br/>서울 광진구 군자로70, 4f<br/>02-1234-4567
                </SixthCardText>
                <SixthMapBtn>지도보기</SixthMapBtn>
                </SixthSectionCard>
            </SixthSectionCardWrapper>
        </SixthSection>
        <SNSFooter/>
        </MainPageWrapper>
    )
}

const MainPageWrapper = styled.div`
    height : auto;
    z-index : 2;
    position : relative;
    background-color : white;
    margin : 0 0 1000px 0;
`

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
    flex-wrap: wrap;
    gap : 30px;
    justify-content : space-between;
`

const CardWrapper = styled.div`
    margin : 0 0 70px 0;
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
    margin : 199px 245px 186px;
`

const ThirdTitle = styled.p`
    font-size : 48px;
    line-height : 65px;
    font-weight : 600;
`

const ThirdCardListWrapper = styled.div`
    margin : 100px 0 0 0;
    display : flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content : space-between;
`

const CommunityCard = styled.div`
    width : 24%;
    min-width : 240px;
    box-sizing : border-box;
    height : 267px;
    display : block;
    position : relative;
    background-color : #eee;
    margin : 0 0 30px 0;
    
    @media (min-width: 990px) and (max-width: 1490px) {
        width : 48%;
    }

    @media (max-width: 989px) {
        width : 100%;
    }
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

const FourthSection = styled.div`
    background-color : #eee;
    height : 980px;
`

const FourthWrapper = styled.div`
    margin : 0 245px;
    padding : 332px 0 0 0;
`

const FourthTitle = styled.p`
    font-size : 48px;
    font-weight : 600;

    & > span {
        font-weight : 200;
    }
`

const FourthParagraph = styled.p`
    font-size : 24px;
    line-height : 40px;
    margin : 83px 0 0 0;
`

const FourthBtn = styled.div`
    color : #3503FF;
    font-size : 18px;
    font-weight : 600;
    cursor : pointer;
    margin : 21px 0 0 0;
`

const FifthSection = styled.div`
    margin : 0 245px;
`

const FifthSectionWrapper = styled.div`
    display : flex;
    justify-content : space-between;
    margin : 56px 0 0 0;
`

const FifthTitle = styled.p`
    font-size : 48px;
    font-weight : 600;
    margin : 247px 0 0 0;

    & > span {
        font-weight : 200;
    }
`

const FifthParagraph = styled.p`
    font-size : 24px;
`

const FifthBtn = styled.div`
    color : #3503FF;
    font-size : 18px;
    font-weight : 600;
    cursor : pointer;
`

const FifthSectionCardWrapper = styled.div`
    display : flex;
    justify-content : space-between;
    margin : 110px 0 0 0;
    flex-wrap: wrap;
    gap: 12px;
`

const FifthSectonCard = styled.div`
    width : 32%;
    height : 372px;
    background-color : #eee;
    margin : 0 0 20px 0;

    @media (min-width: 990px) and (max-width: 1490px) {
        width : 48%;
    }
`

const SixthSection = styled.div`
    margin : 0 245px 260px;
`

const SixthTitle = styled.p`
    margin : 280px 0 0 0;
    font-size : 48px;
    font-weight : 600;
`

const SixthSectionCardWrapper = styled.div`
    display : flex;
    justify-content : space-between;
    margin : 90px 0 0 0;
    flex-wrap: wrap;
    gap: 12px;
`

const SixthSectionCard = styled.div`
    width : 32%;
    height : 372px;
    background-color : #eee;
    margin : 0 0 20px 0;
    position : relative;

    @media (min-width: 990px) and (max-width: 1490px) {
        width : 48%;
    }
`

const SixthCardText = styled.p`
    position : absolute;
    font-weight : 600;
    font-size : 24px;
    line-height : 140%;
    top : 30px;
    left : 25px;
`

const SixthMapBtn = styled.p`
    cursor : pointer;
    position : absolute;
    top : 195px;
    left : 25px;
    font-size : 24px;
    font-weight : 600;
`

export default MainPage;