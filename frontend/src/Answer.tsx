import * as React from 'react';
import styled from "styled-components";


const AnswerStyle = styled.div`
  overflow:hidden
`;

const AnswerInputStyle = styled.textarea`
  display: inline;
  margin: 10px;
  float: left;
  border: 0.125em solid #264653;
  font-size: 1em;
  font-weight: 500;
  height: 1em;
  min-height: 1em;
  width: 70%;
  min-width: 70%;
  max-width: 70%;
`;

const RemoveAnswerButtonStyle = styled.a`
  display: inline;
  float: left;
  text-align: center;
  height:2%;
  width:2%;
  padding:1%;
  color: #9E3C3A;
  border: 0.125em solid #9E3C3A;
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    background: #9E3C3A;
    color: #2A9D8F;
  }
`;

export interface AnswerProps
{
  questionIndex: number;
  answerIndex: number;
}

export interface AnswerData 
{
  answer: string;
}

export class Answer extends React.Component<AnswerProps, {}>
{

  constructor(props: AnswerProps) {
    super(props);

  }

  private answerInputHandler(e) {
    console.log("question [" + this.props.questionIndex + "] answer [" + this.props.answerIndex + "] value: " + e.target.value);
    // this.props.questionInputHandler(this.props.questionIndex, e.target.value);
  }

  private answerRemoveHandler(e) {
    console.log("question [" + this.props.questionIndex + "] answer [" + this.props.answerIndex + "] removed");
    // this.props.questionRemoveHandler(this.props.questionIndex);
  }

  public render()
  {
      return (
          <AnswerStyle>
            <AnswerInputStyle />
            {/* <RemoveAnswerButtonStyle onClick={() => this.answerRemoveHandler()}> - </RemoveAnswerButtonStyle> */}
          </AnswerStyle>
      );
  }


}