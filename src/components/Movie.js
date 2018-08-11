import React, { Component } from 'react';
import Button from './Button';

class Movie extends React.Component {

    state = {
        liked: false
    }

    handleChange = (event) => {
        this.setState({liked: true});
    }
    
    

    render(){

        return (
            <div className="row">
                {this.props.movies}
            </div>
        );
    }
}

export default Movie;