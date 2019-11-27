import React, { Component } from 'react';
import './Wrapper.scss';

import { Route, NavLink, Switch, Redirect} from 'react-router-dom';

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
                <Switch>
                    <Route path="/items" exact component={Main} />
                    <Route path="/items/:id" exact component={Item} />
                    <Route path="/admin"  component={Admin} />
                    <Redirect from="/" to="/items" />
                </Switch>




            </div>
        )
    }
}

export default Wrapper;