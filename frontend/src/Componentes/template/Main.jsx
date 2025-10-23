import './Main.css';
import React from 'react';
import Header from './Header';

const Main = (props) =>(
    <>
    <Header {...props}/>
    <main className="content container-fluid">
        <div>
            {props.children}
        </div>
    </main>
    </>
);

export default Main;