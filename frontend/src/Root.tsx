import * as React from 'react';
import { Banner } from './Banner';
import styled from "styled-components";

const RootStyle = styled.div`
	background-color: #264653;
  color: white;
  font: 1.5rem/1.25 'Montserrat', sans-serif;
`;

export interface RootProps
{

}

export class Root extends React.Component<RootProps, {}>
{

    public render(): JSX.Element
    {
        return (
					<RootStyle>
            <Banner />
					</RootStyle>
        );
    }
}