import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import swal from 'sweetalert';
import Checkbox from './Checkbox';
import PrivacyPolicy from '../layout/PrivacyPolicy';
import CheckboxSquare from './CheckboxSquare';
import { Consult } from './Consult';
import { Visual } from './Visual';
import { Dev } from './Dev';
import { Edu } from './Edu';
import { Budget } from './Budget';
import useInput from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { PROJECT_SUBMIT_REQUEST } from '../../reducers/projectSubmitReducer';

import { AiOutlinePaperClip } from "react-icons/ai";

const RightSide = () => {
    const dispatch = useDispatch();

    const { isProjectSubmit, projectSubmitError } = useSelector((state) => state.projectSubmitReducer);

    const [isCheck, setIsCheck] = useState([]);
    const [consultList, setConsultList] = useState([]);
    const [visualList, setVisualList] = useState([]);
    const [devList, setDevList] = useState([]);
    const [eduList, setEduList] = useState([]);

    const [isCheckBudget, setIsCheckBudget] = useState([]);
    const [budgetList, setBudgetList] = useState([]);

    const [file, setFile] = useState(null);

    const [characterCount, setCharacterCount] = useState(0);

    const [companyCheck, setCompanyCheck] = useState(false);
    const [individualCheck, setIndividualCheck] = useState(false);

    const [projectExplain, setProjectExplain] = useState('');
    const [projectFile, setProjectFile] = useState('');

    const [teamInfo, handleTeamInfo] = useInput('');
    const [positionInfo, handlePositionInfo] = useInput('');
    const [emailInfo, handleEmailInfo] = useInput('');

    const onChangeCompnay = (e) => {
        setCompanyCheck(e.target.checked);
    };

    const onChangeIndividual = (e) => {
        setIndividualCheck(e.target.checked);
    }

    // const handleIndividualClick = (e) => {
    //     alert("alert");
    // }

    useEffect(() => {
        setConsultList(Consult);
    }, [consultList]);

    useEffect(() => {
        setVisualList(Visual);
    }, [visualList]);

    useEffect(() => {
        setDevList(Dev);
    }, [devList]);

    useEffect(() => {
        setEduList(Edu);
    }, [eduList]);

    useEffect(() => {
        setBudgetList(Budget);
    }, [budgetList]);

    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
          setIsCheck(isCheck.filter(item => item !== id));
        }
    };

    const handleClickBudget = e => {
        const { id, checked } = e.target;
        setIsCheckBudget([id]);
        if (!checked) {
          setIsCheckBudget(isCheckBudget.filter(item => item !== id));
        }
    };

    const consult = consultList.map(({ id, name }) => {
        return (
          <>
            <Checkbox
              key={id}
              type="checkbox"
              name={name}
              id={id}
              handleClick={handleClick}
              isChecked={isCheck.includes(id)}
            />
          </>
        );
    });

    const visual = visualList.map(({ id, name }) => {
        return (
          <>
            <Checkbox
              key={id}
              type="checkbox"
              name={name}
              id={id}
              handleClick={handleClick}
              isChecked={isCheck.includes(id)}
            />
          </>
        );
    });

    const dev = devList.map(({ id, name }) => {
        return (
          <>
            <Checkbox
              key={id}
              type="checkbox"
              name={name}
              id={id}
              handleClick={handleClick}
              isChecked={isCheck.includes(id)}
            />
          </>
        );
    });

    const edu = eduList.map(({ id, name }) => {
        return (
          <>
            <Checkbox
              key={id}
              type="checkbox"
              name={name}
              id={id}
              handleClick={handleClick}
              isChecked={isCheck.includes(id)}
            />
          </>
        );
    });

    const budget = budgetList.map(({ id, name }) => {
        return (
          <div>
            <Checkbox
              key={id}
              type="radio"
              name={name}
              id={id}
              handleClick={handleClickBudget}
              isChecked={isCheckBudget.includes(id)}
            />
          </div>
        );
    });

    const handleCharacterCount = useCallback((e) => {
        setCharacterCount(e.target.value.length)
        setProjectExplain(e.target.value);
    }, []);

    const handleFileUpload = useCallback((e) => {
        setFile(e.target.files[0]);
        document.getElementById('fileName').innerHTML = e.target.files[0].name;
    }, []);

    const maxLimit = characterCount >= 300;

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (isCheck.length < 1) {
            return;
        }
        if (!individualCheck) {
            return ;
        }
        if (isCheckBudget.length < 1) {
            return ;
        }
        return dispatch({
            type : PROJECT_SUBMIT_REQUEST,
            data : {
                isCheck,
                projectExplain,
                isCheckBudget,
                teamInfo,
                companyCheck,
                positionInfo,
                emailInfo,
                individualCheck,
            },
            file : file
        });
    }, [isCheck, projectExplain, teamInfo, companyCheck, positionInfo, emailInfo, individualCheck, isCheckBudget, file]);

    useEffect(() => {
        if (isProjectSubmit) {
            swal("", "프로젝트 검토 후 연락드리겠습니다", "success");
        }
    }, [isProjectSubmit]);

    useEffect(() => {
        if (projectSubmitError) {
            swal("", "제안서를 다시 확인해주세요", "error")
        }
    }, [projectSubmitError]);

    return (
        <>
        <RightSideWrapper>
            <FormWrapper onSubmit={handleSubmit}>
                <PartOne>
                    <Title>프로젝트의 분야를 선택해 주세요. <span>* 최소한 1개 이상 선택해 주세요. 중복선택도 가능합니다.</span></Title>
                    <CheckboxWrapper>
                        <CheckContainer>
                            <SubTitle>Consult.</SubTitle>
                            <SubContainer>
                                {consult}
                            </SubContainer>
                        </CheckContainer>
                        <CheckContainer>
                            <SubTitle>Visual.</SubTitle>
                            <SubContainer>
                                {visual}
                            </SubContainer>
                        </CheckContainer>
                        <CheckContainer>
                            <SubTitle>Dev.</SubTitle>
                            <SubContainer>
                                {dev}
                            </SubContainer>
                        </CheckContainer>
                        <CheckContainer>
                            <SubTitle>Edu.</SubTitle>
                            <SubContainer>
                                {edu}
                            </SubContainer>
                        </CheckContainer>
                    </CheckboxWrapper>
                </PartOne>
                <PartTwo>
                    <PartTwoTextWrapper>
                        <Title>프로젝트에 대해 간단히 설명해주세요.</Title>
                        <CountText>{maxLimit ? <CountLimit>{characterCount}</CountLimit> : <CountNotLimit>{characterCount}</CountNotLimit>} / 300자</CountText>
                    </PartTwoTextWrapper>
                    <TextArea type="text" maxLength="300" value={projectExplain} onChange={handleCharacterCount} required></TextArea>
                </PartTwo>
                <PartThree>
                    <PartThreeTextWrapper>
                    <PartThreeTitle id = "fileName">프로젝트에 대한 <br/> 자료를 보내주세요.</PartThreeTitle>
                    <FileLabel>
                        <FileIcon><AiOutlinePaperClip/></FileIcon>
                        <FileInput type = "file" onChange={handleFileUpload}/>
                    </FileLabel>
                    </PartThreeTextWrapper>
                    <PartThreeDesc>* 100mb이상의 내용은 zeroninez_team@naver.com 으로 메일링해주세요.</PartThreeDesc>
                </PartThree>
                <PartFour>
                    <Title>예산은 어떻게 되나요. (단위 : 만원)</Title>
                    <BudgetCheckbox>{budget}</BudgetCheckbox>
                </PartFour>
                <PartFive>
                    <Title>연락을 위한 정보를 남겨주세요.<span>* 프로젝트검토후 2일이내에 연락드리도록 하겠습니다.</span></Title>
                    <InputContainer>
                        <InputWrapper>
                            <InputTitle>팀 . 조직 or 소속명</InputTitle>
                            <PartFiveInput placeholder="ex. 제로나인즈" value={teamInfo} onChange={handleTeamInfo} required></PartFiveInput>
                        </InputWrapper>
                        <SquareCheckboxWrapper>
                            <CheckboxSquare onChange={onChangeCompnay} checked={companyCheck}>사회적협동조합 , (예비)사회적기업, 소셜벤처 및 사회적가치를 실현하는 조직입니다.</CheckboxSquare>
                        </SquareCheckboxWrapper>
                        <InputWrapperMargin>
                            <InputTitle>담당자 성명과 직함</InputTitle>
                            <PartFiveInput placeholder="ex. 김이박_매니저" value={positionInfo} onChange={handlePositionInfo} required></PartFiveInput>
                        </InputWrapperMargin>
                        <InputWrapperMargin>
                            <InputTitle>이메일 . 전화번호</InputTitle>
                            <PartFiveInput placeholder="ex. abc@xyz.com_029871234" value={emailInfo} onChange={handleEmailInfo} required></PartFiveInput>
                        </InputWrapperMargin>
                        <IndividaulWrapper>
                        <SquareCheckboxWrapper>
                        <CheckboxSquare onChange={onChangeIndividual} checked={individualCheck}><Link href="/test"><IndividualBtn>개인정보 수집, 이용및 처리위탁</IndividualBtn></Link>에 동의합니다. (필수)</CheckboxSquare>
                        </SquareCheckboxWrapper>
                        </IndividaulWrapper>
                    </InputContainer>
                </PartFive>
                <LastDesc>
                파트너로서 제로나인즈를 고려해주셔서 감사합니다.<br/>프로젝트가 성공할 수 있도록 함께 고민해드리겠습니다.<br/>고맙습니다.
                </LastDesc>
                <SubmitBtn type="submit">
                    문의하기
                </SubmitBtn>
            </FormWrapper>
        </RightSideWrapper>
        </>
    )
}

