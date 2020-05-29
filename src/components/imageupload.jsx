import React, { Component } from 'react';
import{storage} from '../firebase' ;

class ImageUpload extends Component {
    constructor(props) {
        super(props) ;
            this.state = { 
                image: null,
                url: ''
             }
            this.handleChange = this.handleChange.bind(this);
        }
        handleChange = e => {
            if(e.target.files[0]){
                const image =  e.target.files[0];
                this.setState(() => ({image}));
                this.handleUpload = this.handleUpload.bind(this);
            }
        }
        handleUpload = () => {
            const {image} = this.state;
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed', progress, error, complete);
        }

        render() {
            const style = {
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            };
            return (
                <div style={style}>
                    <input type="file" onChange={this.handleChange}/>
                    <button onClick={this.handleUpload}>Upload</button>
                </div>
            )
        }
}

export default ImageUpload;