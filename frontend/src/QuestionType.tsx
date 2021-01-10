import * as React from 'react';
import styled from "styled-components";
import { keyframes } from "styled-components";

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

}

export class QuestionType extends React.Component<QuestionTypeProps, {}>
{

  constructor(props) {
    super(props);
    
  }


  public render()
  {
      return (
        <QuestionTypeStyle>
          <QuestionTypeDivStyle>
            <QuestionTypeTextStyle> Type: </QuestionTypeTextStyle>
            <QuestionTypeInputStyle value="text" name="type" checked/>
            <QuestionTypeLabelStyle> Text </QuestionTypeLabelStyle>
            <QuestionTypeInputStyle value="checkbox" name="type"/>
            <QuestionTypeLabelStyle> Checkbox </QuestionTypeLabelStyle>
            <QuestionTypeInputStyle value="radio" name="type"/>
            <QuestionTypeLabelStyle> Radio </QuestionTypeLabelStyle>
          </QuestionTypeDivStyle>

          <QuestionTypeDivStyle>
          
          </QuestionTypeDivStyle>
        </QuestionTypeStyle>
      );
  }


}