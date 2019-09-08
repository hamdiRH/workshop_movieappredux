import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import uuid from 'uuid'
import { connect } from "react-redux"
import { addmovie } from "../actions/actions"

class AddMovie extends Component {
    state = {
        id: uuid.v4(),
        year: null,
        img: "",
        stars: null,
        title: ""
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {
        const { year, stars, title, img } = this.state
        return (
            <div className="container">
                <h2>Add new movie</h2>

                <div className="form-group">
                    <label htmlFor="MovieName">Movie Name</label>
                    <input type="text" value={title} className="form-control" placeholder="Movie Name" name="title" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="MovieYear">Movie Year</label>
                    <input type="text" value={year} className="form-control" placeholder="Movie Year" name="year" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="MovieYear">Movie img</label>
                    <input type="text" value={img} className="form-control" placeholder="Movie image" name="img" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="MovieYear">Movie rate</label>
                    <input type="text" value={stars} className="form-control" placeholder="Movie rate" name="stars" onChange={this.handleChange} />
                </div>

                <Link to="/"><button type="button" className="btn btn-outline-info" onClick={() => this.props.addmovie(this.state)}>Submit</button></Link>
            </div>
        )
    }
}

const MapDispatchToProps = dispatch =>
    ({ addmovie: newmovie => dispatch(addmovie(newmovie)) })
export default connect(null, MapDispatchToProps)(AddMovie)
