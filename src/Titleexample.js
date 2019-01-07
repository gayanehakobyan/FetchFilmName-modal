import React, {Component} from 'react';
import Modal from './modal.js';
import './title.css';

class Title extends Component {
    constructor(props){
        super(props)
        this._header = ["title", "director", "producer", "description"]
        this.state={
            show : true,
        }
    }
    showModal=()=>{
        this.setState({
            ...this.state,
            show:!this.state.show
        })
    }
    render(){
        const  {show}=this.state
        return (
            <div className = 'title'>
                <div>{this.props.title}</div> 
                <button onClick={this.showModal}>More info</button>
                {
                    show? (
                        <Modal show={this.state.show} onClose = {this.showModal}>
                            <div>
                                <p><h4>Director: </h4>{this.props.film.director}</p>
                                <p><h4>Producer: </h4>{this.props.film.producer}</p>
                                <p><h4>Description: </h4> {this.props.film.description}</p>
                            </div>
                        </Modal>
                    ) : null
                }
            </div>
        )
    }
}


export default Title