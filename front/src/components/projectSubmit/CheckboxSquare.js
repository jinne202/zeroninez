import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const Checkbox = ({ checked, title, ...rest }) => {
  return (
    <div>
      <CheckBoxLabel>
        <CheckBoxInput type="checkbox" checked={checked} {...rest} />
        <CheckBoxIcon checked={checked}>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </CheckBoxIcon>
        <CheckBoxText checked={checked}>{title}</CheckBoxText>
      </CheckBoxLabel>
    </div>
  );
}

const wave = keyframes`
  50% {
    transform: scale(0.9);
  }
`

const CheckBoxSpan = styled.span`
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
`

const CheckBoxIcon = styled(CheckBoxSpan)`
  position: relative;
  width: 24px;
  height: 24px;
  transform: scale(1);
  vertical-align: middle;
  border: 1px solid #9098A9;
  border-radius : 2px;
  background-color : #585858;
  transition: all 0.2s ease;
  & > svg {
    position: absolute;
    top: 6px;
    left: 5px;
    fill: none;
    stroke: #FFFFFF;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #00FFB2;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
  }
  ${props => props.checked === true &&
  css`
    background: #00FFB2;
    border-color: #00FFB2;
    animation: ${wave} 0.4s ease;
    & > svg {
      stroke-dashoffset: 0;
    }
    &:before {
      transform: scale(3.5);
      opacity: 0;
      transition: all 0.6s ease;
    }
  `}

  @media (max-width : 399px) {
    width : 18px;
    height : 18px;

    & > svg {
      top : 2px;
      left : 2px;
    }
  }
`

const CheckBoxLabel = styled.label`
  margin: auto;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  font-size : 18px;
  font-weight : 400;
  position : relative;
  width : 100%;
  display : inline-block;
`

const CheckBoxText = styled(CheckBoxSpan)`
  padding-left: 20px;
  position : absolute;
  line-height : 100%;
  top : 7px;
  ${props => props.checked === true &&
  css`
  `}

  @media (min-width: 769px) and (max-width: 1024px) {
    top : 4px;
    font-size : 14px;
    line-height : 24px;
  }

  @media (min-width: 421px) and (max-width: 768px) {
    top : 4px;
    font-size : 14px;
    line-height : 24px;
}

  @media (max-width : 420px) {
    font-size : 10px;
    line-height : 14px;
    top : 10px;
    padding-left : 10px;
  }
`

const CheckBoxInput = styled.input`
  display : none;
`

export default Checkbox;