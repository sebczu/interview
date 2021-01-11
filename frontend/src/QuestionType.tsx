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
  index: number;
  type: string;
  questionTypeHandler: (questionIndex: number, questionType: string) => void;
}

export interface QuestionTypeState
{
  type: string;
}

export class QuestionType extends React.Component<QuestionTypeProps, QuestionTypeState>
{
  private textType: React.RefObject<HTMLInputElement>;

  constructor(props: QuestionTypeProps) {
    super(props);
    this.state = {
      type: this.props.type,
    }
    this.questionTypeHandler = this.questionTypeHandler.bind(this);
    this.textType = React.createRef();
    // this.textType.current.focus();
  }

  private setupType(type: string) {
    this.setState({ 
      type: type
    })
  }

  private questionTypeHandler(e) {
    console.log("question [" + this.props.index + "] change type: " + e.currentTarget.value);
    this.setupType(e.currentTarget.value);
    this.props.questionTypeHandler(this.props.index, e.currentTarget.value);
  }

  private click() {
    console.info("click");
    this.textType.current.focus();
  }

  public render()
  {
    const renderAnswer = () => {
      if(this.state.type === 'checkbox') {
        return <AnswerList />
      } else if (this.state.type === 'radio') {
        return <AnswerList />
      }
    }

    return (
      <QuestionTypeStyle>
        <QuestionTypeDivStyle>
          <QuestionTypeTextStyle> Type: </QuestionTypeTextStyle>
          <QuestionTypeInputStyle value="text" name="type" onChange={this.questionTypeHandler} ref={this.textType} />
          <QuestionTypeLabelStyle onClick={() => this.click()}> Text </QuestionTypeLabelStyle>
          <QuestionTypeInputStyle value="checkbox" name="type" onChange={this.questionTypeHandler}/>
          <QuestionTypeLabelStyle> Checkbox </QuestionTypeLabelStyle>
          <QuestionTypeInputStyle value="radio" name="type" onChange={this.questionTypeHandler}/>
          <QuestionTypeLabelStyle> Radio </QuestionTypeLabelStyle>
        </QuestionTypeDivStyle>

        <QuestionTypeDivStyle>
          {renderAnswer()}
        </QuestionTypeDivStyle>
      </QuestionTypeStyle>
    );
  }


}