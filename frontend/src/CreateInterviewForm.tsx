import * as React from 'react';
import styled from "styled-components";

const CreateInterviewFormStyle = styled.div`
  margin: auto;
  border: 0.125em solid #E9C46A;
  width: 80%;
`;

export interface CreateInterviewFormProps
{

}

export class CreateInterviewForm extends React.Component<CreateInterviewFormProps, {}>
{

    public render(): JSX.Element
    {
        return (
            <CreateInterviewFormStyle>
              
            </CreateInterviewFormStyle>
        );
    }
}