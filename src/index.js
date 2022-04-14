import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <Search/>
    </React.StrictMode>,
    document.getElementById('app')
);

