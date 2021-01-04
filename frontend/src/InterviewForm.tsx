import * as React from 'react';
import styled from "styled-components";
import { keyframes } from "styled-components";
import { Root } from './Root';
import {QuestionList} from './QuestionList';

const InterviewFormStyle = styled.div`
  margin: auto;
  border: 3px solid #E9C46A;
  width: 90%;
`;

const SubmitButtonAnimation = keyframes`
  0% { opacity: 0.0 }
  100% { opacity: 1.0 }
`;

const SubmitButtonStyle = styled.a`
  display:block;
  text-align: center;
  width: 15%;
  color: #E9C46A;
  border: 0.125em solid #E9C46A;
  padding-top: 1em;
  padding-bottom: 1em;
  margin: 2em;
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    background: #E9C46A;
    color: #264653;
  }

  animation: ${SubmitButtonAnimation} 500ms linear;
`;

export interface InterviewFormProps
{
  root: Root;
}

export class InterviewForm extends React.Component<InterviewFormProps, {}>
{

  public render(): JSX.Element
  {
      return (
          <InterviewFormStyle>
            <QuestionList />

            <SubmitButtonStyle onClick={() => this.onClick()}>
              SUBMIT
            </SubmitButtonStyle>
          </InterviewFormStyle>
      );
  }

  onClick() {
    this.props.root.showInterviewButton();  
  }
  
}