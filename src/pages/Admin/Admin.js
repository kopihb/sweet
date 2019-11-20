import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Admin.scss';
import CreateItem from "../../components/CreateItem/CreateItem";

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
                            </ul>
                        </nav>
                    </header>
                </div>
                <div className="item-block">
                    <Route path="/admin/create-post" component={CreateItem} />
                </div>
                </div>

            </div>
        )
    }
}

export default Admin;