import React from 'react';
import styled from 'styled-components';

const PrivacyPolicy = () => {
    return (
        <PrivacyWrapper>
            <Title>개인정보처리방침</Title>
            <SubTitle>개인정보 수집이용에 대한 동의</SubTitle>
            <Description>회원님의 소중한 개인정보는 다음과 같은 정책에 따라 수집 및 이용됩니다. 저희 제로나인즈에서는 해당 목적에 연관되는 개인정보만을 수집하며, 수집된 정보를 투명하고 안전하게 보호 관리할 것을 약속합니다. 이에 개인정보 수집및 이용에 대한 동의를 구합니다.<span>이 개인정보처리방침은 2021년 3월 5일부터 적용됩니다.</span></Description>
            <SubTitle>개인정보의 수집·이용 목적</SubTitle>
            <Description>회원님의 프로젝트에 대한 견적, 기간, 개발방법 등의 문의에 대한 정보가 보다 정확한 답변을 위해 수집됩니다. 회사는 수집한 개인정보를 프로젝트 의뢰 대응, 서비스 제공에 관한 계약 이행, 고객 관리, 서비스 개선 및 마케팅, 광고에의 활용을 목적으로 사용하고 있습니다.</Description>
            <SubTitle>수집항목</SubTitle>
            <Description>필수항목: 프로젝트 분야, 성명, 회사명, 연락처, 이메일, 의뢰내용, 예산<br/>선택항목: 첨부파일</Description>
            <SubTitle>보유이용기간</SubTitle>
            <Description>원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</Description>
            <SubTitle>개인정보 파기절차 및 파기방법</SubTitle>
            <Description>개인정보의 수집 및 이용 목적이 달성 되면, 개인정보를 신속하고 안전한 방법으로 파기합니다. 회사는 개인정보 보유기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 해당 정보를 지체 없이 파기합니다. 고객이 프로젝트 의뢰 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 데이터베이스로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정기간 저장된 후 파기됩니다. 별도 데이터베이스로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다. 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 이용하여 삭제하고, 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기됩니다.</Description>
        </PrivacyWrapper>
    )
}

const PrivacyWrapper = styled.div`
    width : 100%;
    background-color : #eee;
    z-index : 9999;
    position : absolute;
    top : 0;
    left : 0;
    padding : 100px 15%;
    overflow : scroll;
`

const Title = styled.p`
    font-size : 36px;
    margin : 0 0 100px 0;
`

const SubTitle = styled.p`
    font-size : 18px;
    font-weight : 600;
    margin : 0 0 20px 0;
`

const Description = styled.p`
    font-size : 16px;
    line-height : 160%;
    margin : 0 0 50px 0;

    & > span {
        display : block;
        margin : 10px 0 0 0;
    }
`

export default PrivacyPolicy;