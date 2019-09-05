import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './navbar'
import MovieList from './movieList'
import AddMovie from "./AddMovie"

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Route exact path='/' component={MovieList} />
                {/* <Route exact path='/' render={() => <MovieList />} /> */}
                <Route path='/addmovie' component={AddMovie} />
            </BrowserRouter>
        )
    }
}
