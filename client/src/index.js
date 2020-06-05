import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ZeitProvider, CssBaseline } from '@zeit-ui/react'; //Zeit-UI
import './index.css';
import App from './App';
import Header from "./components/Header/Header";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <ZeitProvider>
            <CssBaseline />
            <Header />
            <App />
        </ZeitProvider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
