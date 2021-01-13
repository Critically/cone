import React, { Component } from 'react';

const styles = {
    label: {
        margin:0,
        padding:0
    },
    input:{
        marginBottom: 10
    }
}

export default class Home extends Component {
    constructor(){
        super();
        this.state={ height:100, radius:80, seg:8 }
    }

    handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value })
    }

    handleSubmit = event =>{
        event.preventDefault();
        fetch('http://localhost:3030/cone', { 
            method: 'POST', 
            body: JSON.stringify({
                height: this.state.height, 
                radius: this.state.radius, 
                seg: this.state.seg
            }),
            headers:{ 
                'Content-Type': 'application/json', 
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type'
            } 
        }).then(res => res.json())
        .then(response => {
            console.log(response)
            this.props.history.push('/cone', response)
        }).catch(error => console.error('Error:', error))
    }

    render() {
      return (
        <div className="container mt-3">
            <div className="col-sm-6 mx-auto">
            <h1>Ввод параметров: </h1>
                <form onSubmit={this.handleSubmit}>
                    <label style = {styles.label} htmlFor="form_height">Height</label>
                    <input style = {styles.input} id="form_height" type="number" name="height" className="form-control" defaultValue="100"  onChange={this.handleChange}/>

                    <label style = {styles.label} htmlFor="form_radius">Radius</label>
                    <input style = {styles.input} id="form_radius" type="number" name="radius" className="form-control" defaultValue="80"  onChange={this.handleChange}/>

                    <label style = {styles.label} htmlFor="form_seg">Seg</label>
                    <input style = {styles.input} id="form_seg" type="number" name="seg" className="form-control" defaultValue="8"  onChange={this.handleChange}/>

                    <button type="submit" className="btn btn-primary">Calculate</button>
                </form>
                <hr/>
            </div>
        </div>
      );
    }
}