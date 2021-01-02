import styled from "styled-components";
import * as React from 'react';

const BannerStyle = styled.div`
  height: 8em;
`;

const HeaderStyle = styled.h4`
  margin: auto;
  text-align: center;
  width: 20%;
`;

export interface BannerProps
{

}

export class Banner extends React.Component<BannerProps, {}>
{

    public render(): JSX.Element
    {
        return (
            <BannerStyle>
              <HeaderStyle>INTERVIEW CREATOR</HeaderStyle>
            </BannerStyle>
        );
    }
}