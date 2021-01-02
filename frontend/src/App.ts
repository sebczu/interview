import { Main } from './Main';
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
        ReactDOM.render(React.createElement(Main, {}), document.getElementById("root"));
    }
}

new App();