import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const Checkbox = ({ id, type, name, handleClick, isChecked }) => {

  return (
    <CheckboxWrapper>
      <CheckBoxLabel>
        <CheckBoxInput
          id={id}
          name={name}
          type={type}
          onChange={handleClick}
          checked={isChecked}
        />
        <CheckBoxIcon checked={isChecked}>
          <svg width="15px" height="12px" viewBox="0 0 14 12">
          <polyline points="0.5 6 4.5 9 11.5 1"></polyline>
          </svg>
        </CheckBoxIcon>
        <CheckBoxText checked={isChecked}>{name}</CheckBoxText>
      </CheckBoxLabel>
    </CheckboxWrapper>
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
  transition: all 0.2s ease;
  & > svg {
    position: absolute;
    top: 4px;
    left: 5px;
    fill: none;
    stroke: #FF48ED;
    stroke-width: 1;
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
    background: #FF48ED;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
  }
  ${props => props.checked === true &&
  css`
    background: transparent;
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
`

const CheckBoxLabel = styled.label`
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  font-size : 18px;
  font-weight : 500;
  position : relative;
  width : 150px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size : 14px;
    line-height : 24px;
  }

  @media (min-width: 421px) and (max-width: 768px) {
    font-size : 10px;
}

  @media (max-width : 420px) {
    font-size : 14px;
  }
`

const CheckBoxText = styled(CheckBoxSpan)`
  padding: 0 0 9px 0;
  margin : 0 0 0 6px;
  line-height : 100%;
  display : inline-block;
  border-bottom : 1px solid transparent;
  bottom : 3px;
  ${props => props.checked === true &&
  css`
    color : #FF48ED;
    border-bottom : 1px solid #FF48ED;
  `}
`

const CheckBoxInput = styled.input`
    display : none;
`

const CheckboxWrapper = styled.div`
    margin : 0 0 20px 0;
    height : 60px;

    @media (max-width : 420px) {
      width : 50%;
    }
`

export default Checkbox;