import * as React from 'react';
import styled from 'styled-components';
import { keyframes } from "styled-components";
import { Question, QuestionData } from './Question';

const QuestionListStyle = styled.div`
  margin: auto;
  margin-top: 1em;
  width: 80%;
`;

const AddQuestionButtonAnimation = keyframes`
  0% { opacity: 0.0 }
  100% { opacity: 1.0 }
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

  animation: ${AddQuestionButtonAnimation} 500ms linear;
`;

export interface QuestionListProps
{

}

export interface QuestionListState
{
  questions: Map<number, QuestionData>;
}

export class QuestionList extends React.Component<QuestionListProps, QuestionListState>
{

  constructor(props: QuestionListProps) {
    super(props);
    let initQuestions = new Map<number, QuestionData>();
    initQuestions.set(1, {question: "", type: "text", answers: [""]});
    this.state = {
      questions: initQuestions,
    }
  }

  questionInputHandler = (questionIndex: number, question: string) => {
    for (let key of this.state.questions.keys()) {
      if (key === questionIndex) {
        this.state.questions.get(key).question = question;
      }       
    }

    this.setState({ 
      questions: this.state.questions
    })
  };

  questionRemoveHandler = (questionIndex: number) => {
    this.state.questions.delete(questionIndex);

    this.setState({ 
      questions: this.state.questions
    })
  };

  questionTypeHandler = (questionIndex: number, questionType: string) => {
    for (let key of this.state.questions.keys()) {
      if (key === questionIndex) {
        this.state.questions.get(key).type = questionType;
      }       
    }

    this.setState({ 
      questions: this.state.questions
    })
  };

  private onClick() { 
    let lastIndex = 0;
    if (this.state.questions.size !== 0) {
      lastIndex = Array.from(this.state.questions.keys()).pop();
    }
    this.state.questions.set(++lastIndex, {question: "", type: "text",  answers: [""]});

    this.setState({ 
      questions: this.state.questions
    })


    this.state.questions.forEach((item, index) => console.log("index: " + index + " item: "+ item.question));
  }

  public render(): JSX.Element
  {
      return (
          <QuestionListStyle>

            {
              Array.from( this.state.questions ).map(([key, value]) => {
                return <Question questionIndex={key} 
                  data={value}
                  questionInputHandler={this.questionInputHandler} 
                  questionRemoveHandler={this.questionRemoveHandler}
                  questionTypeHandler={this.questionTypeHandler} />

              })
            }

            <AddQuestionButtonStyle onClick={() => this.onClick()}> ADD </AddQuestionButtonStyle>
          </QuestionListStyle>
      );
  }
  
}