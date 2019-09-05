import React from 'react'
import { Link } from 'react-router-dom'

const AddMovie = () => {
    return (
        <div>
            <div className="container">
                <h2>Add new movie</h2>

                <div className="form-group">
                    <label htmlFor="MovieName">Movie Name</label>
                    <input type="text" className="form-control" placeholder="Movie Name" name="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="MovieYear">Movie Year</label>
                    <input type="text" className="form-control" placeholder="Movie Year" name="year" />
                </div>
                <div className="form-group">
                    <label htmlFor="MovieYear">Movie img</label>
                    <input type="text" className="form-control" placeholder="Movie image" name="img" />
                </div>
                <div className="form-group">
                    <label htmlFor="MovieYear">Movie rate</label>
                    <input type="text" className="form-control" placeholder="Movie rate" name="stars" />
                </div>

                <Link to="/"><button type="button" className="btn btn-default">Submit</button></Link>
            </div>
        </div>
    )
}

export default AddMovie
