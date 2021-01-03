import * as React from 'react';
import styled from "styled-components";
import { Banner } from './Banner';
import { CreateInterviewButton } from './CreateInterviewButton';
import { CreateInterviewForm } from './CreateInterviewForm';

const RootStyle = styled.div`
	background-color: #264653;
  color: white;
  font: 1.5rem/1.25 'Montserrat', sans-serif;
`;

export interface RootProps
{

}

export interface RootState
{
  createInterviewButtonVisible
}

export class Root extends React.Component<RootProps, RootState>
{

  constructor(props) {
    super(props);
    this.state = {
      createInterviewButtonVisible: true
    }
  }

  public showInterviewForm() {    
    this.setState({      
      createInterviewButtonVisible: false    
    });  
  }

  public render()
  {
    return (
      <RootStyle>
        <Banner />
        {
        this.state.createInterviewButtonVisible
          ? <CreateInterviewButton root={this} />
          : <CreateInterviewForm />
        }
      </RootStyle>
    );
  }
}