import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './Admin.scss';
import CreateItem from "../../components/CreateItem/CreateItem";
import Main from "../Main/Main";

class Admin extends Component {
    render (){
        return(
            <div className='Admin'>
                <hr/>
                <h1>ADMIN PAGE</h1>
                <hr/>
               <div className="container">
                <div className="menu-block">
                    <header>
                        <nav>
                            <ul>
                                <li>
                                    <Link to='/admin/create-post'>Create new post</Link>
                                </li>
                                <li>
                                    <Link to='/admin/all-posts'>All posts</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div>
                <div className="item-block">
                    <Switch>
                        <Route path="/admin/create-post" component={CreateItem} />
                        <Route path="/admin/all-posts"  component={Main} />
                    </Switch>

                </div>
                </div>

            </div>
        )
    }
}

export default Admin;