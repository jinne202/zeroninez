import React from "react";
import Link from 'next/link';
import styled from "styled-components";

const ProjectCard = ({ posting }) => {
    return (
            <StoryCardWrapper>
                <Link href={{ pathname: 'posting/' + posting.title }}>
                <StoryCardUI>
                    <StoryCardImgWrapper>
                        <img src={posting.coverImage}/>
                    </StoryCardImgWrapper>
                </StoryCardUI>
                </Link>
                <StoryInfo>
                    <StoryTitle>
                        <UserName>{posting.postTitle}</UserName>
                    </StoryTitle>
                </StoryInfo>
            </StoryCardWrapper>
    )
}

const StoryCardUI = styled.div`
    position: relative;
    max-width : 650px;
    min-width : 250px;
	height: 0;
	overflow: hidden;
	padding-bottom: 75%;
`

const StoryCardWrapper = styled.div`
`

const StoryCardImgWrapper = styled.div`
    cursor : pointer;
    position: absolute;
    overflow : hidden;
    width : 100%;
    height : 100%;
    display : block;
	top: 0;
	left: 0;
    & > img {
        width : 100%;
        height : 100%;
        object-fit: cover;
    }
    & > div {
        width : 100%;
        height : 100%;
    }
`
const StoryInfo = styled.div`
`

const StoryTitle = styled.div`
    display : flex;
    padding : 10px 0 0 0;
    cursor : pointer;
`

const UserName = styled.p`
    font-size : 18px;
    padding : 3px 0;
`

export default ProjectCard;