import React, { Component } from 'react';
import Modal from './modal.js';

class Title extends Component {
    constructor(props){
        super(props)
        this._header = ["title",  "producer", "description"]
        this.state={
            show : true,
            onClose:false
        }
    }
    showModal=()=>{
        this.setState({
            ...this.state,
            show:!this.state.show,
            onClose:true
        })
    }
    render(){
        const  {show}=this.state
        if(this.state.show !== this.props.show && this.state.onClose){
            this.state.show=this.props.show
            this.state.onClose=false
        }    
        return (
            <div className = 'title'>
                {
                    show? (
                        <Modal show={this.state.show} onClose = {this.showModal}>
                            <div>
                                <p>Director: {this.props.film.title}</p>
                                <p>Producer:  {this.props.film.producer}</p>
                                <p>Description: {this.props.film.description}</p>
                            </div>
                        </Modal>
                    ) : null
                }
            </div>
        )
    }
}

export default Title