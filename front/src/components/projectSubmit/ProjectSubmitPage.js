import React from 'react';
import styled from 'styled-components';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const ProjectSubmitPage = () => {
    return (
        <ProjectSubmitWrapper>
            <MenuTitle>프로젝트 의뢰하기</MenuTitle>
            <ProjectSubmitInnerContainer>
            <LeftSide/>
            <RightSide/>
            </ProjectSubmitInnerContainer>
        </ProjectSubmitWrapper>
    )
}

const ProjectSubmitWrapper = styled.div`
    padding : 300px 0 300px 0;
    position : relative;
    z-index : 2;
    overflow : none;
    background-color : #2e2e2e;

    
    @media (min-width: 1025px) and (max-width: 1600px) {
        padding : 170px 0 140px 0;
    }

    @media (min-width: 421px) and (max-width: 1024px) {
        padding : 170px 0 140px 0;
    }

    @media (max-width : 420px) {
        padding : 150px 0 0 0;
    }
`

const ProjectSubmitInnerContainer = styled.div`
    margin : 0 12%;
    postion :relative

    @media (min-width: 421px) and (max-width: 1024px) {
        margin : 0 8%;
    }

    @media (max-width : 420px) {
        margin : 0 8%;
        display : flex;
        flex-direction: column-reverse;
        flex-wrap : wrap;
    }
`

const MenuTitle = styled.p`
    font-size : 24px;
    text-align : center;
    font-weight : 600;
    color : white;
    position : absolute;
    width : 100%;
    top : 70px;

    @media (min-width: 1025px) and (max-width: 1600px) {
        font-size : 18px;
    }

    @media (min-width: 631px) and (max-width: 1024px) {
        font-size : 12px;
    }

    @media (max-width: 630px) {
        font-size : 0px;
    }
`

export default ProjectSubmitPage;