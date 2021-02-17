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
        <ProjectTitleSection>
            <ProjectTitle>모든 프로젝트 . 99</ProjectTitle>
            <RadioForm>
                <LabelWrapper>
                <RadioLabel>
                <RadioInput type="radio" name="array" value="최신순으로" checked={select === "최신순으로"} onChange={e => handleSelectedChange(e)}/>
                    <InputMark></InputMark>최신순으로
                </RadioLabel>
                </LabelWrapper>
                <LabelWrapper>
                <RadioLabel>
                <RadioInput type="radio" name="array" value="가나다순으로" checked={select === "가나다순으로"} onChange={e => handleSelectedChange(e)}/>
                    <InputMark></InputMark>가나다순으로
                </RadioLabel>
                </LabelWrapper>
            </RadioForm>
        </ProjectTitleSection>
        <CardGrid>
            {dummyDataStory.map((c) => {
                return (
                <ProjectCard key={c.index} posting={c} />
                );
            })}
        </CardGrid>
        <ShowMore>
            {arrowIcon}
            <ShowMoreText>더보기</ShowMoreText>
        </ShowMore>
    </ProjectPageWrapper>
    )
}

const ProjectPageWrapper = styled.div`
    margin : 0 0 1000px 0;
    z-index : 2;
    padding : 0 0 300px 0;
    position : relative;
    background-color : white;
`

const ProjectTitleSection = styled.div`
    padding : 293px 12% 50px;
    display : flex;
    justify-content : space-between;
`

const ProjectTitle = styled.div`
    font-size : 18px;
`

const RadioForm = styled.form`
`

const LabelWrapper = styled.div`
    display : inline-block;
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
    padding : 0 12%;
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

const ShowMore = styled.div`
    margin : 100px 48.5% 0;
    position : relative;
    width : 3%;
`

const ShowMoreText = styled.p`
    position : absolute;
    top : 40px;
    left : -11px;
    font-size : 18px;
`

export default ProjectPage;