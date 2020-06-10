import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div className="header-nav">
                <div className="container">
                    <ul className="nav text-center">
                        <li className="nav-item">
                            <a className="nav-link" href="/">RUB</a>    
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/czk">CZK</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;
