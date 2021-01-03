import * as React from 'react';
import styled from "styled-components";
import { Root } from './Root';

const QuestionListStyle = styled.div`
  margin: auto;
  width: 80%;
`;

const AddQuestionButtonStyle = styled.a`
  display:block;
  text-align: center;
  width: 20%;
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
`;

export interface QuestionListProps
{

}

export class QuestionList extends React.Component<QuestionListProps, {}>
{

  public render(): JSX.Element
  {
      return (
          <QuestionListStyle>
            <AddQuestionButtonStyle onClick={() => this.onClick()}>
              ADD
            </AddQuestionButtonStyle>
          </QuestionListStyle>
      );
  }

  onClick() {
    console.log("add question");
  }
  
}