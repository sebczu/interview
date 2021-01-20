import * as React from 'react';
import styled from "styled-components";
import { keyframes } from "styled-components";
import { QuestionType } from './QuestionType';

const QuestionAnimation = keyframes`
  0% { opacity: 0.0 }
  100% { opacity: 1.0 }
`;

const QuestionStyle = styled.div`
  background-color: #2A9D8F;
  padding: 1em;
  margin-top: 1.5em;

  animation: ${QuestionAnimation} 500ms linear;
`;

const QuestionDivStyle = styled.div`
  overflow:hidden
`;

const QuestionTextStyle = styled.h4`
  display: inline;
  float: left;
  color: #264653;
  font-size: 1em;
  font-weight: 500;
  margin: 0px;
`;

const QuestionInputStyle = styled.textarea`
  display: inline;
  float: left;
  border: 0.125em solid #264653;
  font-size: 1em;
  font-weight: 500;
  height: 1em;
  min-height: 1em;
  width: 85%;
  min-width: 85%;
  max-width: 85%;
`;

const RemoveQuestionButtonStyle = styled.a`
  display: block;
  clear: both;
  
  text-align: center;
  width: 20%;
  color: #9E3C3A;
  border: 0.125em solid #9E3C3A;
  padding-top: 1em;
  padding-bottom: 1em;
  margin-top: 2em;
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;
  

  &:hover {
    background: #9E3C3A;
    color: #2A9D8F;
  }
`;

export interface QuestionProps
{
  questionIndex: number;
  data: QuestionData;
  questionInputHandler: (questionIndex: number, question: string) => void;
  questionRemoveHandler: (questionIndex: number) => void;
  questionTypeHandler: (questionIndex: number, questionType: string) => void;
}

export interface QuestionData 
{
  question: string;
  type: string;
  answers: Array<string>;
}

export class Question extends React.Component<QuestionProps, {}>
{

  constructor(props: QuestionProps) {
    super(props);
    this.questionInputHandler = this.questionInputHandler.bind(this);
    this.questionRemoveHandler = this.questionRemoveHandler.bind(this);
  }

  private questionInputHandler(e) {
    console.log("question [" + this.props.questionIndex + "] value: " + e.target.value);
    this.props.questionInputHandler(this.props.questionIndex, e.target.value);
  }

  private questionRemoveHandler(e) {
    console.log("question [" + this.props.questionIndex + "] removed");
    this.props.questionRemoveHandler(this.props.questionIndex);
  }

  public render()
  {
      return (
          <QuestionStyle>
            <QuestionDivStyle>
              <QuestionTextStyle> Question: </QuestionTextStyle>

              <QuestionInputStyle
                value={this.props.data.question}
                onChange={this.questionInputHandler}
              />

            </QuestionDivStyle>

            <QuestionType questionIndex={this.props.questionIndex} type={this.props.data.type} questionTypeHandler={this.props.questionTypeHandler} />

            <RemoveQuestionButtonStyle onClick={this.questionRemoveHandler}> REMOVE </RemoveQuestionButtonStyle>
          </QuestionStyle>
      );
  }


}