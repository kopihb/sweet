import  React, { Component } from 'react';
import  './CreateItem.scss';

//import axios from 'axios';
import  axios from '../../axios-orders';

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
        // axios.post('https://jsonplaceholder.typicode.com/posts', data)
        //     .then( response => {
        //         console.log(response)
        //     } )
        axios.post('/items.json', data)
            .then( response => console.log(response))
            .catch(error => console.log(error));
    };

    render (){
        return (
            <div className="CreateItem">
                <div className="header">Add  item </div>
                <div className="inputItem">
                    <label > Title</label>
                    <input  type="text" value={this.state.title} onChange={(event) => {this.setState({title: event.target.value})}}/> <br/>
                </div>

                <div className="inputItem">
                    <label > Content </label>
                    <input type="text"  value={this.state.content} onChange={(event) => {this.setState({content: event.target.value})}}/><br/>
                </div>
                <div className="inputItem">
                    <label > Price </label>
                    <input type="text"  value={this.state.price} onChange={(event) => {this.setState({price: event.target.value})}}/><br/>
                </div>


                <div className="inputItemButton">
                    <button onClick={this.createItemHandler}> Create Item </button>
                </div>


            </div>

        )
    }
}

export default CreateItem;