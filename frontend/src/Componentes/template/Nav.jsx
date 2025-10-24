import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () =>(
    <aside className="menu-area">
        <nav className="menu-">
            <Link>
                <i className="fa fa-home"></i> Início 
            </Link>
            <Link>
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>
);

export default Nav;