const RightSideWrapper = styled.div`
    width : 100%;
    display : flex;
    justify-content : flex-end;
    padding : 0;
    color : white;
    font-family: 'Noto Sans KR', sans-serif;

    @media (max-width : 420px) {
        position : relative;
        width : 100%;
    }
`

const FormWrapper = styled.form`
    width : 68%;

    @media (max-width : 420px) {
        width : 100%;
    }
`

const PartOne = styled.div`
`

const Title = styled.p`
    font-size : 18px;
    color : #00FFB2;
    margin : 0 0 0 30px;

    & > span {
        font-size : 12px;
        margin : 0 0 0 15px;
        color : #0094FF;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        & > span {
            display : block;
            margin : 0;
            font-size : 10px;
        }
    }

    @media (min-width: 421px) and (max-width: 768px) {
        font-size : 14px;
        & > span {
            display : block;
            margin : 0;
            font-size : 10px;
        }
    }

    @media (max-width : 420px) {
        font-size : 16px;
        margin : 0 0 0 0;

        & > span {
            display : block;
            margin : 0;
            font-size : 10px;
        }
    }
`

const CheckboxWrapper = styled.div`
    display : flex;
    justify-content : space-between;

    @media (max-width : 420px) {
        display : block;
    }
`

const CheckContainer = styled.div`
`

