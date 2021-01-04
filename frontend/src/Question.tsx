import * as React from 'react';
import styled from "styled-components";

const QuestionStyle = styled.div`
  background-color: #2A9D8F;
  padding: 1em;
  margin-top: 1.5em;
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
  index: number;
  data: QuestionData;
  questionInputHander: (questionIndex: number, question: string) => void;
  questionRemoveHander: (questionIndex: number) => void;
}

export interface QuestionData 
{
  question: string;
  type: string;
}

export class Question extends React.Component<QuestionProps, {}>
{

  constructor(props) {
    super(props);
    this.questionInputHander = this.questionInputHander.bind(this);
    this.questionRemoveHander = this.questionRemoveHander.bind(this);
  }

  private questionInputHander(e) {
    console.log("question [" + this.props.index + "] value: " + e.target.value);
    this.props.questionInputHander(this.props.index, e.target.value);
  }

  private questionRemoveHander(e) {
    console.log("question [" + this.props.index + "] removed");
    this.props.questionRemoveHander(this.props.index);
  }

  public render()
  {
      return (
          <QuestionStyle>
            <QuestionDivStyle>
              <QuestionTextStyle> Question: </QuestionTextStyle>

              <QuestionInputStyle
                value={this.props.data.question}
                onChange={this.questionInputHander}
              />
            </QuestionDivStyle>

            <RemoveQuestionButtonStyle onClick={this.questionRemoveHander}> REMOVE </RemoveQuestionButtonStyle>
          </QuestionStyle>
      );
  }


}