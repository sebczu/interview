import * as React from 'react';
import styled from "styled-components";
import { Root } from './Root';

const CreateInterviewFormStyle = styled.div`
  margin: auto;
  border: 0.125em solid #E9C46A;
  width: 80%;
`;

const SubmitButtonStyle = styled.a`
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

export interface CreateInterviewFormProps
{
  root: Root;
}

export class CreateInterviewForm extends React.Component<CreateInterviewFormProps, {}>
{


  public render(): JSX.Element
  {
      return (
          <CreateInterviewFormStyle>
            <SubmitButtonStyle onClick={() => this.onClick()}>
              SUBMIT
            </SubmitButtonStyle>
          </CreateInterviewFormStyle>
      );
  }

  onClick() {
    this.props.root.showInterviewButton();  
  }
  
}