const SubTitle = styled.p`
    margin : 40px 0 40px 30px;
    color : #585858;

    @media (min-width: 421px) and (max-width: 768px) {
        font-size : 11px;
    }

    @media (max-width : 420px) {
        margin : 40px 0 40px 0;
    }
`

const SubContainer = styled.p`

    @media (max-width : 420px) {
        display : flex;
        flex-wrap: wrap;
        width : 100%;
        margin : 0 0 0 0;
    }
`

const PartTwo = styled.div`
    margin : 120px 0 0 0;
    width : 100%;
`

const PartTwoTextWrapper = styled.div`
    display : flex;
    justify-content : space-between;
    margin : 0 0 20px 0;


    @media (max-width : 420px) {
        display : block;
    }
`

const TextArea = styled.textarea`
    font-family: 'Noto Sans KR', sans-serif;
    margin : 0 0 0 30px;
    resize : none;
    width : calc(100% - 30px);
    height : 150px;
    background-color : #262626;
    border : none;
    outline : none;
    padding : 20px;
    color : white;
    font-size : 18px;
    line-height : 140%;

    @media (min-width: 421px) and (max-width: 1600px) {
        font-size : 14px;
    }

    @media (max-width : 420px) {
        margin : 0 0 0 0;
        width : 100%;
        font-size : 14px;
    }
`

const CountText = styled.div`
    font-size : 14px;
    color : #AEAEAE;
    padding : 2px 0 0 0;
    display : flex;

    @media (max-width : 420px) {
        font-size : 10px;
    }
`

const CountNotLimit = styled.p`
    margin : 0 6px 0 0;
`

const CountLimit = styled(CountNotLimit)`
    color : #FF5503;
`

const PartThree = styled.div`
    margin : 80px 0 0 30px;
    width : calc(100% - 30px);

    @media (max-width : 420px) {
        margin : 80px 0 0 0;
        width : 100%;
    }
`

const PartThreeTitle = styled(Title)`
    margin : 0 0 0 0;
    padding : 6px 0 0 0;

    & > br {
        display : none !important;
    }

    @media (max-width : 420px) {
        & > br {
            display : inline;
        }
    }
`

