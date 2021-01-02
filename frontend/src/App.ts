import { Root } from './Root';
import ReactDOM from 'react-dom';
import React from 'react';

export class App
{
    constructor()
    {
        this.render();
    }

    private render(): void
    {
        ReactDOM.render(React.createElement(Root, {}), document.body);
    }
}

new App();