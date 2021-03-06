import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { dummyDataStory } from '../../../static/dummy/projectDummy';

const arrowIcon = <svg width="29" height="122" viewBox="0 0 29 122" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 0V25M14.5 87V121M14.5 121L1 107.5M14.5 121L28 107.5" stroke="black"/>
</svg>

const ProjectPage = () => {

    const [select, setSelect] = useState("최신순으로");

    const handleSelectedChange = (e) => {
        setSelect(e.target.value);
    }

    return (
    <ProjectPageWrapper>
        <MenuTitle>프로젝트</MenuTitle>
        <ProjectTitleSection>
            <ProjectTitle>모든 프로젝트 . 99</ProjectTitle>
            <RadioForm>
                <LabelWrapper>
                <RadioLabel>
                <RadioInput type="radio" name="array" value="최신순으로" checked={select === "최신순으로"} onChange={e => handleSelectedChange(e)}/>
                    <InputMark></InputMark>최신순으로
                </RadioLabel>
                </LabelWrapper>
                <LabelWrapperRight>
                <RadioLabel>
                <RadioInput type="radio" name="array" value="가나다순으로" checked={select === "가나다순으로"} onChange={e => handleSelectedChange(e)}/>
                    <InputMark></InputMark>가나다순으로
                </RadioLabel>
                </LabelWrapperRight>
            </RadioForm>
        </ProjectTitleSection>
        <CardGrid>
            {dummyDataStory.map((c) => {
                return (
                <ProjectCard key={c.index} posting={c} />
                );
            })}
        </CardGrid>
        <ShowButtonWrapper>
            <ShowMore>
                <IconWrapper>
                    {arrowIcon}
                </IconWrapper>
                <ShowMoreText>더보기</ShowMoreText>
            </ShowMore>
        </ShowButtonWrapper>
    </ProjectPageWrapper>
    )
}

const ProjectPageWrapper = styled.div`
    margin : 0 0 1400px 0;
    z-index : 2;
    padding : 0 0 300px 0;
    position : relative;
    background-color : white;
    font-family: 'Noto Sans KR', sans-serif;
`

const ProjectTitleSection = styled.div`
    padding : 293px 8% 50px;
    display : flex;
    justify-content : space-between;

    @media (max-width : 420px) {
        display : block;
    }
`

const ProjectTitle = styled.div`
    font-size : 18px;
`

const RadioForm = styled.form`
    @media (max-width : 420px) {
        margin : 20px 0 0 0;
    }
`

const LabelWrapper = styled.div`
    display : inline-block;
    margin : 0 0 0 0;
`

const LabelWrapperRight = styled(LabelWrapper)`
    margin : 0 0 0 20px;
`

const RadioLabel = styled.label`
    display: flex;
    cursor: pointer;
    position: relative;
    font-size : 18px;
`

const InputMark = styled.span`
    display: inline-block;
    position: relative;
    border: 1px solid #000000;
    width: 18px;
    height: 18px;
    left: 0;
    border-radius: 50%;
    margin : 6px 13px 0 0;
    vertical-align: middle;
    &::after {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border-radius: 50%;
        background-color: #000000;
        opacity: 0;
        left: 50%;
        top: 50%;
        position: absolute;
        transition: all 110ms;
    }
` 

const RadioInput = styled.input`
    position: absolute;
    visibility: hidden;
    display: none;
    &:checked + ${InputMark} {
    &::after {
        width: 10px;
        height: 10px;
        opacity: 1;
        left: 3px;
        top: 3px;
    }
    }
`


const CardGrid = styled.div`
    width : 100%;
    padding : 0 8%;
    display : inline-grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
    row-gap : 30px;
    @media (min-width: 633px) and (max-width: 962px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 633px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const ShowButtonWrapper = styled.div`
    width : 100%;
    text-align : center;
`

const ShowMore = styled.div`
    margin : 100px auto 0;
    position : relative;
    display : inline-block;
    width : 200px;
`

const IconWrapper = styled.div`
    display : block;
    width : 31px;
    margin : 0 auto;
`

const ShowMoreText = styled.button`
    margin : 0 auto;
    position : absolute;
    top : 40px;
    font-size : 18px;
    width : 200px;
    text-align : center;
    display : block;
    background-color : white;
    border : none;
    outline : none;
    padding : 10px 0;
    cursor : pointer;
`

const MenuTitle = styled.p`
    font-size : 24px;
    text-align : center;
    font-weight : 600;
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

export default ProjectPage;