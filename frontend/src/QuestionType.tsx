import * as React from 'react';
import { RefObject } from 'react';
import styled from "styled-components";
import { keyframes } from "styled-components";
import { AnswerList } from './AnswerList';

const QuestionTypeStyle = styled.div`
  border: 1px solid black;
`;

const QuestionTypeDivStyle = styled.div`
  overflow:hidden
`;

const QuestionTypeTextStyle = styled.h4`
  display: inline;
  float: left;
  color: #264653;
  font-size: 1em;
  font-weight: 500;
  margin: 0px;
`;

const QuestionTypeInputStyle = styled.input.attrs({ type: 'radio' })`
  margin-left: 3%;
`;

const QuestionTypeLabelStyle = styled.label`
  color: #264653;
  font-size: 1em;
  font-weight: 500;
  margin: 0px;
`;

export interface QuestionTypeProps
{
  questionIndex: number;
  type: string;
  questionTypeHandler: (questionIndex: number, questionType: string) => void;
}

export interface QuestionTypeState
{
  type: string;
}

export class QuestionType extends React.Component<QuestionTypeProps, QuestionTypeState>
{

  constructor(props: QuestionTypeProps) {
    super(props);
    this.state = {
      type: this.props.type,
    }
    this.questionTypeHandler = this.questionTypeHandler.bind(this);
  }

  private setupType(type: string) {
    this.setState({ 
      type: type
    })
  }

  private questionTypeHandler(e) {
    console.log("question [" + this.props.questionIndex + "] change type: " + e.currentTarget.value);
    this.setupType(e.currentTarget.value);
    this.props.questionTypeHandler(this.props.questionIndex, e.currentTarget.value);
  }

  private clickTextLabel() {
    this.setupType("text");
  }

  private clickCheckboxLabel() {
    this.setupType("checkbox");
  }

  private clickRadioLabel() {
    this.setupType("radio");
  }

  private inputName(): string {
    return "type" + this.props.questionIndex;
  }

  public render()
  {
    const renderAnswer = () => {
      if(this.state.type === 'checkbox') {
        return <AnswerList questionIndex={this.props.questionIndex}/>
      } else if (this.state.type === 'radio') {
        return <AnswerList questionIndex={this.props.questionIndex}/>
      }
    }

    return (
      <QuestionTypeStyle>
        <QuestionTypeDivStyle>
          <QuestionTypeTextStyle> Type: </QuestionTypeTextStyle>

          <QuestionTypeInputStyle value="text" 
            name={this.inputName()} 
            onChange={this.questionTypeHandler} 
            checked={this.state.type === "text"}/>
          <QuestionTypeLabelStyle onClick={() => this.clickTextLabel()}> Text </QuestionTypeLabelStyle>

          <QuestionTypeInputStyle value="checkbox" 
            name={this.inputName()} 
            onChange={this.questionTypeHandler} 
            checked={this.state.type === "checkbox"}/>
          <QuestionTypeLabelStyle onClick={() => this.clickCheckboxLabel()}> Checkbox </QuestionTypeLabelStyle>

          <QuestionTypeInputStyle value="radio" 
            name={this.inputName()} 
            onChange={this.questionTypeHandler} 
            checked={this.state.type === "radio"}/>
          <QuestionTypeLabelStyle onClick={() => this.clickRadioLabel()}> Radio </QuestionTypeLabelStyle>
        </QuestionTypeDivStyle>

        <QuestionTypeDivStyle>
          {renderAnswer()}
        </QuestionTypeDivStyle>
      </QuestionTypeStyle>
    );
  }


}