const PartThreeTextWrapper = styled.div`
    display : flex;
    justify-content : space-between;
    border-bottom : 1px solid #545454;

    @media (max-width : 420px) {
        display : flex;
    }
`

const FileLabel = styled.label`
    cursor : pointer;
`

const FileInput = styled.input`
    display : none;
`

const FileIcon = styled.div`
    font-size : 30px;
`

const PartThreeDesc = styled.div`
    font-size : 12px;
    color : #0094FF;
    margin : 15px 0 0 0;

    @media (max-width : 420px) {
        font-size : 10px;
        width : 260px;
    }
`

const PartFour = styled.div`
    margin : 80px 0 0 0;
`

const BudgetCheckbox = styled.div`
    display : flex;
    justify-content : space-between;
    margin : 40px 0 0 0;

    @media (min-width: 421px) and (max-width: 768px) {
        display : flex;
        flex-wrap: wrap;

        & > div {
            width : 130px;
        }
    }

    @media (max-width : 420px) {
        display : flex;
        flex-wrap: wrap;

        & > div > div {
            width : 140px;
        }
    }
`

const PartFive = styled.div`
    margin : 110px 0 0 0;
`

const InputContainer = styled.div`
    margin : 40px 0 0 0;
`

const InputWrapper = styled.div`
    display : flex;
    margin : 0 0 0 30px;
    width : calc(100% - 30px);
    padding : 0 0 20px 0;
    border-bottom : 1px solid #545454;

    @media (max-width : 420px) {
        width : 100%;
        margin : 0 0 0 0;
    }
`

const InputTitle = styled.p`
    width : 200px;
    font-size : 18px;

    @media (min-width: 421px) and (max-width: 768px) {
        font-size : 14px;
        width : 250px;
    }

    @media (max-width : 420px) {
        font-size : 14px;
        width : 250px;
    }
`

const PartFiveInput = styled.input`
    background : transparent;
    border : 0;
    outline : none;
    font-size : 18px;
    width : 400px;
    color : white;
    &:focus {
        color : white;
    }

    @media (min-width: 421px) and (max-width: 768px) {
        font-size : 14px;
    }

    @media (max-width : 420px) {
        font-size : 14px;
        padding-top : 2px;
    }
`

const SquareCheckboxWrapper = styled.div`
    margin : 35px 0 0 30px;

    @media (max-width : 420px) {
        margin : 20px 0 0 0;
    }
`

const InputWrapperMargin = styled(InputWrapper)` 
    margin : 90px 0 0 30px;

    @media (max-width : 420px) {
        margin : 90px 0 0 0;
    }
`

const IndividaulWrapper = styled.div`
    margin : 110px 0 0 0;
`

const LastDesc = styled.p`
    font-size : 18px;
    color : white;
    margin : 40px 0 0 30px;
    width : calc(100% - 30px);
  
    @media (min-width: 769px) and (max-width: 1024px) {
        margin : 70px 0 0 30px;
        font-size : 18px;
        line-height : 24px;
    }


    @media (min-width: 421px) and (max-width: 768px) {
        font-size : 14px;
    }

    @media (max-width : 420px) {
        margin : 40px 0 0 0;
        width : 100%;
        font-size : 12px;
    }
`

const SubmitBtn = styled.button`
    margin : 85px 0 0 30px;
    width : calc(100% - 30px);
    height : 95px;
    font-size : 24px;
    color : black;
    background-color : #00FFB2;
    border : 0;
    outline : none;
    cursor : pointer;
    border-radius : 5px;
    transition: 0.4s ease all;
    -moz-transition: 0.4s ease all;
    -webkit-transition: 0.4s ease all;

    &:hover {
        background-color : #00FFD1;
        box-shadow: 0 0 10px 3px rgba(0,0,0, 0.3);
    }

    @media (max-width : 420px) {
        width : 100%;
        margin : 85px 0 100px 0;
        height : 60px;
        font-size : 18px;
    }
`

const IndividualBtn = styled.a`
    color : #00FFB2;
    display : inline-block;
    border-bottom : 2px solid #00FFB2;
    padding : 0 0 7px 0;
`

const PolicyWrapper = styled.div`
    height : 100%;
    position : fixed;
    top : 0;
    left : 0;
    z-index : 9999;
    width : 100%;
`

export default RightSide;