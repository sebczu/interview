import * as React from 'react';
import { createGlobalStyle } from "styled-components";
import { Banner } from './Banner';
import { InterviewButton } from './InterviewButton';
import { InterviewForm } from './InterviewForm';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  * {
    padding: 0;
  }

  body {
    background-color: #264653;
    color: white;
    font: 1.5rem/1.25 'Montserrat', sans-serif;
  }
`

export interface RootProps
{

}

export interface RootState
{
  interviewButtonVisible: boolean;
}

export class Root extends React.Component<RootProps, RootState>
{

  constructor(props: RootProps) {
    super(props);
    this.state = {
      interviewButtonVisible: true
    }
  }

  public showInterviewForm() {    
    this.setState({      
      interviewButtonVisible: false    
    });  
  }

  public showInterviewButton() {    
    this.setState({      
      interviewButtonVisible: true    
    });  
  }

  public render(): JSX.Element
  {
    return (
      <div>
        <GlobalStyles />

        <Banner />
        {
        this.state.interviewButtonVisible
          ? <InterviewButton root={this} />
          : <InterviewForm root={this} />
        }

      </div>
    );
  }
}