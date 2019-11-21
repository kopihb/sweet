import  React, { Component } from 'react';
import  './CreateItem.scss';
import { Formik } from 'formik';

import axios from 'axios';

class CreateItem extends Component {
    state = {
        title: '',
        content: '',
        price: ''
    }

    createItemHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.price
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then( response => {
                console.log(response)
            } )

    };

    render (){
        return (

            <Formik initialValues={{title: " ", content: "", price: ""}}>
                {({values, handleChange, handleBlur}) => (
                    <form>
                        {JSON.stringify(values)}
                        <div className="input-row">
                            <label htmlFor="title"> Title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Enter title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                            />
                        </div>
                        <div className="input-row">
                            <label htmlFor="content"> content</label>
                            <input
                                type="text"
                                name="content"
                                id="content"
                                placeholder="Enter content"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.content}
                            />
                        </div>
                        <div className="input-row">
                            <label htmlFor="content"> content</label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                placeholder="Enter price"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                            />
                        </div>
                    </form>
                    )}

            </Formik>






        );
    }
}

export default CreateItem;



{/*<div className="CreateItem">*/}
{/*<div className="header">Add  item </div>*/}
{/*<div className="inputItem">*/}
{/*<label > Title</label>*/}
{/*<input  type="text" value={this.state.title} onChange={(event) => {this.setState({title: event.target.value})}}/> <br/>*/}
{/*</div>*/}

{/*<div className="inputItem">*/}
{/*<label > Content </label>*/}
{/*<input type="text"  value={this.state.content} onChange={(event) => {this.setState({content: event.target.value})}}/><br/>*/}
{/*</div>*/}
{/*<div className="inputItem">*/}
{/*<label > Price </label>*/}
{/*<input type="text"  value={this.state.price} onChange={(event) => {this.setState({price: event.target.value})}}/><br/>*/}
{/*</div>*/}


{/*<div className="inputItemButton">*/}
{/*<button onClick={this.createItemHandler}> Create Item </button>*/}
{/*</div>*/}

{/*</div>*/}