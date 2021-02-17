import React from 'react';
import styled from 'styled-components';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const ProjectSubmitPage = () => {
    return (
        <ProjectSubmitWrapper>
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

    
    @media (min-width: 1280px) and (max-width: 1600px) {
        padding : 170px 0 140px 0;
    }
`

const ProjectSubmitInnerContainer = styled.div`
    margin : 0 12%;
`

export default ProjectSubmitPage;