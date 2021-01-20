import * as React from 'react';
import styled from "styled-components";
import { Answer } from './Answer';

const AnswerListStyle = styled.div`
  border: 1px solid black;
  margin: auto;
  margin-top: 1em;
  width: 100%;
`;

const AddAnswerButtonStyle = styled.a`
  display:block;
  text-align: center;
  height:3%;
  width:3%;
  padding:1%;
  color: #E9C46A;
  border: 0.125em solid #E9C46A;
  margin: 2em;
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    background: #E9C46A;
    color: #2A9D8F;
  }
`;

export interface AnswerListProps
{
  questionIndex: number;
}

export class AnswerList extends React.Component<AnswerListProps, {}>
{

  constructor(props) {
    super(props);
    
  }

  private onClick() { 
    
  }

  public render()
  {
      return (
        <AnswerListStyle>
          <Answer questionIndex={this.props.questionIndex} answerIndex={0}></Answer>
          <AddAnswerButtonStyle onClick={() => this.onClick()}> + </AddAnswerButtonStyle>
        </AnswerListStyle>
      );
  }


}