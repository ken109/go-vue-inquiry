import React from 'react';
import {Link} from "react-router-dom";

class Layout extends React.Component {
    render () {
        return (
            <div id="app">
                <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                    <div className="container">
                        <Link className="navbar-brand" to="/">React</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Nav">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">

                            </ul>

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add">新規</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <main className="py-4">
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;
