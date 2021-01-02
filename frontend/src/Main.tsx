import * as React from 'react';
import { Banner } from './Banner';

export interface MainProps
{

}

export class Main extends React.Component<MainProps, {}>
{

    public render(): JSX.Element
    {
        return (
            <Banner />
        );
    }
}