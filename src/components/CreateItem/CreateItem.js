import  React, { Component } from 'react';
import  './CreateItem.scss';

//import axios from 'axios';
import  axios from '../../axios-orders';
import Spinner  from './../Spinner/Spinner';
import Slider from "../Slider/Slider";

class CreateItem extends Component {
    state = {
        title: '',
        content: '',
        price: '',
        url: '',
        loading: false
    }

    createItemHandler = () => {
        this.setState({loading: true});
        let idGeneratio = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const data = {
            title: this.state.title,
            content: this.state.content,
            price: this.state.price,
            url: this.state.url,
            //id: idGeneratio
        };
        axios.post('/items.json',  data)

            .then( response => {
                console.log(response)
                this.setState({loading: false});
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false})
            });
    };

    render (){
        return (
            <div className="CreateItem">
                <div className="header">Add  item </div>
                <div className="inputItem">
                    <label > Url</label>
                    <input  type="text" value={this.state.url} onChange={(event) => {this.setState({url: event.target.value})}}/> <br/>
                </div>
                <div className="inputItem">
                    <label > Content </label>
                    <input type="text"  value={this.state.content} onChange={(event) => {this.setState({content: event.target.value})}}/><br/>
                </div>
                <div className="inputItem">
                    <label > Title</label>
                    <input  type="text" value={this.state.title} onChange={(event) => {this.setState({title: event.target.value})}}/> <br/>
                </div>
                <div className="inputItem">
                    <label > Price </label>
                    <input type="text"  value={this.state.price} onChange={(event) => {this.setState({price: event.target.value})}}/><br/>
                </div>


                <div className="inputItemButton">
                    <button onClick={this.createItemHandler}> Create Item </button>
                </div>

                {this.state.loading && <Spinner />}


            </div>

        )
    }
}

export default CreateItem;