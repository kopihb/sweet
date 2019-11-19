import React, { Component } from 'react';
import './Wrapper.scss';

import { Route, NavLink} from 'react-router-dom';

import Admin  from '../Admin/Admin';
import Main from '../Main/Main';
import Item from "../../components/Item/Item";



class Wrapper extends Component {
    render () {
        return (
            <div className="Wrapper">

                    <header>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/" exact >Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={{
                                        pathname: '/admin'
                                    }}>Admin</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </header>

                <Route path="/" exact component={Main} />
                <Route path="/admin"  component={Admin} />



            </div>
        )
    }
}

export default Wrapper;