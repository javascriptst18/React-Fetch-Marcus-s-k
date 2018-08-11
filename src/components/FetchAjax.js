import React, { Component } from 'react';
import Button from './Button';
import InputFilter from './InputFilter';
import Movie from './Movie';

class FetchData extends React.Component {
    
    state = {
        trendingMovies: []
    }

    // lifecycle method
    componentDidMount(){
        this.fetchDataFromAPI();        
    } 

    fetchDataFromAPI = (filter = '') => {
        fetch(`https://javascriptst18.herokuapp.com/trending?title_like=${filter}`)
            .then(response => response.json())
            .then((trendingMovies) => {
                this.setState({trendingMovies: trendingMovies});
            });
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.setState({filter: event.target.value});
            this.fetchDataFromAPI(event.target.value); 
        }
    }

    render(){

        // För att skicka upp information
        // onClick = {() => console.log(movie.id)}

        const movies = this.state.trendingMovies.map((movie, index) => {
            return ( 
            <div key={index} className="col-4 center">
                <h2>{movie.title}</h2>
                <p>{movie.rating}</p>
                <img src={movie.poster} alt="Movie poster"/>
                <div className="row">
                <Button name="Like"/>
                </div>
            </div>    
        );
        });

        // For loop method insted of map above
        /*
        const movieList = [];
        for(let movie of this.state.trendingMovies){
            movieList.push(<p>{movie.title}</p>);
        }
        */
        
        if (this.state.trendingMovies.length) {
            return (
                <div>
                    <InputFilter handleKey={this.handleKeyPress}/>
                    <Movie movies={movies}/>
                </div>
            );
        }
        else {
            return <p>LOADING!!!</p>
        }
    }
}

export default FetchData;