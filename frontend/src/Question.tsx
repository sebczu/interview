import * as React from 'react';
import styled from "styled-components";

const QuestionStyle = styled.div`
  background-color: #2A9D8F;
`;

const QuestionTextStyle = styled.h4`

`;

const RemoveQuestionButtonStyle = styled.a`
  display:block;
  text-align: center;
  width: 20%;
  color: #9E3C3A;
  border: 0.125em solid #9E3C3A;
  padding-top: 1em;
  padding-bottom: 1em;
  margin: 2em;
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
            <QuestionTextStyle> Question </QuestionTextStyle>

            <input
              value={this.props.data.question}
              onChange={this.questionInputHander}
            />

            <RemoveQuestionButtonStyle onClick={this.questionRemoveHander}> REMOVE </RemoveQuestionButtonStyle>
          </QuestionStyle>
      );
  }


}