import * as React from 'react';
import styled from "styled-components";
import { Root } from './Root';

const CreateInterviewButtonStyle = styled.a`
  display:block;
  margin: auto;
  text-align: center;
  width: 20%;
  color: #E9C46A;
  border: 0.125em solid #E9C46A;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  font-size: 1.2rem;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    background: #E9C46A;
    color: #264653;
  }
`;


export interface CreateInterviewButtonProps
{
  root: Root
}

export class CreateInterviewButton extends React.Component<CreateInterviewButtonProps, {}>
{

  constructor(props) {
    super(props);
  }

  public render(): JSX.Element
  {
      return (
          <CreateInterviewButtonStyle onClick={() => this.onClick()}>
            CREATE NEW INTERVIEW
          </CreateInterviewButtonStyle>
      );
  }

  onClick() {
    this.props.root.showInterviewForm();  
  }
}